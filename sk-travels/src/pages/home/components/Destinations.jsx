import { motion, MotionConfig } from "framer-motion";
import { MapPin, Car, ArrowRight, MessageCircle, Route } from "lucide-react";

// 👉 Apna WhatsApp number (+ ke bina)
const WHATSAPP_NUMBER = "919876543210";

// 👉 Images aur distance/time dummy hain, apne hisaab se badal lena
const DESTINATIONS = [
  {
    name: "Mahakaleshwar",
    place: "Ujjain",
    image: "https://placehold.co/600x450/78350f/facc15?text=Ujjain",
    distance: "0 km",
    time: "~ 2-3 Hours",
  },
  {
    name: "Omkareshwar",
    place: "Madhya Pradesh",
    image: "https://placehold.co/600x450/1e3a5f/facc15?text=Omkareshwar",
    distance: "140 km",
    time: "~ 2-3 Hours",
  },
  {
    name: "Maheshwar",
    place: "Madhya Pradesh",
    image: "https://placehold.co/600x450/14532d/facc15?text=Maheshwar",
    distance: "150 km",
    time: "~ 2-4 Hours",
  },
  {
    name: "Ram Mandir",
    place: "Ayodhya, Uttar Pradesh",
    image: "https://placehold.co/600x450/7c2d12/facc15?text=Ayodhya",
    distance: "1000 km",
    time: "~ 18-20 Hours",
  },
];

const headerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

function DestinationCard({ item }) {
  const { name, place, image, distance, time } = item;

  return (
    <motion.li
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-xl shadow-black/30"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={`${name}, ${place}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          <MapPin size={14} className="text-yellow-400" />
          {distance}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-950">{name}</h3>
        <p className="text-sm text-gray-500">{place}</p>

        <div className="mt-4 flex items-center justify-between">
          <p className="flex items-center gap-2 text-sm text-gray-700">
            <Car size={18} className="text-gray-900" />
            {time}
          </p>
          <a
            href={whatsappLink(`Hello SK Tour & Travels, I want a trip to ${name}, ${place}.`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about trip to ${name} on WhatsApp`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 text-black transition-colors hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
          >
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </motion.li>
  );
}

export default function Destinations() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="destinations"
        className="bg-gradient-to-b from-gray-950 to-black py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <motion.div
              variants={headerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-3xl"
            >
              <motion.div variants={rise} className="flex items-center gap-3">
                <span className="h-0.5 w-12 bg-yellow-400" />
                <p className="text-xs font-medium tracking-[0.25em] text-gray-300 sm:text-sm">
                  POPULAR PLACES
                </p>
              </motion.div>

              <motion.h2
                variants={rise}
                className="mt-6 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Explore
                <span className="block">
                  <span className="text-yellow-400">Amazing</span> Destinations
                </span>
              </motion.h2>

              <motion.p
                variants={rise}
                className="mt-6 max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg"
              >
                From spiritual journeys to scenic getaways, travel to the most
                popular destinations with SK Tour and Travels in complete
                comfort.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="hidden shrink-0 -rotate-6 text-yellow-400 lg:block"
              aria-hidden="true"
            >
              <p className="font-serif text-3xl font-semibold italic leading-tight text-white">
                Discover
                <br />
                India
                <br />
                <span className="text-yellow-400">Together</span>
              </p>
              <span className="mt-2 block h-1 w-36 rounded-full bg-yellow-400" />
            </motion.div>
          </div>

          {/* Cards */}
          <motion.ul
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {DESTINATIONS.map((d) => (
              <DestinationCard key={d.name} item={d} />
            ))}
          </motion.ul>

          {/* Custom trip CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-10 flex flex-col items-start gap-6 rounded-2xl border border-yellow-400 bg-black p-6 sm:p-8 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-center gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black">
                <Route size={30} />
              </span>
              <span className="hidden h-14 w-px bg-white/20 sm:block" />
              <div>
                <p className="text-[11px] font-medium tracking-[0.25em] text-gray-300">
                  PLANNING A CUSTOM TRIP?
                </p>
                <p className="mt-2 text-xl font-bold leading-snug text-white sm:text-2xl">
                  Tell Us Your Destination
                  <span className="block text-yellow-400">
                    We&apos;ll Plan the Perfect Journey!
                  </span>
                </p>
              </div>
            </div>

            <a
              href={whatsappLink(
                "Hello SK Tour & Travels, I want a custom quote for my trip."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-yellow-400 px-6 py-4 text-sm font-semibold text-black transition-colors hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black md:w-auto"
            >
              <MessageCircle size={28} strokeWidth={2.2} />
              <span className="text-left leading-tight">
                Get a Custom Quote
                <span className="flex items-center gap-1.5">
                  on WhatsApp <ArrowRight size={16} />
                </span>
              </span>
            </a>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}