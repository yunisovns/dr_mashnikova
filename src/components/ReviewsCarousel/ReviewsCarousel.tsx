import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type Review = {
  name: string;
  text: string;
};

const reviews: Review[] = [
  { name: "Анна", text: "Очень понравилось! Кожа преобразилась." },
  { name: "Мария", text: "Доктор Машникова — волшебница!" },
];

export const ReviewsCarousel = () => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex(Math.max(index - 1, 0));
  const next = () => setIndex(Math.min(index + 1, reviews.length - 1));
  return (
    <section id="reviews" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Отзывы</h2>
        <div className="relative flex items-center justify-center overflow-hidden w-full sm:max-w-md mx-auto">
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 backdrop-blur-md text-gray-700 p-2 rounded-full shadow-md transition disabled:opacity-30 disabled:cursor-not-allowed pointer-events-auto z-10"
            onClick={prev}
            disabled={index === 0}
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 px-8 sm:px-12"
              >
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <p className="italic text-sm mb-2">"{review.text}"</p>
                  <p className="text-right text-sm font-semibold">
                    — {review.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 backdrop-blur-md text-gray-700 p-2 rounded-full shadow-md transition disabled:opacity-30 disabled:cursor-not-allowed pointer-events-auto z-10"
            onClick={next}
            disabled={index === reviews.length - 1}
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
