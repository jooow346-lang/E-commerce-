import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="bg-white sticky top-[100px] z-40 shadow-sm">
      <div className="max-w-7xl mx-auto p-4">

        <div className="relative">

          <input
            type="text"
            placeholder="Search Products..."
            className="w-full border border-gray-300 rounded-full px-6 py-3 outline-none"
          />

          <Search
            size={18}
            className="absolute right-5 top-1/2 -translate-y-1/2"
          />

        </div>

      </div>
    </div>
  );
}