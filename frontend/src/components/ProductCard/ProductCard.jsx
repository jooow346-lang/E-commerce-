import { Star } from "lucide-react";

export default function ProductCard({ product }) {

 const oldPrice =
 product.price +
 product.price *
 (product.discountPercentage / 100);

 return (

<div
className="
bg-white
rounded-xl
overflow-hidden
shadow-sm
hover:shadow-lg
transition
"
>

<div className="relative">

<img
src={product.thumbnail}
alt={product.title}
className="
w-full
h-56
object-cover
"
/>

<div
className="
absolute
top-3
left-3
bg-green-700
text-white
text-xs
px-2
py-1
rounded-full
"
>
{Math.round(product.discountPercentage)}% OFF
</div>

</div>

<div className="p-4">

<p className="text-xs text-gray-500">
{product.category}
</p>

<h3
className="
font-semibold
line-clamp-1
"
>
{product.title}
</h3>

<p
className="
text-sm
text-gray-500
line-clamp-1
"
>
{product.description}
</p>

<div className="flex items-center gap-2 mt-2">
<Star
size={14}
fill="gold"
stroke="gold"
/>

<span>{product.rating}</span>
</div>

<div className="mt-2 flex gap-2">

<span className="font-bold text-green-700">
${product.price}
</span>

<span className="line-through text-gray-400">
${oldPrice.toFixed(2)}
</span>

</div>

</div>

</div>

 )
}