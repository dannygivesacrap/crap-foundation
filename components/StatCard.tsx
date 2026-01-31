import Sparkle from "./Sparkle";

interface StatCardProps {
  number: string;
  label: string;
  color?: "green" | "blue" | "pink" | "orange";
}

export default function StatCard({ number, label, color = "green" }: StatCardProps) {
  const colorClasses = {
    green: "text-brand-green",
    blue: "text-brand-blue",
    pink: "text-brand-pink",
    orange: "text-brand-orange",
  };

  const sparkleColors = {
    green: "#1B7340",
    blue: "#5CB8E4",
    pink: "#E966A0",
    orange: "#F5A962",
  };

  return (
    <div className="text-center relative">
      <Sparkle
        className="absolute -top-2 -right-2 w-6 h-6 opacity-60"
        color={sparkleColors[color]}
      />
      <div className={`text-5xl md:text-6xl font-bold ${colorClasses[color]} mb-2`}>
        {number}
      </div>
      <div className="text-gray-600 text-lg">{label}</div>
    </div>
  );
}
