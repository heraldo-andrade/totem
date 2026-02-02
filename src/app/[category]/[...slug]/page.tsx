import { notFound } from "next/navigation";
import { getAllServiceSlugsWithCategory } from "@/data/helpers";
import { getServiceBySlug } from "@/data/data";
import { ClientPage } from "@/components";

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  const allSlugs = getAllServiceSlugsWithCategory();
  return allSlugs.map(({ slug, mainCategory }) => {
    const parts = slug.split("/");
    return {
      category: mainCategory,
      slug: parts, // Manter todos os segmentos do slug original
    };
  });
}

export default async function Page({
  params,
}: PageProps<"/[category]/[...slug]">) {
  const { category, slug } = await params;
  const service = getServiceBySlug(slug, category);

  if (!service) notFound();

  return <ClientPage service={service} category={category} />;
}
