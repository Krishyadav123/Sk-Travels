
import { motion, MotionConfig } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Plane,
  Clock,
  MessageCircle,
  Phone,
} from "lucide-react";

const PHONE_NUMBER = "+919876543210";
const WHATSAPP_NUMBER = "919876543210";

const WHATSAPP_MESSAGE =
  "Hello SK Tour & Travels, I want to book a ride.";

const DESKTOP_BG =
  "https://res.cloudinary.com/dhf8eyjee/image/upload/v1792055686/Force_Urbania_Through_Golden_Mountain_Roads_ljnvkj.png";

const MOBILE_BG =
  "https://res.cloudinary.com/dhf8eyjee/image/upload/v1792060545/Golden-Hour_Urbania_Highway_Drive_eyqt3d.png";

const FEATURES = [
  { icon: Users, label: "Spacious & Comfortable" },
  { icon: ShieldCheck, label: "Safe & Reliable" },
  { icon: Plane, label: "Outstation Trips" },
  { icon: Clock, label: "24/7 Support" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="home"
        className="relative flex min-h-screen flex-col overflow-hidden bg-black lg:justify-center"
      >
        {/* Desktop background image */}
        <img
          src={DESKTOP_BG}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 hidden h-full w-full object-cover lg:block"
        />

        {/* Desktop overlay */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-black via-black/90 to-transparent lg:block" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-32 sm:px-6 sm:pt-36 lg:pb-20 lg:pt-40">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.div
              variants={item}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-yellow-400" />

              <p className="text-xs font-medium tracking-[0.2em] text-gray-300 sm:text-sm">
                <span className="text-yellow-400">
                  PREMIUM
                </span>{" "}
                TRAVEL EXPERIENCE
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={item}
              className="mt-5 text-4xl font-extrabold uppercase leading-[1.08] tracking-tight text-white sm:text-6xl lg:mt-6 lg:text-7xl"
            >
              Your Journey,
              <span className="block text-yellow-400">
                Our Priority.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-lg lg:mt-6"
            >
              Travel in comfort, safety and style with SK Tour and
              Travels. Experience premium rides for every journey,
              near or far.
            </motion.p>

            {/* Features */}
            <motion.ul
              variants={item}
              className="mt-7 grid grid-cols-2 gap-x-3 gap-y-5 sm:flex sm:flex-wrap sm:items-center sm:gap-y-4 lg:mt-8"
            >
              {FEATURES.map(({ icon: Icon, label }, index) => (
                <li
                  key={label}
                  className={`flex items-center gap-2.5 sm:pr-4 ${
                    index !== FEATURES.length - 1
                      ? "sm:border-r sm:border-white/20"
                      : ""
                  }`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-yellow-400/70 bg-white/5 text-yellow-400 sm:h-11 sm:w-11">
                    <Icon size={19} />
                  </span>

                  <span className="max-w-[110px] text-xs font-medium leading-tight text-white sm:text-[13px]">
                    {label}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* Mobile image - above action buttons */}
            <div className="relative mt-8 h-[350px] w-full overflow-hidden rounded-xl sm:h-[360px] lg:hidden">
              <img
                src={MOBILE_BG}
                alt="SK Tour and Travels vehicle on a scenic road"
                className="h-full w-full object-cover object-center"
              />

              {/* Blend image into black background */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/60 to-transparent" />
            </div>

            {/* Action buttons */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 lg:mt-10"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  WHATSAPP_MESSAGE
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-base font-semibold !text-black transition-colors hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
              >
                <MessageCircle size={20} />
                <span className="!text-black">
                  Book Your Ride
                </span>
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:border-yellow-400 hover:text-yellow-400 sm:w-auto"
              >
                <Phone size={20} />
                Call Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
