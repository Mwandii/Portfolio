function StatCard({ value, label }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col gap-1">
      <span className="text-2xl font-semibold tracking-tight text-indigo-500">
        {value}
      </span>
      <span className="text-xs text-gray-400 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export default StatCard;