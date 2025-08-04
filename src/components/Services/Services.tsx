import { ServiceBlock } from "./ServiceBlock";

export const Services = () => {
  return (
    <section
      id="services"
      className="max-w-screen-xl my-10 mx-auto px-5"
    >
      <h3 className="text-2xl font-bold text-gray-800 text-center">Услуги</h3>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-5">
        <ServiceBlock
          title="Аппаратная косметология"
          items={[
            "Лазерное омоложение",
            "RF-лифтинг",
            "Ультразвуковая чистка лица",
            "Микротоковая терапия",
          ]}
        />
        <ServiceBlock
          title="Инъекционная косметология"
          items={[
            "Ботокс и Диспорт",
            "Контурная пластика",
            "Мезотерапия",
            "Биоревитализация",
          ]}
        />
      </div>
    </section>
  );
};
