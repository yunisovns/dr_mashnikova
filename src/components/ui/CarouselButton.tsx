import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
  ariaLabel: string;
};

export const CarouselButton = ({
  direction,
  onClick,
  disabled = false,
  ariaLabel,
}: CarouselButtonProps) => {
  const isLeft = direction === "left";
  return (
    <button
      className={`absolute 
      ${
        isLeft ? "left-2" : "right-2"
      } top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 backdrop-blur-md text-gray-700 p-2 rounded-full shadow-md transition disabled:opacity-30 disabled:cursor-not-allowed pointer-events-auto z-10`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {isLeft ? (
        <ChevronLeft className="w-6 h-6 text-[#E6BE8A]" />
      ) : (
        <ChevronRight className="w-6 h-6 text-[#E6BE8A]" />
      )}
    </button>
  );
};
