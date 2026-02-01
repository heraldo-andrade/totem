"use client"

import { HeaderInternal} from "@/components";
import { categoryData } from "@/data/data";
import { useState, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import styles from "./index.module.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const categoryConfig = {
  juventude: {
    title: 'Juventude',
    subtitle: 'Jornada do Cidadão',
    image: '/juventude-big.svg'
  },
  infancia: {
    title: 'Infância',
    subtitle: 'Jornada do Cidadão',
    image: '/infancia-big.svg'
  },
  adulta: {
    title: 'Fase Adulta',
    subtitle: 'Jornada do Cidadão',
    image: '/adulta-big.svg'
  },
  'terceira-idade': {
    title: 'Terceira Idade',
    subtitle: 'Jornada do Cidadão',
    image: '/idosa-big.svg'
  }
};

export default function CategoryPage() {
  const router = useRouter();
  const params = useParams();
  const categorySlug = params?.category as string;
  
  const [categoryAtiva, setCategoryAtiva] = useState('todos');

  const categoryData_ = useMemo(() => {
    return categoryData[categorySlug as keyof typeof categoryData] || [];
  }, [categorySlug]);

  const config = useMemo(() => {
    return categoryConfig[categorySlug as keyof typeof categoryConfig] || categoryConfig.juventude;
  }, [categorySlug]);

  const menuAtivo = categoryData_.find(
    menu => menu.category === categoryAtiva
  );

  const items =
    categoryAtiva === 'todos'
      ? categoryData_
          .filter(menu => menu.category !== 'todos')
          .flatMap(menu => menu.items)
      : menuAtivo?.items ?? [];

  return (
    <main className="overflow-hidden h-[100%] bg-[linear-gradient(to_bottom,_#F3F7FF_40%,_#e8f0ff_100%)]">
      {/* Header interno */}
      <HeaderInternal subtitle={config.subtitle} title={config.title} />

      {/* Conteúdo principal */}

        <section className={` conteinerTeste flex gap-5 h-[calc(100%-100px)]`}>

          <nav className={`${styles.navegation} text-black  p-5 flex gap-4 flex-col`}>
            {categoryData_.map(menu => (
                <a
                  className={menu.category == categoryAtiva ? styles.active : "" }
                  key={menu.id}
                  onClick={() => setCategoryAtiva(menu.category)}
                >
                  <span>
                    {menu.category == categoryAtiva ? (
                     <img  src={menu.iconeWhite} alt="icone branco" /> 
                    ) : (
                     <img  src={menu.iconeAzul} alt="icone colorido" /> 
                    ) }
                  </span>

                  {menu.title}
                </a>
            ))}
          </nav>

          <section className={styles.ilustracao}>
              <figure>
                  <img src={config.image} />
              </figure>
          </section>
         

          <section className={`${styles.conteinerCard}  w-full text-black  p-8 pr-0`}>
          
            <Swiper
              slidesPerView={1.5}
              grid={{
                rows: 3,
                fill: 'row',
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Grid, Pagination]}
              className="mySwiper"
            >
              {items.map((item, index) => (
                <SwiperSlide className="py-1" key={index}>
                  <div 
                    className={`${styles.card} rounded-2xl p-6`}
                    onClick={() => router.push(`/${categorySlug}/${item.slug}`)}
                  >
                    <div>
                      <span className={styles.tag}>{item.category}</span>
                    </div>

                    <span className={styles.title}>{item.title}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
                
          
          </section>

        </section>

    </main>
  );
}