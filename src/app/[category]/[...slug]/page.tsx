import { notFound } from "next/navigation";
import { getAllServiceSlugs } from "@/data/helpers";
import { getServiceBySlug } from "@/data/data";
import { ClientPage } from "@/components";

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  const allSlugs = getAllServiceSlugs();
  return allSlugs.map(slugPath => {
    const parts = slugPath.split("/");
    const category = parts[0];
    const slug = parts.slice(1);
    return {
      category,
      slug,
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
