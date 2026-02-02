import styles from "./index.module.scss";
import ParticlesBackground from "@/components/particlesBackground";

export default function Home() {
  return (

      <main className="overflow-auto w-full h-screen pr-16 pl-16 relative">
        <div className="relative z-50">
          <h1 className={`${styles.titlepage} text-text-bright`}>
            <span className={styles.destaque}>PERNAMBUCO</span> DIGITAL<br />
          </h1>
          <p className={styles.subtittle}>Jornada do cidadão</p>
          <section className="flex flex-wrap full-width justify-between">

            <ul className={`${styles.conteinerCardService}`}>
              <li>
                <a href="/infancia">
                  <div className={styles.header}>
                    <div className={`${styles.icon} `}><p>+</p></div>
                      <p className={`${styles.headerTitle} text-text-primary `}>Infância</p>
                      <p className={`${styles.description} text--text-secondary`}>
                      Lorem ipsum dolor sit amet,  consectetur adipiscing elit.
                      </p>
                  </div>
                  <div className={`${styles.conteinerAvatar}`}>
                    <figure>
                      <img src="/avatar-card-infancia.png" alt="" />
                    </figure>
                  </div>
                </a>
              </li>
      
              <li>
                  <a href="/juventude">
                    <div className={styles.header}>
                    <div className={`${styles.icon} `}><p>+</p></div>

                        <p className={`${styles.headerTitle} text-text-primary`}>Juventude</p>
                        <p className={`${styles.description} text--text-secondary`}>
                        Lorem ipsum dolor sit amet,  consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className={`${styles.conteinerAvatar}`}>
                      <figure>
                        <img src="/avatar-card-juventude.png" alt="" />
                      </figure>
                    </div>
                </a>
              </li>
              <li>
                <a href="/adulta">
                  <div className={styles.header}>
                  <div className={`${styles.icon} `}><p>+</p></div>

                      <p className={`${styles.headerTitle} text-text-primary `}>Idade Adulta</p>
                      <p className={`${styles.description} text--text-secondary`}>
                     
                      </p>
                  </div>
                  <div className={`${styles.conteinerAvatar}`}>
                    <figure>
                    <img src="/avatar-card-adulta.png" alt="" />

                    </figure>
                  </div>
                </a>
              </li>
              <li>
                <a href="/terceira-idade">
                  <div className={styles.header}>
                  <div className={`${styles.icon} `}><p>+</p></div>

                      <p className={`${styles.headerTitle} text-text-primary `}>Pessoa Idosa</p>
                      <p className={`${styles.description} text--text-secondary`}>
                      {/* Lorem ipsum dolor sit amet,  consectetur adipiscing elit. */}
                      </p>
                  </div>
                  <div className={`${styles.conteinerAvatar}`}>
                    <figure>
                      <img src="/avatar-card-idosa.png" alt="" />
                    </figure>
                  </div>
                </a>
              </li>

            </ul>
        


            {/* <BigCard
              />
            <BigCard
            />
            <BigCard />
            <BigCard />  */}
          </section>
        </div>

        <ParticlesBackground />
      </main>
  );
}
