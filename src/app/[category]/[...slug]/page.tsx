import { notFound } from "next/navigation";
import { getAllServiceSlugsWithCategory } from "@/data/helpers";
import { getServiceBySlug } from "@/data/data";
import { ClientPage } from "@/components";

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  const allSlugs = getAllServiceSlugsWithCategory();
  
  const params = allSlugs.map(({ slug, mainCategory }) => {
    // O slug já vem no formato "categoria/subcategoria/nome"
    // Precisamos dividir e pegar todas as partes exceto a primeira (que é a categoria do menu)
    const parts = slug.split("/");
    
    return {
      category: mainCategory,
      slug: parts, // Retorna todas as partes do slug como array
    };
  });

  // Log para debug (apenas em dev)
  if (process.env.NODE_ENV === 'development') {
    console.log(`[generateStaticParams] Gerando ${params.length} rotas estáticas`);
  }
  
  return params;
}

export default async function Page({
  params,
}: PageProps<"/[category]/[...slug]">) {
  const { category, slug } = await params;
  const service = getServiceBySlug(slug, category);

  if (!service) notFound();

  return <ClientPage service={service} category={category} />;
}
