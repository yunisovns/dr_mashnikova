type Props = {
  title: string;
  items: string[];
  className?: string;
};

export const ServiceBlock = ({ title, items, className = "" }: Props) => {
  return (
    <article
      className={`p-4 border rounded-2xl shadow-md bg-white ${className}`}
    >
      <h2 className="text-base sm:text-lg font-semibold mb-2">{title}</h2>
      <ul className="list-disc list-inside space-y-1">
        {items.map((item, index) => (
          <li
            key={index}
            role="listitem"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};
