// ProductCart.jsx
import React, { useContext, useState } from "react";
import img1 from '../images/image-product-1.jpg';
import img2 from '../images/image-product-1-thumbnail.jpg';
import img3 from '../images/image-product-2-thumbnail.jpg';
import img4 from '../images/image-product-3-thumbnail.jpg';
import img5 from '../images/image-product-4-thumbnail.jpg';
import { MyContext } from "../MyContext";

function ProductCart() {
  const { setCartAmount } = useContext(MyContext);
  const [count, setCount] = useState(0);

  function handleAmount() {
    setCartAmount(count * 125);
    setCount(0);
  }

  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="w-full md:w-1/2">
        <div className="mb-4">
          <img src={img1} alt="Main product" className="w-full rounded-lg object-cover" />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <img src={img2} alt="Thumbnail 1" className="w-full cursor-pointer rounded-lg hover:opacity-75 object-cover" />
          <img src={img3} alt="Thumbnail 2" className="w-full cursor-pointer rounded-lg hover:opacity-75 object-cover" />
          <img src={img4} alt="Thumbnail 3" className="w-full cursor-pointer rounded-lg hover:opacity-75 object-cover" />
          <img src={img5} alt="Thumbnail 4" className="w-full cursor-pointer rounded-lg hover:opacity-75 object-cover" />
        </div>
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
        <p className="text-orange-500 font-semibold uppercase">Sneaker Company</p>
        <h3 className="text-2xl font-bold my-2">Fall Limited Edition Sneakers</h3>
        <p className="text-gray-600 mb-4">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-2">
          <p className="text-xl font-bold">$125.00</p>
          <span className="text-red-500 text-sm bg-red-100 px-2 py-1 rounded-lg">50% Off</span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 my-4">
          <div className="flex items-center border border-gray-300 rounded-lg p-2 w-full sm:w-auto justify-between">
            <button className="px-3 text-xl" onClick={(e)=> setCount(count -1)}>-</button>
            <p className="px-4">{count}</p>
            <button className="px-3 text-xl" onClick={(e)=> setCount(count + 1)}>+</button>
          </div>
          <button onClick={handleAmount} className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 w-full sm:w-auto">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
