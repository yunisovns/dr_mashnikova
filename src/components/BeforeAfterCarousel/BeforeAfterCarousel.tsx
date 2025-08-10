import { CarouselButton } from "@components/ui/CarouselButton";
import { slides } from "@data/slidesData";
import { useState } from "react";


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
    <section
      id="portfolio"
      className="py-12 bg-white scroll-m-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">До/После</h2>
        <div className="relative overflow-hidden w-full max-w-3xl mx-auto">
          <CarouselButton
            direction="left"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            ariaLabel="Предыдущий слайд"
          />
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 box-border px-4 flex justify-center items-center"
              >
                <img
                  className="rounded-lg shadow-lg max-h-[60vh] w-auto"
                  src={slide.image}
                  alt={slide.caption ?? `Слайд ${i + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <CarouselButton
            direction="right"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            ariaLabel="Следующий слайд"
          />
        </div>
      </div>
    </section>
  );
};
