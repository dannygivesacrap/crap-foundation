"use client";

import { useState } from "react";
import Sparkle from "@/components/Sparkle";

// Sample data - in production this would come from Google Sheets
const revenueData = [
  { date: "Jan 2024", entity: "Who Gives A Crap", amount: "$1,250,000", notes: "Q4 2023 profit share" },
  { date: "Dec 2023", entity: "Individual Donor", amount: "$5,000", notes: "Direct donation" },
  { date: "Nov 2023", entity: "Corporate Partner", amount: "$25,000", notes: "Matching gift" },
  { date: "Oct 2023", entity: "Who Gives A Crap", amount: "$1,100,000", notes: "Q3 2023 profit share" },
  { date: "Sep 2023", entity: "Foundation Grant", amount: "$50,000", notes: "Water initiative" },
  { date: "Aug 2023", entity: "Individual Donor", amount: "$2,500", notes: "Direct donation" },
  { date: "Jul 2023", entity: "Who Gives A Crap", amount: "$980,000", notes: "Q2 2023 profit share" },
  { date: "Jun 2023", entity: "Corporate Partner", amount: "$15,000", notes: "Employee giving" },
  { date: "May 2023", entity: "Individual Donor", amount: "$1,000", notes: "Direct donation" },
  { date: "Apr 2023", entity: "Who Gives A Crap", amount: "$1,050,000", notes: "Q1 2023 profit share" },
  { date: "Mar 2023", entity: "Foundation Grant", amount: "$75,000", notes: "Sanitation program" },
  { date: "Feb 2023", entity: "Individual Donor", amount: "$3,500", notes: "Direct donation" },
  { date: "Jan 2023", entity: "Who Gives A Crap", amount: "$950,000", notes: "Q4 2022 profit share" },
  { date: "Dec 2022", entity: "Corporate Partner", amount: "$20,000", notes: "Year-end gift" },
  { date: "Nov 2022", entity: "Individual Donor", amount: "$7,500", notes: "Direct donation" },
  { date: "Oct 2022", entity: "Who Gives A Crap", amount: "$875,000", notes: "Q3 2022 profit share" },
];

const donationsData = [
  { date: "Dec 2023", entity: "Water For People", amount: "$500,000", notes: "Multi-year grant Y2" },
  { date: "Dec 2023", entity: "WaterAid", amount: "$450,000", notes: "WASH in schools" },
  { date: "Dec 2023", entity: "Splash", amount: "$350,000", notes: "Ethiopia operations" },
  { date: "Nov 2023", entity: "FINISH Society", amount: "$100,000", notes: "India expansion" },
  { date: "Oct 2023", entity: "iDE", amount: "$75,000", notes: "Market development" },
  { date: "Sep 2023", entity: "Sanergy", amount: "$125,000", notes: "Kenya scale-up" },
  { date: "Jun 2023", entity: "Water For People", amount: "$500,000", notes: "Multi-year grant Y1" },
  { date: "Jun 2023", entity: "FINISH Society", amount: "$200,000", notes: "Sanitation India" },
  { date: "Jun 2023", entity: "iDE", amount: "$200,000", notes: "Market-based sanitation" },
  { date: "May 2023", entity: "WaterAid", amount: "$150,000", notes: "Emergency response" },
  { date: "Mar 2023", entity: "Splash", amount: "$175,000", notes: "School programs" },
  { date: "Dec 2022", entity: "WaterAid", amount: "$400,000", notes: "General operations" },
  { date: "Dec 2022", entity: "Sanergy", amount: "$125,000", notes: "Kenya sanitation" },
  { date: "Nov 2022", entity: "Water For People", amount: "$250,000", notes: "Initial grant" },
  { date: "Oct 2022", entity: "iDE", amount: "$100,000", notes: "Pilot program" },
  { date: "Sep 2022", entity: "FINISH Society", amount: "$75,000", notes: "Assessment" },
];

function CollapsibleTable({
  title,
  description,
  data,
  total,
  color,
}: {
  title: string;
  description: string;
  data: { date: string; entity: string; amount: string; notes: string }[];
  total: string;
  color: "green" | "blue";
}) {
  const [showAll, setShowAll] = useState(false);
  const displayData = showAll ? data : data.slice(0, 5);
  const hasMore = data.length > 5;

  const headerBg = color === "green" ? "bg-brand-green" : "bg-brand-blue";

  return (
    <div className="bg-white rounded-2xl overflow-hidden border-2 border-black/10">
      <div className={`${headerBg} px-6 py-4 flex justify-between items-center`}>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-white/70 text-sm">{description}</p>
        </div>
        <div className="text-right">
          <div className="text-white/70 text-sm">Total</div>
          <div className="text-white font-bold text-xl font-mono">{total}</div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-black/5">
              <th className="text-left px-6 py-3 font-bold text-sm text-black/60">Date</th>
              <th className="text-left px-6 py-3 font-bold text-sm text-black/60">
                {title === "Donations Made" ? "Partner" : "Source"}
              </th>
              <th className="text-right px-6 py-3 font-bold text-sm text-black/60">Amount (AUD)</th>
              <th className="text-left px-6 py-3 font-bold text-sm text-black/60">Notes</th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((row, i) => (
              <tr
                key={i}
                className="border-b border-black/5 hover:bg-brand-cream/30 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-black/50">{row.date}</td>
                <td className="px-6 py-4 text-sm font-semibold text-black">{row.entity}</td>
                <td className={`px-6 py-4 text-sm text-right font-mono font-bold ${color === "green" ? "text-brand-green" : "text-brand-blue"}`}>
                  {row.amount}
                </td>
                <td className="px-6 py-4 text-sm text-black/50">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {hasMore && (
        <div className="px-6 py-4 border-t border-black/5">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`font-bold text-sm ${color === "green" ? "text-brand-green" : "text-brand-blue"} hover:underline`}
          >
            {showAll ? `Show less ↑` : `Show all ${data.length} entries ↓`}
          </button>
        </div>
      )}
    </div>
  );
}

export default function TransparencyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-32 pb-20 md:pb-28 relative overflow-hidden">
        <Sparkle className="absolute top-20 right-10 w-40 h-40 text-brand-pink/20" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-brand-pink text-white text-sm font-bold px-4 py-2 rounded-full mb-6 rotate-neg-2">
              Full receipts
            </div>
            <h1 className="display-text text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Every dollar. <br />
              <span className="text-brand-pink">No secrets.</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              We believe in radical transparency. Here's every dollar we've received and every dollar we've given away.
            </p>
          </div>
        </div>
      </section>

      {/* Big numbers */}
      <section className="bg-brand-cream py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="big-number text-5xl md:text-6xl text-brand-green">$6.4M+</div>
              <p className="text-black/60 mt-2 font-medium">received</p>
            </div>
            <div className="text-center">
              <div className="big-number text-5xl md:text-6xl text-brand-blue">$3.8M+</div>
              <p className="text-black/60 mt-2 font-medium">donated</p>
            </div>
            <div className="text-center">
              <div className="big-number text-5xl md:text-6xl text-brand-pink">6</div>
              <p className="text-black/60 mt-2 font-medium">partners funded</p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Table */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-8">
            <span className="text-brand-green font-bold text-sm uppercase tracking-wide">Money in</span>
            <h2 className="display-text text-4xl md:text-5xl text-black mt-2">
              Revenue received
            </h2>
          </div>

          <CollapsibleTable
            title="Revenue Received"
            description="All donations and funding received by The Crap Foundation"
            data={revenueData}
            total="$6,409,000"
            color="green"
          />
        </div>
      </section>

      {/* Donations Table */}
      <section className="py-20 md:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-8">
            <span className="text-brand-pink font-bold text-sm uppercase tracking-wide">Money out</span>
            <h2 className="display-text text-4xl md:text-5xl text-black mt-2">
              Donations made
            </h2>
          </div>

          <CollapsibleTable
            title="Donations Made"
            description="All grants and donations made to our partner organisations"
            data={donationsData}
            total="$3,775,000"
            color="blue"
          />
        </div>
      </section>

      {/* Audited financials */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <Sparkle className="w-12 h-12 text-brand-orange mx-auto mb-6" />
          <h2 className="display-text text-4xl md:text-5xl text-black mb-6">
            Want the full audit?
          </h2>
          <p className="text-xl text-black/60 mb-8 leading-relaxed">
            Our books are independently audited every year. Download the complete reports here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-brand-green transition-all hover-lift"
            >
              📄 FY2023 Annual Report
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-black text-black font-bold px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all"
            >
              📄 FY2022 Annual Report
            </a>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-brand-pink py-6">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <p className="text-white text-sm">
            <strong>Note:</strong> Sample data shown. Live data will be pulled from Google Sheets.
          </p>
        </div>
      </section>
    </>
  );
}
