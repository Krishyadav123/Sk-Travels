import { motion, MotionConfig } from "framer-motion";
import {
  Armchair,
  Luggage,
  Snowflake,
  ArrowRight,
  Star,
  Car,
  ShieldCheck,
  UserCheck,
  IndianRupee,
  Headset,
} from "lucide-react";

// 👉 Apna WhatsApp number (+ ke bina)
const WHATSAPP_NUMBER = "919755331189";


const VEHICLES = [
  {
    name: "Force Urbania",
    tagline: "Premium • Spacious • Comfortable",
    image:
      "https://res.cloudinary.com/dhf8eyjee/image/upload/v1792394550/168b051d-285a-42f1-87b4-6a9db2b09b45_b5lqwx.png",
    seats: "16 Seater",
    luggage: "Large Luggage",
    price: 32,
    featured: true,
    ac: true,
  },
  {
    name: "Force Traveller AC",
    tagline: "Spacious • Comfortable • Group Travel",
    image:
      "https://res.cloudinary.com/dhf8eyjee/image/upload/v1792394601/b9d10931-caf2-4da2-94bb-4b601375d928_x2uj4n.png",
    seats: "Group Travel",
    luggage: "Large Luggage",
    price: 28,
    featured: false,
    ac: true,
  },
  {
    name: "Innova",
    tagline: "Luxury • Comfortable • Reliable",
    image:
      "https://res.cloudinary.com/dhf8eyjee/image/upload/v1792394641/5901e0d9-749a-4764-9934-818bcff41aec_xwpa0v.png",
    seats: "7 Seater",
    luggage: "Large Luggage",
    price: 18,
    featured: false,
    ac: true,
  },
  {
    name: "Swift Dzire AC",
    tagline: "Economical • Comfortable",
    image:
      "https://res.cloudinary.com/dhf8eyjee/image/upload/v1792394738/a6e9d746-5bfc-450a-a8d1-6ad375c706c8_aifsr7.png",
    seats: "4 Seater",
    luggage: "Medium Luggage",
    price: 12,
    featured: false,
    ac: true,
  },
];


const HIGHLIGHTS = [
  { icon: Car, title: "Well Maintained Vehicles", text: "Clean & comfortable for every journey" },
  { icon: ShieldCheck, title: "Fully Insured", text: "Your safety is our priority" },
  { icon: UserCheck, title: "Professional Drivers", text: "Trained & experienced drivers" },
  { icon: IndianRupee, title: "Transparent Pricing", text: "No hidden charges" },
  { icon: Headset, title: "24/7 Support", text: "Always here to assist you" },
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const enquiryLink = (name) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello SK Tour & Travels, I want to book ${name}.`
  )}`;

function VehicleCard({ vehicle }) {
  const { name, tagline, image, seats, luggage, price, featured } = vehicle;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`relative flex flex-col overflow-hidden rounded-2xl ${
        featured
          ? "border-2 border-yellow-400 bg-black text-white shadow-xl shadow-yellow-400/20"
          : "bg-white text-gray-900 shadow-lg shadow-black/10"
      }`}
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {featured && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-md bg-yellow-400 px-2.5 py-1 text-xs font-semibold text-black">
            <Star size={12} fill="currentColor" />
            Most Popular
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className={`mt-1 text-sm ${featured ? "text-gray-400" : "text-gray-500"}`}>
          {tagline}
        </p>

        <ul
          className={`mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium ${
            featured ? "text-gray-200" : "text-gray-700"
          }`}
        >
          <li className="flex items-center gap-1.5">
            <Armchair size={16} className={featured ? "text-yellow-400" : "text-gray-500"} />
            {seats}
          </li>
          <li className="flex items-center gap-1.5">
            <Luggage size={16} className={featured ? "text-yellow-400" : "text-gray-500"} />
            {luggage}
          </li>
          <li className="flex items-center gap-1.5">
            <Snowflake size={16} className={featured ? "text-yellow-400" : "text-gray-500"} />
            AC
          </li>
        </ul>

        <div className="mt-auto flex items-end justify-between pt-6">
          <div>
            <p className="text-2xl font-extrabold">
              ₹ {price}
              <span className="text-base font-semibold"> / km</span>
            </p>
            <p className={`text-xs ${featured ? "text-gray-400" : "text-gray-500"}`}>
              Starting From
            </p>
          </div>

          <a
            href={enquiryLink(name)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${name} on WhatsApp`}
            className={`flex h-11 w-11 items-center justify-center rounded-xl text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 ${
              featured
                ? "bg-yellow-400 hover:bg-yellow-300 focus-visible:ring-offset-black"
                : "bg-yellow-100 hover:bg-yellow-400 focus-visible:ring-offset-white"
            }`}
          >
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Fleet() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="fleet" className="overflow-hidden bg-gray-50 pt-16 sm:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Header */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-10 bg-yellow-400" />
                <p className="text-xs font-semibold tracking-[0.25em] text-gray-800 sm:text-sm">
                  OUR FLEET
                </p>
              </div>
              <h2 className="mt-5 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-gray-950 sm:text-5xl">
                Travel with
                <span className="block">
                  Premium <span className="text-yellow-400">Vehicles</span>
                </span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-gray-600">
                Choose from our well-maintained and comfortable vehicles for a
                safe, stylish and memorable journey.
              </p>
            </motion.div>

            {/* Banner: dummy image + yellow block */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative h-56 sm:h-72"
            >
              <div className="" />
              <img
                src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1792064308/66ff6cd6-b0ef-4ee4-8ae6-033987e3ad5a_xk15y2.png"
                alt="Force Urbania"
                className="absolute bottom-0 left-0 z-10 rounded-2xl object-cover shadow-2xl shadow-black/30"
              />
            </motion.div>
          </div>

          {/* Vehicle cards */}
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {VEHICLES.map((v) => (
              <VehicleCard key={v.name} vehicle={v} />
            ))}
          </motion.div>
        </div>

        {/* Highlights bar */}
        <div className="mt-14 rounded-t-[2.5rem] bg-black px-4 py-10 sm:px-6">
          <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {HIGHLIGHTS.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className={`flex items-center gap-4 lg:px-5 ${
                  i !== HIGHLIGHTS.length - 1 ? "lg:border-r lg:border-white/15" : ""
                }`}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-yellow-400 text-yellow-400">
                  <Icon size={24} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-0.5 text-xs text-gray-400">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </MotionConfig>
  );
}