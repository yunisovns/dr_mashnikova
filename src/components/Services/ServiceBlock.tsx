type Props = {
  title: string;
  items: string[];
};

export const ServiceBlock = ({ title, items }: Props) => {
  return (
    <article className="p-4 border rounded-2xl shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <ul className="list-disc list-inside space-y-1">
        {items.map((item, index) => (
          <li key={item + index}>{item}</li>
        ))}
      </ul>
    </article>
  );
};
