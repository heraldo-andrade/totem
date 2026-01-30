"use client"

import { useParams } from "next/navigation";
import { getServiceBySlug } from "@/data/data";
import { useMemo } from "react";

export default function JuventudeInternalPage() {
  const params = useParams();
  const slug = params?.slug as string | string[];

  const service = useMemo(() => {
    if (!slug) return null;
    return getServiceBySlug(slug);
  }, [slug]);

  console.log(params)

  if (!service) {
    return (
      <main>
        <p>Serviço não encontrado</p>
      </main>
    );
  }

  return (
    <main>
      <p>Categoria pai: {params.category}</p>
      <br />
      <p>Categoria filho: {params?.slug && params?.slug[0]}</p>
      <br />
      <h1>{service.title}</h1>
      <p>Categoria: {service.category}</p>
      <p>ID: {service.id}</p>
      <p>Slug: {service.slug}</p>
    </main>
  );
}
