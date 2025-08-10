import { ConsultationButton } from "@components/ui/ConsultationButton";
import AboutMePhoto from "@images/AboutMePhoto.jpg";

export const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      className="flex flex-col md:flex-row justify-between items-center m-4 p-4 gap-4 box-border rounded-lg shadow-md scroll-m-16"
    >
      <div className="flex flex-col text-2xl leading-normal gap-4 w-full items-center">
  <h2 className="text-[#E6BE8A] text-4xl md:text-6xl text-center">
    ПРИВЕТСТВУЮ ВАС!
  </h2>
  <p className="font-serif text-base md:text-2xl max-w-xl">
    Доктор Машникова Татьяна Викторовна Врач-косметолог c 10-летним опытом
    <br />
    Я практикующий врач-косметолог, специализируюсь на безоперационном
    омоложении c помощью современных аппаратных и инъекционных методик:
    BBL HERO, Ultraformer MPT, Morpheus8, ботулинотерапия и контурная
    пластика. Работаю по принципу: только безопасные, сертифицированные
    технологии и индивидуальный подход к каждой пациентке.
  </p>
  <ConsultationButton text="Записаться на приём" />
</div>

      
      <img
        src={AboutMePhoto}
        alt="Косметолог за работой"
        className="md:h-[60vh] w-auto max-w-full rounded-lg shadow-md transition-all duration-500 ease-in-out hover:scale-105"
      />
    </section>
  );
};
