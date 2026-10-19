import { motion, MotionConfig } from "framer-motion";
import { Check, Phone, Car, Award } from "lucide-react";

// 👉 Apni image yahan daal dena (portrait / 4:5 ratio best lagegi)
const ABOUT_IMAGE = "https://placehold.co/800x960/111827/facc15?text=About+Image";

// 👉 Apna number yahan daal dena
const PHONE_NUMBER = "+919755331189";

// 👉 Ye number dummy hai, apna asli experience daal dena
const EXPERIENCE = { value: "5+", label: "Years of Experience" };

const POINTS = [
  "Well-maintained, clean and comfortable vehicles",
  "Experienced and polite professional drivers",
  "Transparent pricing with no hidden charges",
  "On-time pickup and 24/7 customer support",
];

const contentVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutUs() {
  return (
    <MotionConfig reducedMotion="user">
      {/* id "about-us" rakha hai kyunki Why Choose Us section ka id already "about" hai */}
      <section id="about-us" className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          {/* ---------- Image ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Yellow offset block */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-yellow-400 sm:-bottom-6 sm:-right-6"
            />
            <img
              src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1792152640/e2676aaf-3cb7-4120-9f95-f7e56d6fe244_mhcwf5.png"
              alt="SK Tour & Travels"
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-xl shadow-black/20"
            />

            {/* Experience badge */}
            <div className="absolute -left-3 bottom-8 flex items-center gap-3 rounded-2xl bg-black px-5 py-4 shadow-xl shadow-black/30 sm:-left-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-400 text-yellow-400">
                <Award size={24} />
              </span>
              <div className="leading-tight">
                <p className="text-2xl font-extrabold text-yellow-400">
                  {EXPERIENCE.value}
                </p>
                <p className="text-xs text-gray-300">{EXPERIENCE.label}</p>
              </div>
            </div>
          </motion.div>

          {/* ---------- Content ---------- */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={rise} className="flex items-center gap-3">
              <span className="h-0.5 w-12 bg-yellow-400" />
              <p className="text-xs font-semibold tracking-[0.25em] text-gray-800 sm:text-sm">
                WHO WE ARE
              </p>
            </motion.div>

            <motion.h2
              variants={rise}
              className="mt-5 text-3xl font-extrabold uppercase leading-[1.1] tracking-tight text-gray-950 sm:text-4xl lg:text-5xl"
            >
              Your Trusted Partner
              <span className="block text-yellow-400">For Every Journey</span>
            </motion.h2>

            <motion.p
              variants={rise}
              className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg"
            >
              SK Tour &amp; Travels is a travel service focused on making every
              journey comfortable, safe and memorable. From family trips and
              pilgrimages to weddings, corporate travel and airport transfers,
              we take care of the ride so you can enjoy the journey.
            </motion.p>

            <motion.p
              variants={rise}
              className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg"
            >
              Our well-maintained vehicles, experienced drivers and transparent
              per-km pricing mean no surprises, just a smooth trip from pickup
              to drop.
            </motion.p>

            {/* Checklist */}
            <motion.ul variants={rise} className="mt-6 space-y-3">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-gray-800 sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* Buttons */}
            <motion.div
              variants={rise}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-7 py-3.5 text-base font-semibold text-black transition-colors hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                <Phone size={20} strokeWidth={2.5} />
                Call Now
              </a>
              <a
                href="#fleet"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-900 px-7 py-3.5 text-base font-semibold text-gray-900 transition-colors hover:bg-black hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
              >
                <Car size={20} />
                Explore Our Fleet
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}