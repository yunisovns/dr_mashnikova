import {
  InstagramIcon,
  MapIcon,
  MessageSquareIcon,
  Phone,
  Send,
} from "lucide-react";

export const Contacts = () => {
  return (
    <section
      id="contacts"
      className="bg-white py-12 px-6 md:px-10 text-gray-800 scroll-m-16"
    >
      <div className="max-w-xl mx-auto rounded-2xl border border-gray-200 shadow-md p-8 space-y-6">
        <h3 className="text-3xl font-bold text-center text-gray-600 ">
          Свяжитесь со мной
        </h3>
        <p className="text-center text-gray-600 text-sm">
          Запишитесь на консультацию или задайте вопрос любым удобным способом
        </p>
        <div className="space-y-4 text-base">
          <ContactLine
            icon={<Phone className="w-5 h-5 text-[#E6BE8A]" />}
            label="Телефон:"
            href="tel:+79035197122"
            text="+79035197122"
          />
          <ContactLine
            icon={<InstagramIcon className="w-5 h-5 text-[#E6BE8A]" />}
            label="Instagram:"
            href="https://www.instagram.com/dr.mashnikova1/"
            text="@dr.mashnikova1"
          />
          <ContactLine
            icon={<Send className="w-5 h-5 text-[#E6BE8A]" />}
            label="Telegram:"
            href="https://t.me/DrMashnikova"
            text="@DrMashnikova"
          />
          <ContactLine
            icon={<MessageSquareIcon className="w-5 h-5 text-[#E6BE8A]" />}
            label="WhatsApp:"
            href="https://wa.me/79035197122"
            text="+7 903 519 7122"
          />
          <ContactLine
            icon={<MapIcon className="w-5 h-5 text-[#E6BE8A]" />}
            label="Адрес:"
            href="https://yandex.ru/maps/-/CHX3eUJ5"
            text="Раушская набережная, 4/5c1, Москва"
          />
        </div>
      </div>
    </section>
  );
};

type ContactLineProps = {
  icon: React.ReactNode;
  label: string;
  text: string;
  href?: string;
};

const ContactLine = ({ icon, label, text, href }: ContactLineProps) => (
  <div className="flex items-start gap-3">
    {icon}
    <div>
      <p className="font-medium text-gray-700">
        {label}
        {""}
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E6BE8A] hover:underline ml-1"
          >
            {text}
          </a>
        ) : (
          <span>{text}</span>
        )}
      </p>
    </div>
  </div>
);
