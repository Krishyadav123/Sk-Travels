
import { motion, MotionConfig } from "framer-motion";
import {
  Armchair,
  ShieldCheck,
  UserCheck,
  IndianRupee,
  Clock,
  Settings,
  Users,
  Headset,
} from "lucide-react";

const REASONS = [
  {
    icon: Armchair,
    title: "Comfortable Journeys",
    text: "Spacious and well-maintained vehicles for a relaxed travel experience.",
    dark: false,
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Travel",
    text: "Your safety is our priority with experienced drivers and regular vehicle maintenance.",
    dark: true,
  },
  {
    icon: UserCheck,
    title: "Professional Drivers",
    text: "Trained, polite and experienced drivers ensure a smooth and enjoyable journey.",
    dark: false,
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    text: "No hidden charges. Get clear per-kilometre pricing with complete trip details upfront.",
    dark: true,
  },
  {
    icon: Clock,
    title: "On-Time Service",
    text: "We value your time and ensure timely pickup and drop at every location.",
    dark: true,
  },
  {
    icon: Settings,
    title: "Customized Travel Plans",
    text: "Flexible travel plans as per your requirements, whether personal or corporate.",
    dark: false,
  },
  {
    icon: Users,
    title: "Perfect for Every Occasion",
    text: "Ideal for family trips, weddings, corporate travel, pilgrimages and more.",
    dark: true,
  },
  {
    icon: Headset,
    title: "24/7 Support",
    text: "Our team is always available to assist you with bookings, changes and travel support.",
    dark: false,
  },
];

const headerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="about" className="bg-white">
        {/* Centered Header */}
        <div className="bg-white px-4 pb-8 pt-16 sm:px-6 sm:pb-10 sm:pt-20">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto flex max-w-3xl flex-col items-center text-center"
          >
            {/* Eyebrow */}
            <motion.div
              variants={rise}
              className="flex items-center justify-center gap-3"
            >
              <span className="h-0.5 w-10 bg-yellow-400" />

              <p className="text-xs font-semibold tracking-[0.25em] text-gray-600 sm:text-sm">
                WHY CHOOSE US
              </p>

              <span className="h-0.5 w-10 bg-yellow-400" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={rise}
              className="mt-6 text-4xl font-extrabold uppercase leading-[1.08] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl"
            >
              More than just
              <span className="mt-1 block">
                a{" "}
                <span className="text-yellow-500">
                  Travel Service
                </span>
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={rise}
              className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg"
            >
              At SK Tour and Travels, we focus on comfort, safety and
              memorable journeys with well-maintained vehicles,
              professional drivers and transparent pricing.
            </motion.p>
          </motion.div>
        </div>

        {/* Cards - Design unchanged */}
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6 sm:pb-16">
          <motion.ul
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {REASONS.map(({ icon: Icon, title, text, dark }) => (
              <motion.li
                key={title}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 22,
                }}
                className={`flex items-start gap-4 rounded-xl p-5 ${
                  dark
                    ? "bg-black text-white shadow-lg shadow-black/20"
                    : "bg-white text-gray-900 shadow-lg shadow-black/5"
                }`}
              >
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${
                    dark
                      ? "border border-yellow-400 text-yellow-400"
                      : "bg-yellow-300 text-black"
                  }`}
                >
                  <Icon size={26} />
                </span>

                <div>
                  <h3 className="text-base font-bold leading-snug">
                    {title}
                  </h3>

                  <p
                    className={`mt-1.5 text-sm leading-relaxed ${
                      dark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {text}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </MotionConfig>
  );
}
