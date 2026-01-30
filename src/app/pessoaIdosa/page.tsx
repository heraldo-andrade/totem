"use client"

import { HeaderInternal} from "@/components";
import { juventudeData, pessoaIdosaData } from "@/data/data";
import { useState } from "react";
import styles from "./index.module.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from "swiper/modules";
import { Grid, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

export default function JuventudePage() {

  const [categoryAtiva, setcategoryAtiva] = useState('todos');

  const menuAtivo = juventudeData.find(
    menu => menu.category === categoryAtiva
  );

  const items =
    categoryAtiva === 'todos'
      ? juventudeData
          .filter(menu => menu.category !== 'todos')
          .flatMap(menu => menu.items)
      : menuAtivo?.items ?? [];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-[#C7DBFF]">
      {/* Header interno */}
      <HeaderInternal subtitle="Jornada do Cidadão" title="Pessoa Idosa" />

      {/* Conteúdo principal */}
      <section>
        
        <section className="flex gap-5">
          
          {/* <div className={styles.contentMenu}> */}
              <nav className={`${styles.navegation} text-black  p-5 flex gap-4 flex-col`}>
                {pessoaIdosaData.map(menu => (
                    <a
                      key={menu.id}
                      onClick={() => setcategoryAtiva(menu.category)}
                    >
                      <span><img src="/icon-back.svg" alt="" /></span>
                      {menu.title}
                    </a>
                ))}
              </nav>


              <section className={styles.ilustracao}>
                  <figure>
                      <img src="/juventude-big.svg" />
                  </figure>
              </section>

          {/* </div> */}
         
          

          <section className={`${styles.conteinerCard} overflow-hidden w-full text-black  p-8 pr-0`}>
          
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
                  <div className={`${styles.card} rounded-2xl p-6`}>
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
      </section>

    </main>
  );
}
