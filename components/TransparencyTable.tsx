interface TableRow {
  date: string;
  entity: string;
  amount: string;
  notes?: string;
}

interface TransparencyTableProps {
  title: string;
  description: string;
  data: TableRow[];
  total: string;
  color: "green" | "blue";
}

export default function TransparencyTable({
  title,
  description,
  data,
  total,
  color,
}: TransparencyTableProps) {
  const headerColors = {
    green: "bg-brand-green",
    blue: "bg-brand-blue",
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className={`${headerColors[color]} px-6 py-4`}>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-white/80 text-sm mt-1">{description}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                Date
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                {title === "Donations Made" ? "Partner" : "Source"}
              </th>
              <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">
                Amount (AUD)
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-gray-500">{row.date}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {row.entity}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 text-right font-mono">
                  {row.amount}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {row.notes || "—"}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50">
              <td
                colSpan={2}
                className="px-6 py-4 text-sm font-bold text-gray-900"
              >
                Total
              </td>
              <td className="px-6 py-4 text-sm font-bold text-gray-900 text-right font-mono">
                {total}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
