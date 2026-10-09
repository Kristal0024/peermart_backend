import { connectdb } from "./configs/db.js";
import { productModel } from "./schemas/product.model.js";

const products = [
  {
    title: "iPhone 13",
    description: "Used iPhone 13 in good condition with original charger.",
    price: 55000,
    category: "Electronics",
    subcategory: "Mobiles",
    condition: "Good",
    location: "Butwal",
    images: ["https://images.unsplash.com/photo-1647503380147-e075b24f4cbe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
},

  {
    title: "Samsung Galaxy S22",
    description: "Samsung Galaxy S22 with clean display and good battery.",
    price: 42000,
    category: "Electronics",
    subcategory: "Mobiles",
    condition: "Like New",
    location: "Bhairahawa",
    images:[ "https://images.unsplash.com/photo-1610792516820-2bff50c652a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
     },

  {
    title: "Dell Inspiron 15",
    description: "Dell laptop suitable for college work and programming.",
    price: 45000,
    category: "Electronics",
    subcategory: "Laptops",
    condition: "Good",
    location: "Butwal",
    images: ["https://images.unsplash.com/photo-1567521463850-4939134bcd4a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    
  },

  {
    title: "Lenovo IdeaPad 3",
    description: "Reliable laptop with 8GB RAM and 512GB SSD.",
    price: 52000,
    category: "Electronics",
    subcategory: "Laptops",
    condition: "Good",
    location: "Pokhara",
    images:[ "https://images.unsplash.com/photo-1763162139130-240507e9fad5?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
     },

  {
    title: "Canon EOS 200D",
    description: "DSLR camera with lens, ideal for photography beginners.",
    price: 65000,
    category: "Electronics",
    subcategory: "Cameras",
    condition: "Good",
    location: "Kathmandu",
    images: ["https://images.unsplash.com/photo-1619401952369-c5bdeb8f0185?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
  },

  {
    title: "iPad 9th Generation",
    description: "iPad suitable for studying, notes and entertainment.",
    price: 38000,
    category: "Electronics",
    subcategory: "Tablets",
    condition: "Like New",
    location: "Butwal",
    images: ["https://images.unsplash.com/photo-1630331528526-7d04c6eb463f?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
},

  {
    title: "Sony WH-1000XM4",
    description: "Wireless noise cancelling headphones with excellent sound.",
    price: 28000,
    category: "Electronics",
    subcategory: "Headphones",
    condition: "Good",
    location: "Kathmandu",
    images:[ "https://images.unsplash.com/photo-1621208587196-0b2a7d2aeb03?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      },

  {
    title: "Mountain Bike",
    description: "21-speed mountain bike suitable for city and trail riding.",
    price: 18000,
    category: "Vehicles",
    subcategory: "Bikes",
    condition: "Good",
    location: "Butwal",
    images:[ "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    
  },

  {
    title: "Honda Dio",
    description: "Well-maintained scooter with regular servicing history.",
    price: 145000,
    category: "Vehicles",
    subcategory: "Scooters",
    condition: "Good",
    location: "Bhairahawa",
    images: ["https://images.unsplash.com/photo-1736079696431-41b38ff09e1d?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
},

  {
    title: "Toyota Corolla",
    description: "Used family car in good mechanical condition.",
    price: 1850000,
    category: "Vehicles",
    subcategory: "Cars",
    condition: "Good",
    location: "Kathmandu",
    images: ["https://images.unsplash.com/photo-1626072557464-90403d788e8d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      },

  {
    title: "Study Table",
    description: "Wooden study table with drawer and storage space.",
    price: 6500,
    category: "Home-living",
    subcategory: "Furniture",
    condition: "Good",
    location: "Butwal",
    images: ["https://plus.unsplash.com/premium_photo-1664193968929-d9d9544296e0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://plus.unsplash.com/premium_photo-1664193968829-4a732c3390e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"],
      },

  {
    title: "Office Chair",
    description: "Comfortable ergonomic chair suitable for study or office.",
    price: 8500,
    category: "Home-living",
    subcategory: "Furniture",
    condition: "Like New",
    location: "Pokhara",
    images: ["https://images.unsplash.com/photo-1688578735122-f37256f1b8b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"],
    
  },

  {
    title: "Single Bed",
    description: "Wooden single bed in clean and usable condition.",
    price: 12000,
    category: "Home-living",
    subcategory: "Furniture",
    condition: "Good",
    location: "Butwal",
    images: ["https://images.pexels.com/photos/35236646/pexels-photo-35236646.jpeg","https://images.pexels.com/photos/35236655/pexels-photo-35236655.jpeg"],
},

  {
    title: "Three-Seater Sofa",
    description: "Comfortable fabric sofa with minimal signs of use.",
    price: 22000,
    category: "Home-living",
    subcategory: "Furniture",
    condition: "Good",
    location: "Bhairahawa",
    images: ["https://images.pexels.com/photos/38028282/pexels-photo-38028282.jpeg"],
  },

  {
    title: "Men's Denim Jacket",
    description: "Casual denim jacket suitable for everyday wear.",
    price: 2500,
    category: "Fashion",
    subcategory: "Clothes",
    condition: "Like New",
    location: "Butwal",
    images:[ "https://images.pexels.com/photos/13662420/pexels-photo-13662420.jpeg","https://images.pexels.com/photos/13662505/pexels-photo-13662505.jpeg","https://images.pexels.com/photos/13652610/pexels-photo-13652610.jpeg"],
     },

  {
    title: "Nike Running Shoes",
    description: "Comfortable running shoes with very little usage.",
    price: 6500,
    category: "Fashion",
    subcategory: "Shoes",
    condition: "Like New",
    location: "Kathmandu",
    images:[ "https://images.pexels.com/photos/13525839/pexels-photo-13525839.jpeg",
"https://images.pexels.com/photos/13525776/pexels-photo-13525776.jpeg",
"https://images.pexels.com/photos/13525579/pexels-photo-13525579.jpeg"],
},
  {
    title: "Leather Backpack",
    description: "Spacious backpack suitable for college and everyday use.",
    price: 3500,
    category: "Fashion",
    subcategory: "Bags",
    condition: "Good",
    location: "Pokhara",
    images: ["https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
  },

  {
    title: "The Alchemist",
    description: "Paperback novel in good readable condition.",
    price: 500,
    category: "Books",
    subcategory: "Novels",
    condition: "Good",
    location: "Butwal",
    images: ["https://images.unsplash.com/photo-1627023813330-c7d58fe34835?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
  },
 {
    title: "Gaming console",
    description: "A good and handy gaming console.",
    price: 4500,
    category: "Gaming",
    subcategory: "Console",
    condition: "Like New",
    location: "Butwal",
    images: ["https://images.pexels.com/photos/9408470/pexels-photo-9408470.jpeg","https://images.pexels.com/photos/9408467/pexels-photo-9408467.jpeg"],
      },
];
connectdb()

export const addBulkProducts=async(req,res)=>{
try {
const productwithseller=products.map((product)=>({
...product,seller:req.user.id
}))
await productModel.insertMany(productwithseller)
console.log("products added successfully")
} catch (error) {
  console.log(error);
}
}