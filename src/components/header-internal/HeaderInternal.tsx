"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ParticlesBackground from "../particlesBackground";


// TODO: substituir URLs locais pelos assets definitivos em `src/assets/images`
// Padrão de circuito será substituído pelo asset real quando disponível
const imgPattern =
  "http://localhost:3845/assets/pattern-circuit-board.png";



export type HeaderInternalProps = {
  className?: string;
  subtitle?: string;
  title: string;
  height?: "default" | "small" | "large";
  backHref?: string;
  homeHref?: string;
};

/**
 * Componente de header interno para páginas.
 * Exibe um banner horizontal com fundo azul escuro, padrão de circuito,
 * e texto branco com subtítulo e título principal.
 * Inclui um elemento decorativo arredondado no canto inferior esquerdo.
 */
export function HeaderInternal({
  className,
  subtitle = "Jornada do Cidadão",
  title,
  height = "default",
}: HeaderInternalProps) {
  const heightClasses = {
    small: "h-32 md:h-40",
    default: "h-40 md:h-48 lg:h-56",
    large: "h-48 md:h-64 lg:h-72",
  };

const router = useRouter();


  return (
  

    <main className="w-full">

        <header className="headerInterna text-text-primary bg-darker pr-0 pl-16">
            <div className="relative z-50">
              {subtitle && (
                  <p className="text-xs font-medium text-[#ffb60c] text md:text-base lg:text-lg">
                    {subtitle}
                  </p>
                )}
                <h1 className="text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl xl:text-5xl">
                  {title}
                </h1>
            </div>
            <div className="conteinerButton pr-16 relative z-50">
              
                  <button className="btn" onClick={() => router.back()}>
                      <figure>
                        <img src="/icon-back.svg" alt="" />
                      </figure>
                      Voltar
                    </button>

                    <button className="btn" onClick={() => router.push("/")}>
                      <figure>
                        <img src="/icon-home.svg" alt="" />
                      </figure>
                      Inicio
                    </button>


                  </div>

          <ParticlesBackground />
           
        </header>




  
    </main>
  );
}