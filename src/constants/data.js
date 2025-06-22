import beauty from "/images/beauty.jpg";
import dress from "/images/dress.jpg";
import fragrances from "/images/fragrance.jpg";
import skincare from "/images/skincare.jpg";

export const categories = [
  { id: 1, name: "beauty", image: beauty },
  { id: 2, name: "skincare", image: skincare },
  { id: 3, name: "fragrances", image: fragrances },
  { id: 4, name: "womens-dresses", image: dress },
];

export const brand = [
  {
    id: 1,
    price: 200,
    descriptions: "International Brands",
  },
  {
    id: 2,
    price: 2000,
    descriptions: "High-Quality Products",
  },
  {
    id: 3,
    price: 30000,
    descriptions: "Happy Customers",
  },
];

export const faqs = [
  {
    question: "What is the return policy?",
    answer:
      "You can return any item within 30 days of purchase. The product must be unused and in its original packaging.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping usually takes 3-7 business days depending on your location.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping fees and delivery times vary by destination.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive an email with a tracking number and link.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Orders can be changed or cancelled within 24 hours of placing them. Please contact our support team for assistance.",
  },
];
