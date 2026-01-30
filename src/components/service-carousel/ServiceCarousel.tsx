"use client"
import React, { useState } from "react";
import { ServiceCard, ServiceCardProps } from "../service-card";

export type ServiceCarouselProps = {
  items: ServiceCardProps[];
  className?: string;
};

/**
 * Carrossel horizontal de cards de serviço.
 * Pensado para mobile, com dots de paginação, mas reutilizável em outras telas.
 */
export function ServiceCarousel({ items, className }: ServiceCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className={className}>
      <div className="relative">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
          {items.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="snap-center first:pl-4 last:pr-4"
            >
              <ServiceCard {...item} />
            </div>
          ))}
        </div>

        {/* Dots de paginação */}
        <div className="mt-4 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ir para o slide ${index + 1}`}
              onClick={() => handleDotClick(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === activeIndex ? "bg-[#337FFF]" : "bg-[#CED2D7]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

