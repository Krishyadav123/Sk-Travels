import { motion, MotionConfig } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, Check } from "lucide-react";

// 👉 Apna number yahan daal dena (poori site ke CTA me yahi use hoga)
const PHONE_NUMBER = "+919755331189"; // call ke liye (+ ke saath)
const WHATSAPP_NUMBER = "919755331189"; // WhatsApp ke liye (+ ke bina)

const DEFAULT_HIGHLIGHTS = ["24/7 Support", "Transparent Pricing", "On-Time Pickup"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/*
  Reusable CTA. Kahin bhi bina props ke:
    <CTA />

  Custom text ke saath (jaise Fleet ya Destinations ke baad):
    <CTA
      eyebrow="PLANNING A TRIP?"
      title="Tell Us Where,"
      highlight="We'll Take You There"
      text="Share your destination and get the best quote in minutes."
      whatsappMessage="Hello SK Tour & Travels, I want a quote for my trip."
    />

  Background image ke saath:  <CTA image="/cta-bg.jpg" />
  Section ka background badalna:  <CTA className="bg-gray-50" />
*/
export default function CTA({
  eyebrow = "READY TO TRAVEL?",
  title = "Book Your Ride",
  highlight = "Today",
  text = "Call us or message on WhatsApp and get the best options, pricing and availability for your journey.",
  primaryLabel = "Call Now",
  secondaryLabel = "Chat on WhatsApp",
  whatsappMessage = "Hello SK Tour & Travels, I want to book a ride.",
  highlights = DEFAULT_HIGHLIGHTS,
  image, // optional background image
  className = "bg-white", // section ka background
}) {
  return (
    <MotionConfig reducedMotion="user">
      <section className={`px-4 py-12 sm:px-6 sm:py-16 ${className}`}>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl bg-black shadow-2xl shadow-black/30"
        >
          {/* Optional background image */}
          {image && (
            <>
              <img
                src={image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/85 to-black/50" />
            </>
          )}

          {/* Decorations */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-yellow-400/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 right-16 -z-10 hidden h-80 w-80 rounded-full border border-yellow-400/40 md:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-8 top-8 -z-10 hidden h-20 w-32 [background-image:radial-gradient(#facc15_1.5px,transparent_1.5px)] [background-size:16px_16px] lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-1 bg-yellow-400"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid items-center gap-8 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.4fr_1fr] lg:gap-12 lg:px-14"
          >
            {/* Text */}
            <div>
              <motion.div variants={rise} className="flex items-center gap-3">
                <span className="h-0.5 w-10 bg-yellow-400" />
                <p className="text-xs font-medium tracking-[0.25em] text-gray-300 sm:text-sm">
                  {eyebrow}
                </p>
              </motion.div>

              <motion.h2
                variants={rise}
                className="mt-5 text-3xl font-extrabold uppercase leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                {title}
                <span className="block text-yellow-400">{highlight}</span>
              </motion.h2>

              <motion.p
                variants={rise}
                className="mt-5 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg"
              >
                {text}
              </motion.p>

              {highlights?.length > 0 && (
                <motion.ul variants={rise} className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm font-medium text-white"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-black">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>

            {/* Buttons */}
            <motion.div variants={rise} className="flex flex-col gap-4">
              <motion.a
                href={`tel:${PHONE_NUMBER}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-between gap-3 rounded-2xl bg-yellow-400 px-6 py-4 text-black transition-colors hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span className="flex items-center gap-3">
                  <Phone size={24} strokeWidth={2.5} />
                  <span className="text-lg font-bold">{primaryLabel}</span>
                </span>
                <ArrowRight
                  size={22}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.a>

              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-white/40 bg-white/5 px-6 py-4 text-white transition-colors hover:border-yellow-400 hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle size={24} strokeWidth={2.2} />
                  <span className="text-lg font-bold">{secondaryLabel}</span>
                </span>
                <ArrowRight
                  size={22}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}