import React from "react";

export type ServiceCardProps = {
  tag?: string;
  title: string;
  description: string;
  className?: string;
};

/**
 * Card de serviço usado no carrossel da jornada.
 * Visual baseado no design de Juventude no Figma.
 */
export function ServiceCard({
  tag = "UPE",
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={`flex w-[280px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-[0_10px_25px_rgba(15,23,42,0.12)] ${
        className ?? ""
      }`}
    >
      <div className="inline-flex items-center gap-2">
        <span className="rounded-full bg-[#FFB60C] px-3 py-1 text-xs font-semibold text-[#28272C]">
          {tag}
        </span>
      </div>
      <h3 className="text-sm font-semibold text-[#28272C]">{title}</h3>
      <p className="text-xs leading-snug text-[#494C57]">{description}</p>
    </article>
  );
}

