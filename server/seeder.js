const express=require("express");
const dotenv= require("dotenv");
const connectDB=require("./config/config");
require("colors");
const Pizza=require("./models/pizzaModel");
const Pizzas=require("./data/pizza-data");

dotenv.config()
connectDB()


const importData= async ()=>{
    try {
        await Pizza.deleteMany()
        const sampleData = Pizzas.map((pizza)=>{return{...pizza}})
        await Pizza.insertOne( {
            name: "Margherita",
            variants: ["small", "medium", "large"],
            prices: [
              {
                small: 99,
                medium: 199,
                large: 399,
              },
            ],
            crust : [
             "New Hand Tossed","100% Wheat Thin Crust","Fresh Pan Pizza","San Francisco Style ","Schezwan Pan ","Stuffed Crust"
            ],
            toppings : [
             "Grilled Mushroom","Crisped Capsicum","Onion","Tomato","Red Pepper", "Jalapeno","Black Olive"
            ],
            category: "veg",
            image: "/images/margherita.jpg",
            description: "Classic delight with 100% real mozzarella cheese",
          });
        console.log("data imported")
    } catch (error) {
        console.log(err) ;
        process.exit(1);
    }

};