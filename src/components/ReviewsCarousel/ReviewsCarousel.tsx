import { CarouselButton } from "@components/ui/CarouselButton";
import { reviews } from "@data/reviewsData.tsx";
import { useState } from "react";

export const ReviewsCarousel = () => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex(Math.max(index - 1, 0));
  const next = () => setIndex(Math.min(index + 1, reviews.length - 1));
  return (
    <section
      id="reviews"
      className="py-12 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Отзывы</h2>
        <div className="relative flex items-center justify-center overflow-hidden w-full sm:max-w-md mx-auto">
          <CarouselButton
            direction="left"
            onClick={prev}
            ariaLabel="Предыдущий отзыв"
          />
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

          <CarouselButton
            direction="right"
            onClick={next}
            ariaLabel="Следующий отзыв"
          />
        </div>
      </div>
    </section>
  );
};
