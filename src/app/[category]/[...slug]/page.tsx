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
    <main className="min-h-screen bg-[linear-gradient(to_bottom,_#F3F7FF_40%,_#e8f0ff_100%)]">
      <HeaderInternal
        subtitle={config.subtitle}
        title={config.title}
        backHref={category ? `/${category}` : "/"}
        homeHref="/"
      />

      <section className="flex gap-5 pr-14 pl-14 pt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">



          {/* Coluna esquerda: tag, título, descrição, Impacto */}
          <div className="flex flex-col">
            <span className="mb-4 inline-block w-fit rounded-full bg-[#FFB60C] px-3 py-1.5 text-sm font-semibold text-[#0B274E]">
              {service.category}
            </span>
            <h1 className="text-2xl font-bold leading-tight text-[#0034B7] md:text-3xl">
              {service.title}
            </h1>
            <p className="mt-4 text-[18px]  text-[#494C57] ">
             {service.description}
            </p>
            <h2 className="mt-8 text-xl font-bold text-[#0034B7]">Impacto</h2>
            <p className="mt-2 text-[18px]  text-[#494C57]">
                {service.impact}
            </p>
          </div>

          {/* Coluna direita: Acesse o serviço + QR codes */}
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-[#0034B7]">
              Acesse o serviço
            </h2>
            <p className="mt-2 text-base text-[#494C57]">
              Conheça os detalhes deste serviço e como solicitar através do app{" "}
              <a
                href="https://www.pe.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0C2856] underline"
              >
                PE.gov
              </a>{" "}
              ou no portal de serviços de Pernambuco —{" "}
              <a
                href="https://www.pe.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0C2856] underline"
              >
                www.pe.gov.br
              </a>
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              <div className="flex flex-col items-center gap-2">
                <div
                  className="h-32 w-32 rounded-lg border  bg-white flex items-center justify-center"
                  aria-hidden
                >
                  <span className="text-xs text-[#28272C]">QR Code</span>
                </div>
                <span className="flex items-center gap-1.5 text-sm font-medium text-[#494C57]">
                  <img src="/icon-android.svg" />
                  Android
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div
                  className="h-32 w-32 rounded-lg border  bg-white flex items-center justify-center"
                  aria-hidden
                >
                  <span className="text-xs text-[#28272C]">QR Code</span>
                </div>
                <span className="flex items-center gap-1.5 text-sm font-medium text-[#494C57]">
                  <img src="/icon-ios.svg" />

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
