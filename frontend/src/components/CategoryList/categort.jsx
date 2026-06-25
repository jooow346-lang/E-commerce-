import { Star } from "lucide-react";

export default function Categories({
  categories,

  setSelectedCategory,
}) {
  return (
    <aside
      className="
      sticky
      top-[180px]
      h-fit
      bg-white
      p-5
      rounded-xl
      shadow-sm
      "
    >
      <h2 className="font-bold mb-4">
        Filter Options
      </h2>

      <h3 className="font-semibold mb-3">
        Categories
      </h3>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className="
          block
          mb-2
          text-gray-600
          hover:text-green-700
          "
        >
          {cat}
        </button>
      ))}

      <hr className="my-5 border-gray-500"/>

      <h3 className="font-semibold mb-3">
        Rating
      </h3>

      {[5,4,3,2].map(item=>(
        <div key={item} className="flex gap-1 mb-2">
          {[...Array(item)].map((_,i)=>(
            <Star
             key={i}
             size={14}
             fill="gold"
             stroke="gold"
            />
          ))}
        </div>
      ))}

      <hr className="my-5 border-gray-500"/>

      <h3 className="font-semibold mb-3">
        Price
      </h3>

      <input
        type="range"
        min="0"
        max="500"
        className="w-full accent-green-700"
      />

    </aside>
  );
}