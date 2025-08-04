import AboutMePhoto from "@images/AboutMePhoto.jpg";

export const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      className="flex flex-col md:flex-row justify-between items-center m-4 p-4 gap-4 box-border rounded-lg shadow-md scroll-m-16"
    >
      <div className="flex-row text-2xl leading-normal gap-4 w-full space-y-8">
        <h2 className="text-[#E6BE8A] text-4xl  md:text-6xl  ">
          ПРИВЕТСТВУЮ ВАС!
        </h2>
        <p className="text-xl md:text-2xl">
          Доктор Машникова Татьяна Викторовна Врач-косметолог с 15-летним опытом{" "}
          <br />
          Я практикующий врач-косметолог, специализируюсь на безоперационном
          омоложении с помощью современных аппаратных и инъекционных методик:
          BBL HERO, Ultraformer MPT, Morpheus8, ботулинотерапия и контурная
          пластика. Работаю по принципу: только безопасные, сертифицированные
          технологии и индивидуальный подход к каждой пациентке.
          <br />
          Считаю, что красота начинается с уважения к себе. На приёме я всегда
          объясняю, что и зачем делаю, подбираю максимально комфортные и
          эффективные процедуры под запрос и возраст пациента. <br />
          Использую только зарегистрированные препараты и аппараты последнего
          поколения: BBL HERO, Ultraformer MPT, Morpheus8. Каждая методика — с
          доказанной эффективностью и минимальной реабилитацией. <br />
          Если вы хотите мягко и естественно обновить свою внешность — я буду
          рада помочь. [Записаться на консультацию]
        </p>
      </div>

      <img
        src={AboutMePhoto}
        alt="Косметолог за работой"
        className="md:h-[60vh] w-auto max-w-full rounded-lg shadow-md transition-all duration-500 ease-in-out hover:scale-105"
      />
    </section>
  );
};
