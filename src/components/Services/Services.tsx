import { servicesData } from "@data/servicesData";
import { ServiceBlock } from "./ServiceBlock";

export const Services = () => {
  return (
    <section
      id="services"
      className="max-w-screen-xl my-10 mx-auto px-5 scroll-m-16"
    >
      <h3 className="text-2xl font-bold text-gray-800 text-center">Услуги</h3>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-5">
        {servicesData.map((service, index) => (
          <ServiceBlock
            key={index}
            title={service.title}
            items={service.items}
          />
        ))}
      </div>
    </section>
  );
};
