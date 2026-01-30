"use client"

import { HeaderInternal} from "@/components";
import { juventudeData } from "@/data/data";
import { useState } from "react";
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
      <HeaderInternal subtitle="Jornada do Cidadão" title="Juventude" />

      {/* Conteúdo principal */}
      <section>
        {/* Barra superior com ações (Voltar / Início) - visual apenas por enquanto */}
        <section className="flex gap-5">
          <nav className="text-black bg-gray-300 p-5 flex gap-4 flex-col">
            {juventudeData.map(menu => (
              <button
                key={menu.id}
                onClick={() => setcategoryAtiva(menu.category)}
              >
                {menu.title}
              </button>
            ))}
          </nav>

          <section className="overflow-hidden w-full text-black bg-gray-300 p-8 pr-0">
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
                  <div className="rounded-2xl flex flex-col bg-white p-4">
                    <span>{item.category}</span>
                    <span>{item.title}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
                
            
            {/* {items.map(item => (
              <div key={item.id}>
                <div className="rounded-2xl flex flex-col bg-white p-4">
                  <span>{item.category}</span>
                  <span>{item.title}</span>
                </div>
              </div>
            ))} */}
          </section>
        </section>
      </section>

    </main>
  );
}
