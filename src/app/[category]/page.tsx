import CategoryPage from "./CategoryPage";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { category: "juventude" },
    { category: "infancia" },
    { category: "adulta" },
    { category: "terceira-idade" },
  ];
}

export default function Page() {
  return <CategoryPage />;
}
