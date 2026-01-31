import Sparkle from "./Sparkle";

interface FocusAreaCardProps {
  title: string;
  description: string;
  priorities: string[];
  color: "blue" | "orange";
}

export default function FocusAreaCard({
  title,
  description,
  priorities,
  color,
}: FocusAreaCardProps) {
  const bgColors = {
    blue: "bg-brand-blue",
    orange: "bg-brand-orange",
  };

  return (
    <div className={`${bgColors[color]} rounded-3xl p-8 md:p-10 text-white relative overflow-hidden`}>
      {/* Decorative sparkle */}
      <Sparkle className="absolute top-4 right-4 w-16 h-16 text-white/20" />

      <span className="text-sm font-semibold uppercase tracking-wider text-white/80">
        Focus Area
      </span>
      <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{title}</h3>
      <p className="text-white/90 text-lg mb-6 leading-relaxed">{description}</p>

      <div>
        <span className="text-sm font-semibold uppercase tracking-wider text-white/80">
          Priorities
        </span>
        <ul className="mt-3 space-y-2">
          {priorities.map((priority, index) => (
            <li key={index} className="flex items-center gap-3">
              <Sparkle className="w-4 h-4 text-white flex-shrink-0" />
              <span className="text-white/95">{priority}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
