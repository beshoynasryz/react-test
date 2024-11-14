import React, { useState } from 'react';
import About from '../About/About';

export default function Home() {
   const [product,  setProduct] = useState([
        { name: "bne", id: 1 ,onSale:true, age: 24 },
        { name: "kesho", id: 2 ,onSale:false, age: 24 },
        { name: "besho", id: 3 ,onSale:true, age: 21 },
        { name: "feshp", id: 4 ,onSale:true, age: 25 },
        { name: "bne", id: 5 ,onSale:true, age: 27 },
        { name: "bne", id: 6 ,onSale:false, age: 20 },
   ]);

    function deleteProduct(id) {
        setProduct((prevProducts) => prevProducts.filter((product) => product.id !== id));
        console.log(`Deleted product with ID: ${id}`);
    }

   return (
       <div className="p-4">
           <h2 className="text-2xl font-bold text-center mb-6">Home Component</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
               {product.map((productItem) => (
                   <About deleteP={deleteProduct} key={productItem.id} productData={productItem} />
               ))}
           </div>
       </div>
   );
}
