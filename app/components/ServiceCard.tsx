type Props = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className="bg-[#e0d7c6] border border-[#cbbfa8] p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
      <h3 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-800">{description}</p>
    </div>
  );
}
