{
  /* <section class="px-12">
        <div class="max-w-md mx-auto relative">
           
            <input id="article-01" type="radio" name="slider" class="sr-only peer/01">
            <input id="article-02" type="radio" name="slider" class="sr-only peer/02">
            <input id="article-03" type="radio" name="slider" class="sr-only peer/03" checked>
            <input id="article-04" type="radio" name="slider" class="sr-only peer/04">
            <input id="article-05" type="radio" name="slider" class="sr-only peer/05">

           
            <div class="
            
                absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                peer-focus-visible/01:[&_article]:ring
                peer-focus-visible/01:[&_article]:ring-indigo-300
                peer-checked/01:relative
                peer-checked/01:z-50
                peer-checked/01:translate-x-0
                peer-checked/01:scale-100
                peer-checked/01:[&>label]:pointer-events-none
                peer-checked/02:-translate-x-20
                peer-checked/02:scale-[83.75%]
                peer-checked/02:z-40
                peer-checked/03:-translate-x-40
                peer-checked/03:z-30
                peer-checked/04:-translate-x-40                    
                peer-checked/04:opacity-0
                peer-checked/05:-translate-x-40
            ">
                <label class="absolute inset-0" for="article-01"><span class="sr-only">Focus on the big picture</span></label>
                <article class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-2xl h-[490px] flex flex-col justify-between">
                    <!-- Image Box Layout -->
                    <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset" style="width: 60px;">Trending</span>
                    <div class="relative">
                        <img id="cardImage01" src="product.png" alt="Product Image" class="w-full h-48 object-cover rounded-lg shadow transition-all duration-300">
                        <!-- Dark/Light Toggle Button for Image -->
                        <button onclick="toggleImageColor()" id="imageToggleButton" class="absolute top-2 right-2 bg-gray-200 dark:bg-gray-600 p-2 rounded-full">
                            <img id="imageToggleIcon" src="moon.png" alt="Toggle Image Mode" class="w-6 h-6">
                        </button>
                    </div>
            
                    <!-- Product Details -->
                    <div class="text-gray-900 dark:text-white space-y-2">
                        <h2 class="text-xl font-bold">Stylish Fabric</h2>
                        <p class="text-gray-700 dark:text-gray-300">Fabric: Cotton</p>
                        <p class="text-gray-700 dark:text-gray-300">Event: Formal</p>
                        <p class="text-gray-700 dark:text-gray-300">Price: $49.99</p>
                        <!-- Size Selection Buttons -->
                        <div class="flex space-x-2">
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">S</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">M</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">L</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">XL</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">2XL</button>
                        </div>
                        <br>
                        <hr style="width: 120px; margin-left: 150px;">
                        <script>
                            function toggleSize(button) {
                                button.classList.toggle('bg-black');
                                button.classList.toggle('text-white');
                            }
                        </script>
                    </div>
                    <br>
                    <!-- Add to Cart Button -->
                    <button  onclick="addToCart(this)" class="bg-black text-white p-3 rounded-md flex items-center justify-center w-full hover:bg-gray-700 transition" style="width:250px; margin-left: 20%;">
                        <img src="online-shopping.png" alt="Cart" class="w-6 h-6 mr-2"> Add to Cart
                    </button>
                </article>
            </div>
    
            
            <div class="
                absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                peer-focus-visible/02:[&_article]:ring
                peer-focus-visible/02:[&_article]:ring-indigo-300                        
                peer-checked/01:translate-x-20
                peer-checked/01:scale-[83.75%]
                peer-checked/01:z-40
                peer-checked/02:relative
                peer-checked/02:z-50
                peer-checked/02:translate-x-0
                peer-checked/02:scale-100
                peer-checked/02:[&>label]:pointer-events-none
                peer-checked/03:-translate-x-20
                peer-checked/03:scale-[83.75%]
                peer-checked/03:z-40
                peer-checked/04:-translate-x-40
                peer-checked/04:z-30
                peer-checked/05:-translate-x-40 
                peer-checked/05:opacity-0
            ">
                <label class="absolute inset-0" for="article-02"><span class="sr-only">Focus on the big picture</span></label>
                
                <article class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-2xl h-[450px] flex flex-col justify-between">
                    <!-- Image Box Layout -->
                    <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset" style="width: 60px;">Trending</span>
                    <div class="relative">
                        <img id="cardImage01" src="product.jpg" alt="Product Image" class="w-full h-48 object-cover rounded-lg shadow transition-all duration-300">
                        <!-- Dark/Light Toggle Button for Image -->
                        <button onclick="toggleImageColor()" id="imageToggleButton" class="absolute top-2 right-2 bg-gray-200 dark:bg-gray-600 p-2 rounded-full">
                            <img id="imageToggleIcon" src="moon.png" alt="Toggle Image Mode" class="w-6 h-6">
                        </button>
                    </div>
            
                    <!-- Product Details -->
                    <div class="text-gray-900 dark:text-white space-y-2">
                        <h2 class="text-xl font-bold">Stylish Fabric</h2>
                        <p class="text-gray-700 dark:text-gray-300">Fabric: Cotton</p>
                        <p class="text-gray-700 dark:text-gray-300">Event: Formal</p>
                        <p class="text-gray-700 dark:text-gray-300">Price: $49.99</p>
                        <!-- Size Selection Buttons -->
                        <div class="flex space-x-2">
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">S</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">M</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">L</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">XL</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">2XL</button>
                        </div>
                        <br>
                        <hr style="width: 120px; margin-left: 150px;">
                        <script>
                            function toggleSize(button) {
                                button.classList.toggle('bg-black');
                                button.classList.toggle('text-white');
                            }
                        </script>
                    </div>
                    <br>








                    <!-- Add to Cart Button -->
                    <button onclick="addToCart(this)" class="bg-black text-white p-3 rounded-md flex items-center justify-center w-full hover:bg-gray-700 transition" style="width:250px; margin-left: 20%;">
                        <img src="online-shopping.png" alt="Cart" class="w-6 h-6 mr-2"> Add to Cart
                    </button>
                </article>
            </div>
    
            <div class="
                absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                peer-focus-visible/03:[&_article]:ring
                peer-focus-visible/03:[&_article]:ring-indigo-300                          
                peer-checked/01:translate-x-40
                peer-checked/01:z-30
                peer-checked/02:translate-x-20
                peer-checked/02:scale-[83.75%]
                peer-checked/02:z-40
                peer-checked/03:relative
                peer-checked/03:z-50
                peer-checked/03:translate-x-0
                peer-checked/03:scale-100
                peer-checked/03:[&>label]:pointer-events-none
                peer-checked/04:-translate-x-20
                peer-checked/04:scale-[83.75%]
                peer-checked/04:z-40
                peer-checked/05:-translate-x-40
                peer-checked/05:z-30                  
            ">
                <label class="absolute inset-0" for="article-03"><span class="sr-only">Focus on the big picture</span></label>
                <article class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-2xl h-[450px] flex flex-col justify-between">
                    <!-- Image Box Layout -->
                    <div class="relative">
                        <img id="cardImage01" src="product.jpg" alt="Product Image" class="w-full h-48 object-cover rounded-lg shadow transition-all duration-300">
                        <!-- Dark/Light Toggle Button for Image -->
                        <button onclick="toggleImageColor()" id="imageToggleButton" class="absolute top-2 right-2 bg-gray-200 dark:bg-gray-600 p-2 rounded-full">
                            <img id="imageToggleIcon" src="moon.png" alt="Toggle Image Mode" class="w-6 h-6">
                        </button>
                    </div>
            
                    <!-- Product Details -->
                    <div class="text-gray-900 dark:text-white space-y-2">
                        <h2 class="text-xl font-bold">Stylish Fabric</h2>
                        <p class="text-gray-700 dark:text-gray-300">Fabric: Cotton</p>
                        <p class="text-gray-700 dark:text-gray-300">Event: Formal</p>
                        <p class="text-gray-700 dark:text-gray-300">Price: $49.99</p>
                        <!-- Size Selection Buttons -->
                        <div class="flex space-x-2">
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">S</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">M</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">L</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">XL</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">2XL</button>
                        </div>
                        <br>
                        <hr style="width: 120px; margin-left: 150px;">
                        <script>
                            function toggleSize(button) {
                                button.classList.toggle('bg-black');
                                button.classList.toggle('text-white');
                            }
                        </script>
                    </div>
                    <br>
                    <!-- Add to Cart Button -->
                    <button onclick="addToCart(this)" class="bg-black text-white p-3 rounded-md flex items-center justify-center w-full hover:bg-gray-700 transition" style="width:250px; margin-left: 20%;">
                        <img src="online-shopping.png" alt="Cart" class="w-6 h-6 mr-2"> Add to Cart
                    </button>
                </article>
            </div>
    
            <div class="
                absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                peer-focus-visible/04:[&_article]:ring
                peer-focus-visible/04:[&_article]:ring-indigo-300                          
    
                peer-checked/01:translate-x-40 
                peer-checked/01:opacity-0
                
                peer-checked/02:translate-x-40
                peer-checked/02:z-30
                
                peer-checked/03:translate-x-20
                peer-checked/03:scale-[83.75%]
                peer-checked/03:z-40
    
                peer-checked/04:relative
                peer-checked/04:z-50
                peer-checked/04:translate-x-0
                peer-checked/04:scale-100
                peer-checked/04:[&>label]:pointer-events-none
                
                peer-checked/05:-translate-x-20
                peer-checked/05:scale-[83.75%]
                peer-checked/05:z-40
            ">
                <label class="absolute inset-0" for="article-04"><span class="sr-only">Focus on the big picture</span></label>
                <article class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-2xl h-[450px] flex flex-col justify-between">
                    <!-- Image Box Layout -->
                    <div class="relative">
                        <img id="cardImage01" src="product.jpg" alt="Product Image" class="w-full h-48 object-cover rounded-lg shadow transition-all duration-300">
                        <!-- Dark/Light Toggle Button for Image -->
                        <button onclick="toggleImageColor()" id="imageToggleButton" class="absolute top-2 right-2 bg-gray-200 dark:bg-gray-600 p-2 rounded-full">
                            <img id="imageToggleIcon" src="moon.png" alt="Toggle Image Mode" class="w-6 h-6">
                        </button>
                    </div>
            
                    <!-- Product Details -->
                    <div class="text-gray-900 dark:text-white space-y-2">
                        <h2 class="text-xl font-bold">Stylish Fabric</h2>
                        <p class="text-gray-700 dark:text-gray-300">Fabric: Cotton</p>
                        <p class="text-gray-700 dark:text-gray-300">Event: Formal</p>
                        <p class="text-gray-700 dark:text-gray-300">Price: $49.99</p>
                        <!-- Size Selection Buttons -->
                        <div class="flex space-x-2">
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">S</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">M</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">L</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">XL</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">2XL</button>
                        </div>
                        <br>
                        <hr style="width: 120px; margin-left: 150px;">
                        <script>
                            function toggleSize(button) {
                                button.classList.toggle('bg-black');
                                button.classList.toggle('text-white');
                            }
                        </script>
                    </div>
                    <br>
                    <!-- Add to Cart Button -->
                    <button onclick="addToCart(this)" class="bg-black text-white p-3 rounded-md flex items-center justify-center w-full hover:bg-gray-700 transition" style="width:250px; margin-left: 20%;">
                        <img src="online-shopping.png" alt="Cart" class="w-6 h-6 mr-2"> Add to Cart
                    </button>
                </article>
            </div>  
    
            <div class="
                absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                peer-focus-visible/05:[&_article]:ring
                peer-focus-visible/05:[&_article]:ring-indigo-300                          
                peer-checked/01:translate-x-40 
                peer-checked/02:translate-x-40 
                peer-checked/02:opacity-0
                peer-checked/03:translate-x-40
                peer-checked/03:z-30
                peer-checked/04:translate-x-20
                peer-checked/04:scale-[83.75%]
                peer-checked/04:z-40
                peer-checked/05:relative
                peer-checked/05:z-50
                peer-checked/05:translate-x-0
                peer-checked/05:scale-100
                peer-checked/05:[&>label]:pointer-events-none
            ">
                <label class="absolute inset-0" for="article-05"><span class="sr-only">Focus on the big picture</span></label>
                <article class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-2xl h-[450px] flex flex-col justify-between">
                    <!-- Image Box Layout -->
                    <div class="relative">
                        <img id="cardImage01" src="product.jpg" alt="Product Image" class="w-full h-48 object-cover rounded-lg shadow transition-all duration-300">
                        <!-- Dark/Light Toggle Button for Image -->
                        <button onclick="toggleImageColor()" id="imageToggleButton" class="absolute top-2 right-2 bg-gray-200 dark:bg-gray-600 p-2 rounded-full">
                            <img id="imageToggleIcon" src="moon.png" alt="Toggle Image Mode" class="w-6 h-6">
                        </button>
                    </div>
            
                    <!-- Product Details -->
                    <div class="text-gray-900 dark:text-white space-y-2">
                        <h2 class="text-xl font-bold">Stylish Fabric</h2>
                        <p class="text-gray-700 dark:text-gray-300">Fabric: Cotton</p>
                        <p class="text-gray-700 dark:text-gray-300">Event: Formal</p>
                        <p class="text-gray-700 dark:text-gray-300">Price: $49.99</p>
                        <!-- Size Selection Buttons -->
                        <div class="flex space-x-2">
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">S</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">M</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">L</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">XL</button>
                            <button onclick="toggleSize(this)" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-md text-xs">2XL</button>
                        </div>
                        <br>
                        <hr style="width: 120px; margin-left: 150px;">
                        <script>
                            function toggleSize(button) {
                                button.classList.toggle('bg-black');
                                button.classList.toggle('text-white');
                            }
                        </script>
                    </div>
                    <br>
                    <!-- Add to Cart Button -->
                    <button onclick="addToCart(this)" class="bg-black text-white p-3 rounded-md flex items-center justify-center w-full hover:bg-gray-700 transition" style="width:250px; margin-left: 20%;">
                        <img src="online-shopping.png" alt="Cart" class="w-6 h-6 mr-2"> Add to Cart
                    </button>
                    <script>
                        let cartCount = 0;

                        function addToCart(button) {
                            button.innerHTML = '<img src="online-shopping.png" alt="Cart" class="w-6 h-6 mr-2"> Added';
                            cartCount++;
                            updateCartCount();
                        }

                        function updateCartCount() {
                            const buyButton = document.querySelector('button[style*="width: 400px;"]');
                            buyButton.innerHTML = BUY SELECTED ITEMS (${cartCount});
                        }
                    </script>
                </article>
            </div>                  
        </div>
    </section> */
}

import { useState } from "react";

const ProductCarousel = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(3);

  const toggleSize = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  const products = [
    {
      id: 1,
      image: "product.png",
      title: "Stylish Fabric",
      fabric: "Cotton",
      event: "Formal",
      price: "$49.99",
    },
    {
      id: 2,
      image: "product.jpg",
      title: "Elegant Suit",
      fabric: "Wool",
      event: "Business",
      price: "$79.99",
    },
    {
      id: 3,
      image: "product.png",
      title: "Casual Wear",
      fabric: "Linen",
      event: "Casual",
      price: "$39.99",
    },
    {
      id: 4,
      image: "product.jpg",
      title: "Premium Jacket",
      fabric: "Leather",
      event: "Winter",
      price: "$99.99",
    },
    {
      id: 5,
      image: "product.png",
      title: "Classic Shirt",
      fabric: "Silk",
      event: "Evening",
      price: "$59.99",
    },
  ];

  return (
    <section className="px-12">
      <div className="max-w-md mx-auto relative">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
              ${
                selectedArticle === product.id ? "z-50 scale-100" : "opacity-50"
              }`}
          >
            <label
              className="absolute inset-0"
              onClick={() => setSelectedArticle(product.id)}
            >
              <span className="sr-only">Focus on the big picture</span>
            </label>
            <article className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-2xl h-[490px] flex flex-col justify-between">
              <span
                className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset"
                style={{ width: "60px" }}
              >
                Trending
              </span>
              <div className="relative">
                <img
                  src={product.image}
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded-lg shadow transition-all duration-300"
                />
              </div>
              <div className="text-gray-900 dark:text-white space-y-2">
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Fabric: {product.fabric}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Event: {product.event}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Price: {product.price}
                </p>
                <div className="flex space-x-2">
                  {["S", "M", "L", "XL", "2XL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`p-2 rounded-md text-xs ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <hr className="w-32 mx-auto my-4" />
              </div>
              <button
                className="bg-black text-white p-3 rounded-md flex items-center justify-center w-full hover:bg-gray-700 transition"
                style={{ width: "250px", marginLeft: "20%" }}
              >
                <img
                  src="online-shopping.png"
                  alt="Cart"
                  className="w-6 h-6 mr-2"
                />{" "}
                Add to Cart
              </button>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
