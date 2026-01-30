import { BigCard } from "@/components";
import Image from "next/image";
import styles from "./index.module.scss";

export default function Home() {
  return (

      <main className="w-full h-screen pr-16 pl-16">
  
       <h1 className={`${styles.titlepage} text-text-bright`}>
        <span className={styles.destaque}>PERNAMBUCO</span> DIGITAL<br />
       </h1>
       <p className={styles.subtittle}>Jornada do cidadão</p>
       <section className="flex flex-wrap full-width justify-between">

        <ul className={styles.conteinerCardService}>
          <li>
              <div className={styles.header}>
                 <div className={`${styles.icon} `}><p>+</p></div>
                  <p className={`${styles.headerTitle} text-text-primary `}>Infância</p>
                  <p className={`${styles.description} text--text-secondary`}>
                  Lorem ipsum dolor sit amet,  consectetur adipiscing elit.
                  </p>
              </div>
              <div className={`${styles.conteinerAvatar}`}>
                <figure>
                  <img src="/cat-infancia.png" alt="" />
                </figure>
              </div>
          </li>
          <li>
              <div className={styles.header}>
              <div className={`${styles.icon} `}><p>+</p></div>

                  <p className={`${styles.headerTitle} text-text-primary `}>Juventude</p>
                  <p className={`${styles.description} text--text-secondary`}>
                  Lorem ipsum dolor sit amet,  consectetur adipiscing elit.
                  </p>
              </div>
              <div className={`${styles.conteinerAvatar}`}>
                <figure>
                  <img src="/juventude.png" alt="" />
                </figure>
              </div>
          </li>
          <li>
              <div className={styles.header}>
              <div className={`${styles.icon} `}><p>+</p></div>

                  <p className={`${styles.headerTitle} text-text-primary `}>Adulta</p>
                  <p className={`${styles.description} text--text-secondary`}>
                  Lorem ipsum dolor sit amet,  consectetur adipiscing elit.
                  </p>
              </div>
              <div className={`${styles.conteinerAvatar}`}>
                <figure>
                <img src="/cat-adulta.png" alt="" />

                </figure>
              </div>
          </li>
          <li>
              <div className={styles.header}>
              <div className={`${styles.icon} `}><p>+</p></div>

                  <p className={`${styles.headerTitle} text-text-primary `}>Terceira idade</p>
                  <p className={`${styles.description} text--text-secondary`}>
                  Lorem ipsum dolor sit amet,  consectetur adipiscing elit.
                  </p>
              </div>
              <div className={`${styles.conteinerAvatar}`}>
                <figure>
                  <img src="/cat-terceiraidade.png" alt="" />
                </figure>
              </div>
          </li>

        </ul>
     


        {/* <BigCard
          />
        <BigCard
         />
        <BigCard />
        <BigCard />  */}
       </section>

      </main>
  );
}
