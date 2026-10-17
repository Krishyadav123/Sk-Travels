import { useState, useEffect } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import {
  Quote,
  Star,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Users,
  ThumbsUp,
  Trophy,
} from "lucide-react";

// 👉 Ye reviews dummy hain. Live site par asli customers ke reviews (unki permission se) daal dena
const TESTIMONIALS = [
  {
    initials: "RS",
    name: "Rahul Sharma",
    location: "Indore",
    rating: 5,
    text: "Booked the Force Urbania for our family trip to Ujjain and Omkareshwar. The vehicle was spotless and spacious, and the driver was punctual and drove very safely.",
  },
  {
    initials: "PK",
    name: "Pooja Khandelwal",
    location: "Ujjain",
    rating: 5,
    text: "Airport pickup was right on time even for a late-night flight. The driver was polite, helped with the luggage and the car was very comfortable.",
  },
  {
    initials: "AM",
    name: "Amit Mishra",
    location: "Bhopal",
    rating: 5,
    text: "Took an Ertiga for a 3-day Maheshwar trip. Per-km pricing was clear from the start and there were no hidden charges at the end. Great value for money.",
  },
  {
    initials: "SV",
    name: "Sneha Verma",
    location: "Dewas",
    rating: 5,
    text: "We arranged Innova Crysta cars for our wedding guests. Every pickup was on schedule and the drivers were professional. Made our function stress-free.",
  },
  {
    initials: "VK",
    name: "Vikas Kumar",
    location: "Indore",
    rating: 5,
    text: "Travelled to Ayodhya Ram Mandir with my parents. The driver knew the route well and planned comfortable stops for them. A smooth and memorable journey.",
  },
  {
    initials: "NA",
    name: "Neha Agrawal",
    location: "Ratlam",
    rating: 5,
    text: "Needed a last-minute booking late at night. Their 24/7 support picked up immediately and the cab reached us on time. Will definitely book again.",
  },
];

// 👉 Ye numbers bhi dummy hain, apne asli numbers daal dena
const STATS = [
  { icon: Users, value: "1000+", label: "Happy Travellers" },
  { icon: Trophy, value: "5+ Years", label: "of Experience" },
  { icon: Star, value: "4.8/5", label: "Customer Rating" },
  { icon: ThumbsUp, value: "95%", label: "Would Recommend" },
];

const AUTOPLAY_MS = 3000;

const headerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function TestimonialCard({ t }) {
  return (
    <div className="flex h-full min-h-[270px] flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-lg shadow-black/5 sm:min-h-[290px] sm:p-6">
      {/* Top */}
      <div className="mb-4 flex items-center justify-between">
        <Quote className="h-7 w-7 shrink-0 fill-yellow-300 text-yellow-300 sm:h-8 sm:w-8" />
        <div
          className="flex items-center gap-0.5"
          role="img"
          aria-label={`${t.rating} out of 5 stars`}
        >
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4"
            />
          ))}
        </div>
      </div>

      {/* Review */}
      <p className="flex-1 text-sm leading-relaxed text-gray-700 sm:text-base">
        {t.text}
      </p>

      {/* User */}
      <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4 sm:mt-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-black">
          {t.initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-gray-900">{t.name}</p>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <MapPin className="h-3 w-3 shrink-0 text-yellow-500" />
            {t.location}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(3);
  const prefersReducedMotion = useReducedMotion();

  const total = TESTIMONIALS.length;
  const maxIndex = total - cardsVisible; // last position jahan tak slide hoga

  /* Responsive cards: mobile 1, tablet 2, desktop 3 */
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCardsVisible(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* Screen size badalne par index valid range me rakho */
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const goNext = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const goPrev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  /* Autoplay (hover/touch par ruk jata hai, reduced-motion me band) */
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const id = setTimeout(
      () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
      AUTOPLAY_MS
    );
    return () => clearTimeout(id);
  }, [index, isPaused, maxIndex, prefersReducedMotion]);

  const arrowClass =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-yellow-400 transition-colors hover:bg-yellow-400 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 active:scale-95 sm:h-10 sm:w-10 md:h-11 md:w-11";

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="testimonials"
        className="relative w-full overflow-hidden bg-white px-4 py-14 sm:px-6 md:px-8 md:py-20"
      >
        <div className="relative mx-auto max-w-7xl">
          {/* ================= HEADER ================= */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative mx-auto mb-10 max-w-2xl text-center md:mb-12"
          >
            <motion.div
              variants={rise}
              className="flex items-center justify-center gap-3"
            >
              <span className="h-0.5 w-10 bg-yellow-400" />
              <p className="text-xs font-semibold tracking-[0.25em] text-gray-800 sm:text-sm">
                CUSTOMER TESTIMONIALS
              </p>
              <span className="h-0.5 w-10 bg-yellow-400" />
            </motion.div>

            <motion.h2
              variants={rise}
              className="mt-5 text-3xl font-extrabold uppercase leading-[1.1] tracking-tight text-gray-950 sm:text-4xl md:text-5xl"
            >
              What Our{" "}
              <span className="text-yellow-400">Customers Say</span>
            </motion.h2>

            <motion.p
              variants={rise}
              className="mt-4 px-2 text-sm leading-relaxed text-gray-600 sm:text-base"
            >
              Real feedback from happy travellers. Your comfort and
              satisfaction on every journey is our biggest motivation.
            </motion.p>

            {/* Handwritten note */}
            <p
              className="absolute -top-6 right-[-170px] hidden rotate-[8deg] text-lg italic leading-tight text-gray-900 xl:block"
              style={{ fontFamily: "cursive" }}
              aria-hidden="true"
            >
              Trusted
              <br />
              by Travellers
              <br />
              &amp; Families
              <span className="mt-2 block h-1 w-24 rounded-full bg-yellow-400" />
            </p>
          </motion.div>

          {/* ================= CAROUSEL ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex items-center gap-2 sm:gap-3 md:gap-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <button
              type="button"
              onClick={goPrev}
              className={arrowClass}
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <div className="min-w-0 flex-1 overflow-hidden">
              <motion.div
                className="flex"
                style={{ width: `${(total / cardsVisible) * 100}%` }}
                animate={{ x: `-${index * (100 / total)}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {TESTIMONIALS.map((t) => (
                  <div
                    key={t.name}
                    className="px-1.5 py-3 sm:px-2 md:px-3"
                    style={{ width: `${100 / total}%` }}
                  >
                    <TestimonialCard t={t} />
                  </div>
                ))}
              </motion.div>
            </div>

            <button
              type="button"
              onClick={goNext}
              className={arrowClass}
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </motion.div>

          {/* ================= DOTS ================= */}
          <div className="mt-6 flex items-center justify-center gap-2 sm:mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={`rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 ${
                  i === index
                    ? "h-2 w-6 bg-yellow-400 sm:h-2.5 sm:w-7"
                    : "h-2 w-2 bg-gray-300 hover:bg-gray-400 sm:h-2.5 sm:w-2.5"
                }`}
              />
            ))}
          </div>

          {/* ================= STATS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-10 rounded-2xl bg-black px-4 py-6 sm:px-6 md:px-10"
          >
            <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-6 lg:grid-cols-4 lg:gap-0">
              {STATS.map(({ icon: Icon, value, label }, i) => (
                <li
                  key={label}
                  className={`flex min-w-0 items-center justify-center gap-3 sm:gap-4 lg:justify-start ${
                    i !== 0 ? "lg:border-l lg:border-white/15 lg:pl-6" : ""
                  }`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-yellow-400 text-yellow-400 sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <div className="min-w-0">
                    <p className="whitespace-nowrap text-base font-extrabold text-white sm:text-xl">
                      {value}
                    </p>
                    <p className="whitespace-nowrap text-[11px] text-gray-400 sm:text-sm">
                      {label}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}