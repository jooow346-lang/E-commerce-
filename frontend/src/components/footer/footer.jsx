
const Footer = () => {
    
  return (
<footer className="bg-green-950 text-white mt-20">

<div
className="
max-w-7xl
mx-auto
grid
md:grid-cols-4
gap-10
px-6
py-14
"
>

<div>
<h3 className="font-bold text-xl mb-4">
Oil Store
</h3>

<p className="text-sm text-gray-300">
Premium natural oils delivered to your door.
</p>
</div>

<div>
<h4 className="font-semibold mb-3">
Shop
</h4>

<p>Products</p>
<p>Offers</p>
<p>Best Sellers</p>
</div>

<div>
<h4 className="font-semibold mb-3">
Support
</h4>

<p>Contact</p>
<p>FAQ</p>
<p>Shipping</p>
</div>

<div>
<h4 className="font-semibold mb-3">
Newsletter
</h4>

<input
placeholder="Email"
className="
w-full
p-3
rounded
text-black
"
/>
</div>

</div>

<div className="border-t border-green-800 py-4 text-center">
© 2026 Oil Store
</div>

</footer>
)}

export default Footer