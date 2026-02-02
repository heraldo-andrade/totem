"use client";

import { HeaderInternal } from "@/components";

export interface Service {
  title: string;
  description: string;
  impact: string;
  category: string;
}

interface ClientPageProps {
  service: Service;
  category: string;
}

export function ClientPage({
  service,
  category,
}: ClientPageProps) {
  return (
    <main>
      <HeaderInternal
        title={service.title}
        subtitle="Jornada do Cidadão"
        backHref={`/${category}`}
        homeHref="/"
      />
    </main>
  );
}
