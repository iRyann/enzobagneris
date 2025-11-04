import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative w-full h-[806px] bg-primary-green overflow-hidden">
        <div className="absolute left-[18px] top-[535px] w-[139px] h-[99px] flex items-end justify-between">
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

        <div className="absolute left-0 top-[605px] w-full h-[201px] bg-text-color"></div>

        <div className="absolute left-[364px] top-[315px] w-[711px] h-[168px] text-center font-canopee text-[168px] leading-none text-primary-green" style={{ WebkitTextStroke: '3px #84592B' }}>
          PORTFOLIO
        </div>
        <div className="absolute left-[364px] top-[432px] w-[711px] h-[168px] text-center font-canopee text-[168px] leading-none text-primary-green" style={{ WebkitTextStroke: '3px #84592B' }}>
          PORTFOLIO
        </div>
        <div className="absolute left-[364px] top-[550px] w-[711px] h-[168px] text-center font-canopee text-[168px] leading-none" style={{ WebkitTextStroke: '3px #84592B' }}>
          PORTFOLIO
        </div>

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c7334c23fd996ce2f34dab8035c7fb1fd9d36d6d?width=668"
          alt="Enzo Bagneris"
          className="absolute left-[146px] top-[264px] w-[334px] h-[501px] object-cover rounded-full"
        />

        <div className="absolute left-[364px] top-[197px] w-[711px] h-[168px] text-center font-canopee text-[168px] leading-none text-background">
          PORTFOLIO
        </div>

        <div className="absolute left-[848px] top-[399px] w-[343px] h-[168px] flex items-center justify-center bg-primary-green rounded-[20px] px-3 py-[43px]">
          <div className="text-white text-center font-palatino text-[64px] italic font-bold leading-none">
            Bienvenue
          </div>
        </div>

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/90a5978392ddcdbb47e01db452aa8c93b1306d5b?width=657"
          alt=""
          className="absolute left-[1119px] top-[483px] w-[329px] h-[323px] object-contain"
        />
      </section>

      <section className="w-full max-w-[1289px] mx-auto px-8 py-20 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[30px]">
        <div className="w-full lg:w-[745px] flex flex-col justify-center items-start gap-10">
          <div className="flex flex-col justify-center items-start">
            <h1 className="font-canopee text-[96px] lg:text-[128px] leading-none text-text-color">
              Enzo<br />Bagneris
            </h1>
            
            <div className="relative mt-2">
              <div className="bg-accent-red bg-opacity-50 rounded-[10px] px-4 py-3 mb-2">
                <p className="font-palatino text-4xl lg:text-[48px] leading-tight text-text-color">
                  Animateur nature
                </p>
              </div>
              <div className="bg-accent-red bg-opacity-50 rounded-[10px] px-4 py-3">
                <p className="font-palatino text-4xl lg:text-[48px] leading-tight text-text-color">
                  & Initiateur montagnisme
                </p>
              </div>
            </div>
          </div>

          <p className="text-black font-palatino text-base leading-normal max-w-[745px]" style={{ WebkitTextStroke: '1px #000' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut nulla eu sapien bibendum ornare id vehicula odio. Vivamus quis mauris dui. Vestibulum non viverra eros, at lacinia nibh. Praesent sit amet nisi libero. Praesent imperdiet, risus dapibus facilisis posuere, lorem nunc faucibus libero, mollis pharetra lorem dolor eu sem. Vivamus malesuada nisi mauris, eget venenatis nunc pulvinar quis. Ut ullamcorper, nibh a fringilla viverra, risus purus finibus lectus, at dictum dolor dui non leo. Nam volutpat mauris velit, at faucibus justo posuere et. Nunc a ultricies diam.
          </p>
        </div>

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/62d7b3625f4bbe441026f106a760bc9affe06ee8?width=1028"
          alt="Nature illustration"
          className="w-full lg:w-[514px] h-auto object-contain"
        />
      </section>

      <section className="w-full bg-background py-10">
        <div className="max-w-[1440px] mx-auto px-10">
          <h2 className="text-center font-roboto text-lg font-bold leading-[150%] mb-12">
            Ils ont voulut me faire confiance, ils n'aurait pas dû
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-[100px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/81fd29d13c60e6b6e87d62e9f1f37c84aea7f488?width=500"
              alt="Partner logo"
              className="w-[250px] h-auto object-contain"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/da514dea595291e88adc31a3e53d17d32946915b?width=500"
              alt="Partner logo"
              className="w-[250px] h-auto object-contain"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c3d8c97cdaea857a12e2822847479963fbacbeb5?width=504"
              alt="Partner logo"
              className="w-[252px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1065px] mx-auto px-8 py-16">
        <div className="flex flex-col items-end gap-0">
          <h2 className="font-canopee text-[96px] lg:text-[128px] leading-none text-text-color text-right">
            Activités pro'
          </h2>
          <div className="relative">
            <div className="font-canopee text-[96px] lg:text-[128px] leading-none" style={{ WebkitTextStroke: '3px #231C0C', color: 'transparent' }}>
              PRO'
            </div>
            <div className="absolute top-16 left-0 font-canopee text-[96px] lg:text-[128px] leading-none" style={{ WebkitTextStroke: '3px #231C0C', color: 'transparent' }}>
              PRO'
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1265px] mx-auto px-8 py-16 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-[200px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/59ce62f995dcc13d5a1b2ad46fe2235060e10e3c?width=1062"
          alt="Nature protection"
          className="w-full lg:w-[531px] h-auto rounded-[137px] object-cover"
        />
        
        <div className="w-full lg:w-[534px] flex flex-col items-start">
          <h2 className="font-palatino text-4xl lg:text-[48px] font-bold leading-tight text-text-color mb-6">
            Gestion et protection<br />de la nature
          </h2>
          
          <p className="text-black font-palatino text-base leading-normal mb-8 max-w-[461px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut nulla eu sapien bibendum ornare id vehicula odio. Vivamus quis mauris dui. Vestibulum non viverra eros, at lacinia nibh. Praesent sit amet nisi libero.
          </p>
          
          <Link 
            to="/gmnf"
            className="flex items-center justify-center px-10 py-3 rounded-[20px] bg-primary-green text-background font-palatino text-base hover:opacity-90 transition-opacity"
          >
            Bouton
          </Link>
        </div>
      </section>

      <section className="w-full bg-primary-green py-20">
        <div className="max-w-[1440px] mx-auto px-8 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-[200px]">
          <div className="w-full lg:w-[534px] flex flex-col items-start gap-8">
            <h2 className="font-palatino text-4xl lg:text-[48px] font-bold leading-tight text-green-light">
              Animation nature
            </h2>
            
            <p className="text-background font-palatino text-base leading-normal max-w-[461px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut nulla eu sapien bibendum ornare id vehicula odio. Vivamus quis mauris dui. Vestibulum non viverra eros, at lacinia nibh. Praesent sit amet nisi libero.
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
      </section>

      <section className="w-full max-w-[1295px] mx-auto px-8 py-16 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-[200px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/3714acbf353a7caa05511e603cd669399325e044?width=1122"
          alt="Randonnée"
          className="w-full lg:w-[561px] h-auto object-contain"
        />
        
        <div className="w-full lg:w-[534px] flex flex-col items-start">
          <h2 className="font-palatino text-4xl lg:text-[48px] font-bold leading-tight text-text-color mb-6">
            Randonnée
          </h2>
          
          <p className="text-black font-palatino text-base leading-normal mb-8 max-w-[461px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut nulla eu sapien bibendum ornare id vehicula odio. Vivamus quis mauris dui. Vestibulum non viverra eros, at lacinia nibh. Praesent sit amet nisi libero.
          </p>
          
          <Link 
            to="/randonnee"
            className="flex items-center justify-center px-10 py-3 rounded-[20px] bg-text-color text-background font-palatino text-base hover:opacity-90 transition-opacity"
          >
            Bouton
          </Link>
        </div>
      </section>
    </div>
  );
}
