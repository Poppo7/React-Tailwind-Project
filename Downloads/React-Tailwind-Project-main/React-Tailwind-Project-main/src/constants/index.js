import frontOfStore from "../assets/rustic/frontOfStore.jpeg";
import seating_area from "../assets/rustic/seating_area.jpeg";
import coffepastry from "../assets/rustic/pastery.jpeg";
import latteart from "../assets/rustic/coupledrinks.jpeg";  
import coffeeroulette from "../assets/rustic/coffeeroulette.webp";

/*
import portfolio1 from "../assets/portfolio1.webp";
import portfolio2 from "../assets/portfolio2.webp";
import portfolio3 from "../assets/portfolio3.webp";
import portfolio4 from "../assets/portfolio4.webp";
import portfolio5 from "../assets/portfolio5.webp";
import portfolio6 from "../assets/portfolio6.webp";
*/

import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import user6 from "../assets/user6.webp";

export const LINKS = [
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Menu",
    link: "#menu",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Reviews",
    link: "#reviews",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const HERO_CONTENT = {
  title: "Binary Brews",
  subtitle: "Bug-Free Brews & Sweet",
  image: frontOfStore,
};

export const SERVICES_CONTENT = [
  {
    title: "Support our local buisness",
    description:
      "We are proud to be a local coffee shop that supports our community. We source our coffee beans from local farmers and suppliers, ensuring that we provide the freshest and highest quality coffee to our customers.",
    image: seating_area, 
    alt: "Support our local buisness",
  },
  {
    title: "Enjoy our local brew",
    description:
      "Our coffee is roasted locally and brewed fresh daily, ensuring that you get the best cup of coffee every time. We offer a variety of coffee drinks, from classic espressos to unique specialty drinks.",
    image: coffeeroulette, 
    alt: "Enjoy our local brew",
  },
  {
    title: "Latte Art",
    description:
      "Indulge in our delicious lattes, featuring beautifully crafted designs that are as pleasing to the eye as they are to the palate.",
    image: latteart,
    alt: "Latte Art",
  },
  {
    title: "Baked Goods",
    description:
      "We also offer a selection of freshly baked pastries and desserts to complement your coffee. From croissants to cookies, we have something for everyone.",
    image: coffepastry,
    alt: "Baked Goods",
  }
];


/*
export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "Modern Kitchen Renovation",
    description:
      "A complete overhaul of a traditional kitchen, featuring custom cabinetry, granite countertops, and state-of-the-art appliances.",
    image: portfolio1,
    link: "#",
  },
  {
    id: 2,
    name: "Luxurious Bathroom Remodel",
    description:
      "Transformed an outdated bathroom into a spa-like retreat with marble tiling, a glass shower, and modern fixtures.",
    image: portfolio2,
    link: "#",
  },
  {
    id: 3,
    name: "Outdoor Living Space",
    description:
      "Designed a beautiful outdoor living area, complete with a pergola, fire pit, and cozy seating for entertainment.",
    image: portfolio3,
    link: "#",
  },
  {
    id: 4,
    name: "Elegant Living Room Update",
    description:
      "Updated a living room with new flooring, stylish lighting, and custom-built shelving units.",
    image: portfolio4,
    link: "#",
  },
  {
    id: 5,
    name: "Basement Conversion",
    description:
      "Converted an unused basement into a modern, multi-functional space including a home theater, gym, and guest bedroom.",
    image: portfolio5,
    link: "#",
  },
  {
    id: 6,
    name: "Home Office Transformation",
    description:
      "Created a sleek and functional home office, optimizing space with ergonomic furniture, ample storage, and modern decor.",
    image: portfolio6,
    link: "#",
  },
]; 
*/

export const REVIEWS = {
  text: "Hear what our clients have to say about their experiences with Binary Brews. We take pride in our craft and are committed to delivering the best coffee and customer service!",
  reviews: [
    {
      name: "Alice Johnson",
      title: "Tired Developer",
      review:
        "This is a coder’s paradise! The coffee is strong, the Wi-Fi is fast, and the ambiance is perfect for long coding sessions. I’ve written more lines of code here than anywhere else, and I credit it all to the amazing brews and friendly staff.",
      image: user1,
    },
    {
      name: "Carla Mendes",
      title: "Co-Founder, CodeBlox",
      review:
        "Calm and peaceful place to work. The coffee is great and the staff is friendly. I love the variety of drinks they offer, and the quality is always nice. I feel very comfortable working here and highly recommend it to anyone looking for a cozy spot to work or relax.",
      image: user3,
    },
    {
      name: "James Lee",
      title: "Martial Arts Instructor",
      review:
        "A great place to relax and enjoy a cup of coffee. The staff is friendly and the atmosphere is inviting. I love the variety of drinks they offer, and the quality is always top-notch. I highly recommend Binary Brews to anyone looking for a cozy spot to unwind.",
      image: user4,
    },
    {
      name: "Noah Thompson",
      title: "Web Developer",
      review:
        "Binary Brews was an amazing experience. They improvised with me and created my own drink! How cool is that? I'd definitely recommend this place to anyone.",
      image: user5,
    },
    {
      name: "Penny Wong",
      title: "Java Enthusiast",
      review:
        "The staff are kind. They even gave me extra matcha with a tiny cup! This made me very happy.",
      image: user2,
    },
    {
      name: "Yvonne Smith",
      title: "DevOps Engineer",
      review:
        "Currently my favorite place to work from. The coffee is great, the Wi-Fi is fast, and the staff is friendly. I love the cozy atmosphere and the variety of seating options. I highly recommend this place to anyone looking for a comfortable spot to work or relax.",
      image: user6,
    },
  ],
};

export const CONTACT_INFO = {
  text: "Have questions or need more information? Get in touch with us, and we'll be happy to assist you.",
  phone: {
    label: "Phone",
    value: "(123) 456-7890",
  },
  email: {
    label: "Email",
    value: "info@binary-brews.com",
  },
  address: {
    label: "Address",
    value: "978 Miller Greens, Suite 100, West Reedfurt, OR 49859",
  },
};
