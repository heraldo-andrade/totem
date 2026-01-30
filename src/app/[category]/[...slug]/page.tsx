"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";
import { getServiceBySlug } from "@/data/data";
import { HeaderInternal } from "@/components";

const categoryConfig: Record<string, { title: string; subtitle: string }> = {
  juventude: { title: "Juventude", subtitle: "Jornada do Cidadão" },
  infancia: { title: "Infância", subtitle: "Jornada do Cidadão" },
  adulta: { title: "Fase Adulta", subtitle: "Jornada do Cidadão" },
  "terceira-idade": { title: "Terceira Idade", subtitle: "Jornada do Cidadão" },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const category = params?.category as string;
  const slug = params?.slug as string | string[];

  const service = useMemo(() => {
    if (!slug || !category) return null;
    return getServiceBySlug(slug, category);
  }, [slug, category]);

  const config = useMemo(
    () =>
      categoryConfig[category] ?? {
        title: category,
        subtitle: "Jornada do Cidadão",
      },
    [category]
  );

  if (!service) {
    return (
      <main className="min-h-screen bg-[#F8FAFC] px-4 py-8">
        <p className="text-[#28272C]">Serviço não encontrado.</p>
        <Link
          href={category ? `/${category}` : "/"}
          className="mt-4 inline-block font-semibold text-[#0034B7] underline"
        >
          Voltar
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <HeaderInternal
        subtitle={config.subtitle}
        title={config.title}
        backHref={category ? `/${category}` : "/"}
        homeHref="/"
      />

      <section className="mx-auto max-w-5xl px-4 py-6 md:px-6 md:py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
{/* 
           <p className="text-[#0B274E]">Categoria pai: {params.category}</p>
        <br />
        <p className="text-[#0B274E]">Categoria filho: {params?.slug && params?.slug[0]}</p>
        <br />
        <h1 className="text-[#0B274E]">{service.title}</h1>
        <p className="text-[#0B274E]">Categoria: {service.category}</p>
        <p className="text-[#0B274E]">ID: {service.id}</p>
        <p className="text-[#0B274E]">Slug: {service.slug} <br />{service.description}</p> */}



          {/* Coluna esquerda: tag, título, descrição, Impacto */}
          <div className="flex flex-col">
            <span className="mb-4 inline-block w-fit rounded-full bg-[#FFB60C] px-3 py-1.5 text-sm font-semibold text-[#0B274E]">
              {service.category}
            </span>
            <h1 className="text-2xl font-bold leading-tight text-[#0B274E] md:text-3xl">
              {service.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#494C57]">
             {service.description}
            </p>
            <h2 className="mt-8 text-xl font-bold text-[#0B274E]">Impacto</h2>
            <p className="mt-2 text-base leading-relaxed text-[#494C57]">
                {service.impact}
            </p>
          </div>

          {/* Coluna direita: Acesse o serviço + QR codes */}
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-[#0B274E]">
              Acesse o serviço
            </h2>
            <p className="mt-2 text-base leading-relaxed text-[#494C57]">
              Conheça os detalhes deste serviço e como solicitar através do app{" "}
              <a
                href="https://www.pe.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0034B7] underline"
              >
                PE.gov
              </a>{" "}
              ou no portal de serviços de Pernambuco —{" "}
              <a
                href="https://www.pe.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0034B7] underline"
              >
                www.pe.gov.br
              </a>
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              <div className="flex flex-col items-center gap-2">
                <div
                  className="h-32 w-32 rounded-lg border border-[#CED2D7] bg-white flex items-center justify-center"
                  aria-hidden
                >
                  <span className="text-xs text-[#494C57]">QR Code</span>
                </div>
                <span className="flex items-center gap-1.5 text-sm font-medium text-[#494C57]">
                  <svg
                    className="h-5 w-5 text-[#337FFF]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M17.523 2.048a2.5 2.5 0 0 0-2.5 2.5v15a2.5 2.5 0 0 0 2.5 2.5h2.5a2.5 2.5 0 0 0 2.5-2.5v-15a2.5 2.5 0 0 0-2.5-2.5h-2.5Zm-12.046 0a2.5 2.5 0 0 0-2.5 2.5v15a2.5 2.5 0 0 0 2.5 2.5h2.5a2.5 2.5 0 0 0 2.5-2.5v-15a2.5 2.5 0 0 0-2.5-2.5h-2.5Z" />
                  </svg>
                  Android
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div
                  className="h-32 w-32 rounded-lg border border-[#CED2D7] bg-white flex items-center justify-center"
                  aria-hidden
                >
                  <span className="text-xs text-[#494C57]">QR Code</span>
                </div>
                <span className="flex items-center gap-1.5 text-sm font-medium text-[#494C57]">
                  <svg
                    className="h-5 w-5 text-[#337FFF]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  iOS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
