type ConsultationButtonProps = {
    text: string;
}

export const ConsultationButton = ({text} : ConsultationButtonProps) => {
  return (
    <a
  href="#contacts"
  className="inline-block max-w-full text-center px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold bg-[#E6BE8A] text-white border-2 border-[#E6BE8A] hover:bg-white hover:text-[#E6BE8A] transition-colors duration-300 shadow-md"
>
  {text}
</a>
  );
};
