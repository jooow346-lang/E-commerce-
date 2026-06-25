import { useEffect, useState } from "react";

import Header from "./../../components/header/header.jsx";
import SearchBar from "./../../components/SearchBar/searchBar.jsx";
import Categories from "./../../components/CategoryList/categort.jsx";
import ProductsGrid from './../../components/ProductsGrid/ProductsGrid.jsx';
import Footer from "./../../components/footer/footer.jsx";

export default function Shop() {

const [products,setProducts]=useState([]);
const [categories,setCategories]=useState([]);
const [selectedCategory,setSelectedCategory]=useState("");

useEffect(()=>{

fetch("https://dummyjson.com/products")
.then(res=>res.json())
.then(data=>{

setProducts(data.products);

const uniqueCategories=[
...new Set(
data.products.map(item=>item.category)
)
];

setCategories(uniqueCategories);

});

},[]);

const filteredProducts=
selectedCategory
? products.filter(
item=>item.category===selectedCategory
)
:products;

return (

<>
<Header/>

<SearchBar/>

<div
className="
max-w-7xl
mx-auto
px-4
py-10
grid
grid-cols-12
gap-8
"
>

<div className="col-span-3">
<Categories
categories={categories}
selectedCategory={selectedCategory}
setSelectedCategory={setSelectedCategory}
/>
</div>

<div className="col-span-9">
<ProductsGrid
products={filteredProducts}
/>
</div>

</div>

<Footer/>

</>

)
}