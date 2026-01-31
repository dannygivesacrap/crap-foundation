import Sparkle from "./Sparkle";

interface PartnerCardProps {
  name: string;
  description: string;
  focusArea: string;
  location: string;
  website?: string;
}

export default function PartnerCard({
  name,
  description,
  focusArea,
  location,
  website,
}: PartnerCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
      <Sparkle className="absolute top-4 right-4 w-6 h-6 text-brand-blue/30" />

      <div className="mb-4">
        <span className="inline-block bg-brand-cream text-brand-green text-xs font-semibold px-3 py-1 rounded-full">
          {focusArea}
        </span>
      </div>

      <h3 className="text-xl font-bold text-brand-green mb-2">{name}</h3>
      <p className="text-gray-500 text-sm mb-4">{location}</p>
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
        >
          Visit Website
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      )}
    </div>
  );
}
