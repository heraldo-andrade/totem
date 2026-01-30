import React from "react";

type CardImageProps = {
  className?: string;
  idadeAdulta?: boolean;
  infantil?: boolean;
  juventude?: boolean;
  terceiraIdade?: boolean;
};

// TODO: substituir URLs locais pelos assets definitivos em `src/assets/images`
const imgBg =
  "http://localhost:3845/assets/ec47272239db1d34935ff9024afc9fc4434684bc.png";
const imgJuventude =
  "http://localhost:3845/assets/a438fe5b38462e088f4e9cdf0b7c680416a0e19d.png";
const imgIdadeAdulta =
  "http://localhost:3845/assets/099eda97f3a86ebade973537bcb03766fa992e2c.png";
const imgTerceiraIdade =
  "http://localhost:3845/assets/a5076d7a5e6fa0735cfcfdfbf3462faeb3b03ef2.png";
const imgInfantil =
  "http://localhost:3845/assets/cc1148654ca3abaedd96315e97a3d151d272d945.png";
const imgClose =
  "http://localhost:3845/assets/3afe37b99b0ef3d4f753a8b253fbb9bcedb9810a.svg";

function CardImage({
  className,
  idadeAdulta = true,
  infantil = false,
  juventude = false,
  terceiraIdade = false,
}: CardImageProps) {
  return (
    <div
      className={className ?? "relative h-[370px] w-[460px]"}
      data-name="card-image"
      data-node-id="119:758"
    >
      <div
        className="absolute left-0 top-6"
        data-node-id="119:682"
      >
        {/* Fundo azul com ondas */}
        <div
          className="absolute left-0 top-20 h-[286px] w-[460px] rounded-t-[57.29px]"
          data-name="bg"
          data-node-id="119:683"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-t-[57.29px]"
          >
            <div className="absolute inset-0 rounded-t-[57.29px] bg-[#337fff]" />
            <img
              alt=""
              className="absolute size-full max-w-none rounded-t-[57.29px] object-cover"
              src={imgBg}
            />
          </div>
        </div>

        {/* Variações de imagem por faixa etária */}
        {juventude && (
          <div
            className="absolute left-[92px] top-[39px] h-[404px] w-[295px]"
            data-name="juventude"
            data-node-id="119:684"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute left-0 top-[-0.06%] h-[205.53%] w-full max-w-none"
                src={imgJuventude}
              />
            </div>
          </div>
        )}

        {idadeAdulta && (
          <div
            className="absolute left-[78px] top-[39px] h-[404px] w-[319px]"
            data-name="Idade adulta"
            data-node-id="119:759"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute left-0 top-[-0.24%] h-[219.29%] w-full max-w-none"
                src={imgIdadeAdulta}
              />
            </div>
          </div>
        )}

        {terceiraIdade && (
          <div
            className="absolute left-[52px] top-[39px] h-[404px] w-[356px]"
            data-name="Terceira idade"
            data-node-id="119:761"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute left-0 top-0 h-[249.17%] w-full max-w-none"
                src={imgTerceiraIdade}
              />
            </div>
          </div>
        )}

        {infantil && (
          <div
            className="absolute left-[104px] top-6 h-[344px] w-[244px]"
            data-name="infantil"
            data-node-id="119:765"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute left-0 top-0 size-full max-w-none"
                src={imgInfantil}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

type IcCloseProps = {
  className?: string;
  size?: "Default" | "Small";
};

function IcClose({ className }: IcCloseProps) {
  return (
    <div
      className={
        className ??
        "relative flex size-6 flex-col items-center justify-center px-[2px] py-1"
      }
      data-node-id="19:1154"
    >
      <div
        className="relative size-6 shrink-0"
        data-name="close"
        data-node-id="19:1156"
      >
        <img
          alt=""
          className="block size-full max-w-none"
          src={imgClose}
        />
      </div>
    </div>
  );
}

export type BigCardProps = {
  className?: string;
  titulo?: string;
  descricao?: string;
  descricao2?: boolean;
  terceiraIdade?: boolean;
  /** Variantes de ilustração: apenas uma deve ser true por card. */
  infantil?: boolean;
  juventude?: boolean;
  idadeAdulta?: boolean;
};

// Componente principal BigCard, baseado no design do Figma.
export function BigCard({
  className,
  descricao = "Lorem ipsum dolor sit amet,  consectetur adipiscing elit.",
  descricao2 = false,
  terceiraIdade = false,
  titulo = "Infância",
  infantil = false,
  juventude = false,
  idadeAdulta = false,
}: BigCardProps) {
  return (
    <div
      className={
        className ??
        "relative flex h-[586px] w-[460px] flex-col items-start justify-between overflow-clip rounded-[32px] bg-white"
      }
      data-name="big-card"
      data-node-id="98:434"
    >
      {/* Cabeçalho: ícone + título */}
      <div
        className="flex w-full flex-col items-start px-7 py-6"
        data-name="texto"
        data-node-id="81:1581"
      >
        <div className="relative flex size-[90.51px] items-center justify-center">
          <div className="rotate-[135deg]">
            <div
              className="flex size-16 items-center justify-center rounded-full border border-[#0034b7]"
              data-name="bt-icon"
              data-node-id="81:1582"
            >
              <IcClose />
            </div>
          </div>
        </div>

        <div
          className="flex w-full flex-col gap-[9px] px-1.5 tracking-[-0.15px]"
          data-name="Container"
          data-node-id="81:1583"
        >
          <p
            className="w-full text-[48px] leading-[1.2] text-[#0034b7]"
            data-node-id="81:1584"
          >
            {titulo}
          </p>

          {descricao2 && (
            <p
              className="w-full text-[28px] leading-[1.2] text-[#494c57]"
              data-node-id="81:1585"
            >
              {descricao}
            </p>
          )}
        </div>
      </div>

      {/* Imagem principal do cartão */}
      <CardImage
        className="relative h-[370px] w-[460px]"
        infantil={infantil}
        juventude={juventude}
        idadeAdulta={idadeAdulta}
        terceiraIdade={terceiraIdade}
      />

      {/* Variação extra para terceira idade, se ativa */}
      {terceiraIdade && (
        <div
          className="absolute left-[179px] top-[290px] h-[287px] w-[102px]"
          data-name="Terceira idade"
          data-node-id="81:1591"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute left-0 top-0 size-full max-w-none"
              src={imgTerceiraIdade}
            />
          </div>
        </div>
      )}
    </div>
  );
}

