import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Slider from "./slider";
import Image from "next/image";
import Navbar from "./navbar";

// i can't keep moving everything translation related to a use client file
// there has to be a way to handle that on the backend
// TODO: find that

const RestaurantWebsite = () => {
  const { t } = useTranslation();


  const burgers = [
    { url: "https://utfs.io/f/RGBMPHafKzagFTkzz4r93MdughzF2KovnXHIwNtk1m0aC865", title: t("Chef's Burger"), description: t("2 pieces of Chef's Buffalo meatballs, 2 pieces of cheddar cheese, caramelized mushrooms, caramelized onions, french fries, special Chef's sauce") },
    { url: "https://utfs.io/f/RGBMPHafKzagrLH96O0Xv5n7DcMzkHFNr6hlAsK0YqmVoByf", title: t("Gourmet Burger"), description: t("Buffalo meatballs cooked on charcoal fire, onion rings, tomato slices, 40 gr. tenderloin, barbecue sauce") },
    { url: "https://utfs.io/f/RGBMPHafKzagJQ9UARWgY2auvO5XKyAw3MeJZVDHht40cQU7", title: t("Crispy Chicken Burger"), description: t("150 gr. crispy chicken thigh, curly lettuce, onion rings, tomato slices, crispy pickles, ranch sauce") },
    { url: "https://utfs.io/f/RGBMPHafKzag1vHVYqLlwQMcNr8WuTUezhKmX7xGJIZfpCdD", title: t("Cheeseburger"), description: t("Homemade meatballs, curly lettuce, onion rings, diced tomato slices, cheddar cheese, sauce, sliced pickles, ranch sauce") },
    { url: "https://utfs.io/f/RGBMPHafKzag5w5lqEVnlxXWDvk8ENO1tAjgzKqUeRH6Pbfc", title: t("Classic Burger"), description: t("Chef's meatballs, curly lettuce, onion rings, tomato slices, pickles, ranch sauce") },
    { url: "https://utfs.io/f/RGBMPHafKzag8zsEfaW2uDgQzK4lS2HTAaXYVECsndRp3m5t", title: t("Barbecue Burger"), description: t("Butcher's meatballs, butcher's sausage, onion rings, two slices of tomato, sweet red pepper, barbecue sauce") },
    { url: "https://utfs.io/f/RGBMPHafKzagFHuFgIr93MdughzF2KovnXHIwNtk1m0aC865", title: t("Anatolia Burger"), description: t("Homemade meatballs, kolot cheese, onion rings, tomato slices, curly lettuce, ranch sauce") },
    { url: "https://utfs.io/f/RGBMPHafKzagDfc4XvTMLrNdgWqf0Y4pAxEnyOkUemTGS3Ru", title: t("Eggy Burger"), description: t("Chef's meatballs, cheddar cheese, ranch sauce, ham, egg") },
    { url: "https://utfs.io/f/RGBMPHafKzagPm38bDZcGkvA5oKHmZsz4fT2N6E8uMayjbIR", title: t("Hellim Burger"), description: t("Meatballs cooked on charcoal, lettuce pieces, onion rings, tomato slices, pickle pieces, grilled halloumi cheese, mixed sauce") },
    { url: "https://utfs.io/f/RGBMPHafKzagLDmkyJjKPUHMmAifxquQ4IYnwy5FC6k0veOB", title: t("El Toro Burger"), description: t("Chef's meatballs mixed with Mexican spices, broken onion rings, curly lettuce, tomato slices, red pepper, jalapeno pepper, hot sauce") },
    { url: "https://utfs.io/f/RGBMPHafKzag6IL1TNCkyUfDNxE3JQuhLjOAa8GgtCScrKl9", title: t("Ottoman Burger"), description: t("Butcher's baton sausage, curly lettuce, tomato slices, diced pickles, onion rings, matchstick potato chips, ranch sauce") },
    { url: "https://utfs.io/f/RGBMPHafKzagBGDLKawBpyAvm9NHfuSRDM7rXjiFkg6slzP0", title: t("Grilled Chicken Burger"), description: t("Grilled chicken thigh with barbecue flavor, curly lettuce, onion rings, tomato slices, pickles, ranch sauce") },
    // TODO: if it doesn't get that much use you can just switch back to public
    // public gets too many edge requests, i had about 100 just off of my own thing
    // and it only gives me 1m requests a month
  ];


  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <Slider />

      <section id="menu" className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-light mb-16 text-center">{t("Our Menu")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {burgers.map((burger, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <Image
                src={burger.url}
                alt={burger.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-light mb-2">{burger.title}</h3>
              <p className="text-gray-600">
                {burger.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>


      <section id="about" className="container mx-auto px-6 py-24 bg-gray-100">
        <h2 className="text-4xl font-light mb-16 text-center">{t("About Us")}</h2>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg font-light mb-4">
            {t("We are a burger restaurant dedicated to providing the best experience in the city.")}
          </p>
          <p className="text-lg font-light">
            {t("Our chefs use only the freshest ingredients to create mouth-watering dishes that will leave you coming back for more.")}
          </p>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-light mb-16 text-center">{t("Contact Us")}</h2>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg font-light mb-4">
            {t("Have any questions or feedback? We'd love to hear from you!")}
          </p>
          {/* phone number and email address */}
          <p className="text-lg font-light">phone number</p>
          <a className="text-green-600" href="mailto:random@mail.com">e-mail</a>
          <p className="text-pretty text-lg font-extralight">address</p>
        </div>
      </section>


      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="font-light">&copy; {t("2024 Yiğit Cankurtaran. All rights reserved.")}</p>
          {/* might delete the copyright thingy depending on status */}
        </div>
      </footer>
    </div>
  );
};

export default RestaurantWebsite;
