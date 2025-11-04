import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative w-full min-h-[600px] lg:h-[806px] bg-primary-green overflow-hidden">
        <div className="hidden lg:block absolute left-[18px] top-[535px] w-[139px] h-[99px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1c65a1894c622d23daf9cca64fa5e2a33bae3f32?width=72"
            alt=""
            className="w-9 h-11 object-contain shadow-lg absolute left-0 top-[43px]"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/19ccb57ee2c96738ec3bd507c567f315ee334d28?width=162"
            alt=""
            className="w-20 h-[99px] object-contain shadow-lg absolute left-[22px] top-0"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9b6cfe807eba3f359aeee121dd9f08cb063548ce?width=118"
            alt=""
            className="w-[59px] h-[72px] object-contain shadow-lg absolute left-20 top-5"
          />
        </div>

        <div className="hidden lg:block absolute left-0 top-[605px] w-full h-[201px] bg-text-color"></div>

        <div className="relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[197px] flex flex-col items-center justify-center px-4 py-16 lg:py-0">
          <div className="relative">
            <div className="font-canopee text-[80px] md:text-[120px] lg:text-[168px] leading-none text-background text-center font-bold">
              PORTFOLIO
            </div>
            <div
              className="hidden lg:block absolute top-[118px] left-0 w-full font-canopee text-[168px] leading-none text-primary-green text-center font-bold"
              style={{ WebkitTextStroke: "3px #84592B" }}
            >
              PORTFOLIO
            </div>
            <div
              className="hidden lg:block absolute top-[235px] left-0 w-full font-canopee text-[168px] leading-none text-primary-green text-center font-bold"
              style={{ WebkitTextStroke: "3px #84592B" }}
            >
              PORTFOLIO
            </div>
            <div
              className="hidden lg:block absolute top-[353px] left-0 w-full font-canopee text-[168px] leading-none text-center font-bold"
              style={{ WebkitTextStroke: "3px #84592B", color: "transparent" }}
            >
              PORTFOLIO
            </div>
          </div>
        </div>

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c7334c23fd996ce2f34dab8035c7fb1fd9d36d6d?width=668"
          alt="Enzo Bagneris"
          className="hidden lg:block absolute left-[146px] top-[264px] w-[334px] h-[501px] object-cover rounded-full"
        />

        <div className="absolute bottom-8 lg:bottom-auto lg:left-[848px] lg:top-[399px] left-1/2 -translate-x-1/2 lg:translate-x-0 w-[280px] md:w-[343px] flex items-center justify-center bg-primary-green rounded-[20px] px-3 py-8 md:py-[43px]">
          <div className="text-white text-center font-palatino text-[48px] md:text-[64px] italic font-bold leading-none">
            Bienvenue
          </div>
        </div>

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/90a5978392ddcdbb47e01db452aa8c93b1306d5b?width=657"
          alt=""
          className="hidden lg:block absolute right-0 bottom-0 w-[329px] h-[323px] object-contain"
        />
      </section>

      <section className="w-full max-w-[1289px] mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[30px]">
          <div className="w-full lg:w-auto lg:max-w-[745px] flex flex-col justify-center items-start gap-6 md:gap-10">
            <div className="flex flex-col justify-center items-start w-full">
              <h1 className="font-canopee text-[64px] md:text-[96px] lg:text-[128px] leading-[0.9] text-text-color font-bold">
                Enzo
                <br />
                Bagneris
              </h1>

              <div className="relative mt-4 md:mt-6 w-full max-w-[596px]">
                <div className="bg-accent-red bg-opacity-50 rounded-[10px] px-3 md:px-4 py-2 md:py-3 mb-2 inline-block">
                  <p className="font-palatino text-[32px] md:text-[40px] lg:text-[48px] leading-tight text-text-color whitespace-nowrap">
                    Animateur nature
                  </p>
                </div>
                <div className="bg-accent-red bg-opacity-50 rounded-[10px] px-3 md:px-4 py-2 md:py-3 inline-block">
                  <p className="font-palatino text-[32px] md:text-[40px] lg:text-[48px] leading-tight text-text-color whitespace-nowrap">
                    & Initiateur montagnisme
                  </p>
                </div>
              </div>
            </div>

            <p className="text-black font-palatino text-sm md:text-base leading-normal w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ut nulla eu sapien bibendum ornare id vehicula odio.
              Vivamus quis mauris dui. Vestibulum non viverra eros, at lacinia
              nibh. Praesent sit amet nisi libero. Praesent imperdiet, risus
              dapibus facilisis posuere, lorem nunc faucibus libero, mollis
              pharetra lorem dolor eu sem. Vivamus malesuada nisi mauris, eget
              venenatis nunc pulvinar quis. Ut ullamcorper, nibh a fringilla
              viverra, risus purus finibus lectus, at dictum dolor dui non leo.
              Nam volutpat mauris velit, at faucibus justo posuere et. Nunc a
              ultricies diam.
            </p>
          </div>

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/62d7b3625f4bbe441026f106a760bc9affe06ee8?width=1028"
            alt="Nature illustration"
            className="w-full lg:w-[514px] h-auto object-contain"
          />
        </div>
      </section>

      <section className="w-full bg-background py-8 md:py-10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10">
          <h2 className="text-center font-roboto text-base md:text-lg font-bold leading-[150%] mb-8 md:mb-12">
            Ils ont voulut me faire confiance, ils n'aurait pas dû
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-[100px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/81fd29d13c60e6b6e87d62e9f1f37c84aea7f488?width=500"
              alt="Partner logo"
              className="w-[180px] md:w-[250px] h-auto object-contain"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/da514dea595291e88adc31a3e53d17d32946915b?width=500"
              alt="Partner logo"
              className="w-[180px] md:w-[250px] h-auto object-contain"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c3d8c97cdaea857a12e2822847479963fbacbeb5?width=504"
              alt="Partner logo"
              className="w-[180px] md:w-[252px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1065px] mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex flex-col items-end">
          <h2 className="font-canopee text-[64px] md:text-[96px] lg:text-[128px] leading-[0.85] text-text-color text-right font-bold">
            Activités pro'
          </h2>
          <div className="relative mt-[-30px] md:mt-[-40px] lg:mt-[-70px]">
            <div
              className="font-canopee text-[64px] md:text-[96px] lg:text-[128px] leading-none font-bold"
              style={{ WebkitTextStroke: "3px #231C0C", color: "transparent" }}
            >
              PRO'
            </div>
            <div
              className="absolute top-8 md:top-12 lg:top-16 left-0 font-canopee text-[64px] md:text-[96px] lg:text-[128px] leading-none font-bold"
              style={{ WebkitTextStroke: "3px #231C0C", color: "transparent" }}
            >
              PRO'
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1265px] mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-[200px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/59ce62f995dcc13d5a1b2ad46fe2235060e10e3c?width=1062"
            alt="Nature protection"
            className="w-full lg:w-[531px] h-auto rounded-[80px] md:rounded-[137px] object-cover"
          />

          <div className="w-full lg:w-[534px] flex flex-col items-start gap-6">
            <h2 className="font-palatino text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight text-text-color">
              Gestion et protection
              <br />
              de la nature
            </h2>

            <p className="text-black font-palatino text-sm md:text-base leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ut nulla eu sapien bibendum ornare id vehicula odio.
              Vivamus quis mauris dui. Vestibulum non viverra eros, at lacinia
              nibh. Praesent sit amet nisi libero.
            </p>

            <Link
              to="/gmnf"
              className="flex items-center justify-center px-10 py-3 rounded-[20px] bg-primary-green text-background font-palatino text-base hover:opacity-90 transition-opacity"
            >
              Bouton
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary-green py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-[200px]">
            <div className="w-full lg:w-[534px] flex flex-col items-start gap-6 md:gap-8">
              <h2 className="font-palatino text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight text-green-light">
                Animation nature
              </h2>

              <p className="text-background font-palatino text-sm md:text-base leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut nulla eu sapien bibendum ornare id vehicula odio.
                Vivamus quis mauris dui. Vestibulum non viverra eros, at lacinia
                nibh. Praesent sit amet nisi libero.
              </p>

              <Link
                to="/animation"
                className="flex items-center justify-center px-10 py-3 rounded-[20px] bg-beige-light border-[1.5px] border-text-color text-text-color font-palatino text-base hover:opacity-90 transition-opacity"
              >
                Bouton
              </Link>
            </div>

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3e7fc6fcdd029bafaaf6d6375466633fd4bd8048?width=1060"
              alt="Nature animation"
              className="w-full lg:w-[530px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1295px] mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-[200px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3714acbf353a7caa05511e603cd669399325e044?width=1122"
            alt="Randonnée"
            className="w-full lg:w-[561px] h-auto object-contain order-2 lg:order-1"
          />

          <div className="w-full lg:w-[534px] flex flex-col items-start gap-6 order-1 lg:order-2">
            <h2 className="font-palatino text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight text-text-color">
              Randonnée
            </h2>

            <p className="text-black font-palatino text-sm md:text-base leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ut nulla eu sapien bibendum ornare id vehicula odio.
              Vivamus quis mauris dui. Vestibulum non viverra eros, at lacinia
              nibh. Praesent sit amet nisi libero.
            </p>

            <Link
              to="/randonnee"
              className="flex items-center justify-center px-10 py-3 rounded-[20px] bg-text-color text-background font-palatino text-base hover:opacity-90 transition-opacity"
            >
              Bouton
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
