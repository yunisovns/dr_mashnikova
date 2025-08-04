import img1 from "@images/BeforeAfterImages/1.jpg";
import img2 from "@images/BeforeAfterImages/2.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type Slide = {
  image: string;
  caption?: string;
};

const slides: Slide[] = [
  {
    image: img1,
    caption: "результат 1",
  },
  {
    image: img2,
    caption: "результат 2",
  },
];
export const BeforeAfterCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Навигация назад
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1));
  };

  // Навигация вперед
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? slides.length - 1 : prev + 1
    );
  };
  return (
    <section id="portfolio" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">До/После</h2>
        <div className="relative flex justify-center items-center">
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 backdrop-blur-md text-gray-700 p-2 rounded-full shadow-md transition disabled:opacity-30 disabled:cursor-not-allowed pointer-events-auto z-10"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            aria-label="Предыдущий слайд"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex transition-transform duration-500 ease-in-out">
            <img
              className="rounded-lg shadow-lg md:h-[60vh] w-auto"
              src={slides[currentSlide].image}
              alt={slides[currentSlide].caption ?? `slide ${currentSlide + 1}`}
              loading="lazy"
            />
          </div>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 backdrop-blur-md text-gray-700 p-2 rounded-full shadow-md transition disabled:opacity-30 disabled:cursor-not-allowed pointer-events-auto z-10"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            aria-label="Следующий слайд"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
