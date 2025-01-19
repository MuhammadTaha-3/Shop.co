// import Image from "next/image";
// import Link from "next/link";
// import { FaStar } from "react-icons/fa";

// interface Iproducts {
//   title: string;
//   price: string;
//   id: number;
//   rating?: string;
//   old_price?: string;
//   img_url: string;
//   discount?: string;
// }

// const products: Iproducts[] = [
//   {
//     title: "T-shirt with Tape Details",
//     id: 1,
//     price: "$120",
//     img_url: "/shirt1.png",
//     rating: "4.5/5",
//   },
//   {
//     title: "Skinny Fit Jeans",
//     id: 1,
//     price: "$240",
//     img_url: "/pant.png",
//     old_price: "$260",
//     rating: "3.5/5",
//     discount: "-20%",
//   },
//   {
//     title: "Checkered Shirt",
//     id: 1,
//     price: "$180",
//     img_url: "/shirt2.png",
//     rating: "4.5/5",
//   },
//   {
//     title: "Sleeve Striped T-shirt",
//     id: 1,
//     price: "$130",
//     img_url: "/shirt3.png",
//     old_price: "$160",
//     rating: "4.5/5",
//     discount: "-20%",
//   },
// ];

// export default function Products() {
//   return (
//     <div className="w-full h-full sm:h-[500px] mt-10  max-w-screen-2xl mx-auto ">
//       <h1 className="text-3xl md:text-4xl font-extrabold text-center">
//         NEW ARRIVALS
//       </h1>
//       <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
//         {products.map((data) => {
//           const ratingValue = parseFloat(data.rating || "0");
//           return (
//             <div key={data.id} className="mb-6 md:mb-0">
//               <Link href={`/products/${data.id}`}>
//                 <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px]">
//                   <Image
//                     src={data.img_url}
//                     alt={data.title}
//                     className="w-full h-full rounded-[20px]"
//                     width={200}
//                     height={200}
//                   />
//                 </div>
//               </Link>
//               <div>
//                 <p className="text-lg mt-2 font-bold">{data.title}</p>
//                 <p className="flex text-yellow-400">
//                   {Array.from({ length: 5 }, (_, index) => (
//                     <FaStar
//                       key={index}
//                       className={index < Math.round(ratingValue) ? "text-yellow-400" : "text-gray-300"}
//                     />
//                   ))}
//                   <span className="text-gray-700 ml-1 text-sm">{data.rating}</span>
//                 </p>
//                 <p className="font-bold mt-1">
//                   {data.price}{" "}
//                   <span className="text-gray-400 font-bold line-through">
//                     {data.old_price}
//                   </span>
//                   <span className="text-red-600 font-normal text-xs ml-4 bg-red-100 rounded-xl">
//                     {data.discount}
//                   </span>
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <button className="mt-7 w-[240px] h-10 border-2 rounded-2xl ml-20 md:ml-[600px] hover:bg-slate-300">
//         View All
//       </button>

//     </div>
    
//   );
// }
//    <h1 className="relative font-bold text-4xl text-center top-36 font-sans">NEW ARRIVALS</h1>


"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProductCardGrid = () => {
  const [cart, setCart] = useState<
    { product: { id: number; name: string; price: number; discountPrice: number; category: string; rating: number }; quantity: number; confirmed: boolean }[]
  >([]);
  const [loadingProduct, setLoadingProduct] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Full-sleeve shirt",
      price: 140,
      discountPrice: 200,
      category: "Clothing",
      image: "/shirt2.png",
      rating: 4,
    },
    {
      id: 2,
      name: "skinny fit ",
      price: 200,
      discountPrice: 200,
      category: "Jeans",
      image: "/pant.png",
      rating: 5,
    },
    {
      id: 3,
      name: "Black T-shirt",
      price: 80,
      discountPrice: 150,
      category: "shirt",
      image: "/shirt1.png",
      rating: 4,
    },
    {
      id: 4,
      name: "Blue polo",
      price: 450,
      discountPrice: 530,
      category: "T-shirt",
      image: "/shirt6.png",
      rating: 5,
    },
    {
      id: 5,
      name: "Casual Shirt",
      price: 499,
      discountPrice: 0,
      category: "T-shirt",
      image: "/shirt3.png",
      rating: 4,
    },
    {
      id: 1,
      name: "Nardo-green shirt",
      price: 350,
      discountPrice: 500,
      category: "full-sleeve shirt",
      image: "/shirt4.png",
      rating: 4,
    },
    {
      id: 2,
      name: "short",
      price: 50,
      discountPrice: 120,
      category: "jeans",
      image: "/pant2.png",
      rating: 5,
    },
    {
      id: 3,
      name: "Faded-jeans",
      price: 2999,
      discountPrice: 3000,
      category: "Black-Jeans",
      image: "/pant3.png",
      rating: 4,
    },
    {
      id: 4,
      name: "Printed T-shirt",
      price: 450,
      discountPrice: 530,
      category: "shirt",
      image: "/shirt5.png",
      rating: 5,
    },
    {
      id: 5,
      name: "T-shirt",
      price: 499,
      discountPrice: 0,
      category: "shirt",
      image: "/shirt8.png",
      rating: 4,
    },
  ];

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const handleAddToCart = async (product: {
    id: number;
    name: string;
    price: number;
    discountPrice: number;
    category: string;
    rating: number;
  }) => {
    setLoadingProduct(product.name);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const existingProduct = cart.find((item) => item.product.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity: 1, confirmed: false }]);
    }

    setLoadingProduct(null);
  };

  const handleIncreaseQuantity = (productId: number) => {
    setCart(
      cart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecreaseQuantity = (productId: number) => {
    setCart(
      cart
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleConfirmOrder = () => {
    setCart(cart.map((item) => ({ ...item, confirmed: true })));
    alert("Your order is confirmed.");
  };

  const calculateDiscountedPrice = (price: number, discountPrice: number) =>
    discountPrice > 0 ? discountPrice - price : 0;

  return (
    <>
    <div id="page"  >

    <h1 className="relative font-bold text-4xl text-center top-36 font-sans">NEW ARRIVALS</h1>
    
      <div className="top-32 relative text-center p-10">
        <h2 className="text-xl font-bold text-slate-700 z-10 relative">Hurry Up! Order Now</h2>

        {/* Cart Button */}
        <button
          onClick={toggleCart}
          className="relative top-[10px] px-10 bg-black text-white p-2 rounded-xl shadow-lg z-50 hover:bg-black"
          >
          Your Cart 🛒 ({cart.length})
        </button>

        {/* Cart Modal */}
        {isCartOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-1/2 max-w-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-700">Your Cart 🛒</h3>
              {cart.length === 0 ? (
                <p className="text-gray-500 mt-4">Your cart is empty.</p>
              ) : (
                <ul className="mt-4 space-y-4">
                  {cart.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <div>
                        <p className="text-sm font-bold text-gray-800">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-sm text-black">
                          ${item.product.price * item.quantity}
                        </p>
                        {item.confirmed && (
                          <p className="text-sm text-green-600 font-semibold">
                            Confirmed
                          </p>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleDecreaseQuantity(item.product.id)}
                          className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                          disabled={item.confirmed}
                        >
                          -
                        </button>
                        <button
                          onClick={() => handleIncreaseQuantity(item.product.id)}
                          className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600"
                          disabled={item.confirmed}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex justify-between mt-4">
                <button
                  onClick={toggleCart}
                  className="w-1/2 bg-black text-white py-2 rounded-lg hover:bg-black mr-2"
                >
                  Close
                </button>
                {cart.length > 0 && (
                  <button
                    onClick={handleConfirmOrder}
                    className="w-1/2 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-700 ml-2"
                    >
                    Confirm
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-6 mt-10 ml-7 relative">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-60 bg-white cursor-pointer shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-transform transform hover:scale-105 flex flex-col"
            >
              <Link href={`/products/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[250px] object-cover rounded-t-lg"
                  height={300}
                  width={300}
                />
              </Link>
              <div className="p-3 flex flex-col space-y-1 text-left">
                <div>
                  <h3 className="text-sm font-bold text-gray-800">{product.name}</h3>
                  <p className="text-xs text-gray-500">{product.category}</p>
                  <div className="text-yellow-500 text-sm">{renderStars(product.rating)}</div>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-base font-semibold text-black">${product.price}</p>
                  <del className="text-xs text-red-700 font-semibold">${product.discountPrice}</del>
                </div>
                <p className="text-sm text-green-600 font-medium">
                  Save: ${calculateDiscountedPrice(product.price, product.discountPrice)}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-3 w-full bg-black text-white py-1 rounded-lg text-sm hover:bg-black disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={loadingProduct === product.name}
                >
                  {loadingProduct === product.name ? "Adding..." : "Add to Cart"}
                </button>
              </div>
            </div>  
          ))}
        </section>
      </div>
        </div>
    </>
  );
};

export default ProductCardGrid;
