
import { motion, MotionConfig } from "framer-motion";
import {
  Target,
  Eye,
  Check,
  ArrowUpRight,
  Compass,
} from "lucide-react";

const ITEMS = [
  {
    icon: Target,
    number: "01",
    title: "Our Mission",
    text: "To provide safe, reliable and comfortable travel at fair prices, every single time.",
    points: [
      "Safe and comfortable rides on every trip",
      "Fair, transparent per-km pricing",
      "Punctual and courteous service",
    ],
    featured: true,
  },
  {
    icon: Eye,
    number: "02",
    title: "Our Vision",
    text: "To be the most trusted travel partner for families and businesses across the region.",
    points: [
      "Trusted by families, groups and businesses",
      "A growing fleet for every kind of journey",
      "Setting the standard for travel service",
    ],
    featured: false,
  },
];

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function MissionVision() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="mission-vision"
        className="overflow-hidden bg-black py-10 sm:py-12 lg:py-14"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Compact Section Heading */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div
              variants={rise}
              className="flex items-center justify-center gap-3"
            >
              <span className="h-0.5 w-8 bg-yellow-400" />

              <span className="text-xs font-bold tracking-[0.22em] text-gray-300">
                OUR PURPOSE
              </span>

              <span className="h-0.5 w-8 bg-yellow-400" />
            </motion.div>

            <motion.h2
              variants={rise}
              className="mt-3 text-2xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              Driven by Purpose,
              <span className="block text-yellow-400">
                Guided by Trust.
              </span>
            </motion.h2>

            <motion.p
              variants={rise}
              className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-300"
            >
              Our purpose is to make every journey comfortable,
              dependable and memorable.
            </motion.p>
          </motion.div>

          {/* Mission & Vision Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-7 grid gap-4 md:grid-cols-2 lg:mt-9 lg:gap-10"
          >
            {ITEMS.map(
              ({
                icon: Icon,
                number,
                title,
                text,
                points,
                featured,
              }) => (
                <motion.article
                  key={title}
                  variants={cardVariants}
                  whileHover={{ y: -3 }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 24,
                  }}
                  className={`group relative overflow-hidden rounded-2xl p-5 sm:p-6 lg:p-10 ${
                    featured
                      ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/10"
                      : "border border-gray-200 bg-white text-gray-950 shadow-lg shadow-black/10"
                  }`}
                >
                  {/* Decorative Number */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute right-4 top-1 select-none text-6xl font-black tracking-tighter opacity-[0.08] sm:text-7xl ${
                      featured ? "text-black" : "text-black"
                    }`}
                  >
                    {number}
                  </span>

                  {/* Icon & Title */}
                  <div className="relative flex items-center gap-3">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                        featured
                          ? "bg-black text-yellow-400"
                          : "bg-yellow-400 text-black"
                      }`}
                    >
                      <Icon size={24} strokeWidth={1.8} />
                    </span>

                    <div>
                      <p
                        className={`text-[10px] font-bold tracking-[0.2em] ${
                          featured ? "text-black/65" : "text-gray-500"
                        }`}
                      >
                        {featured
                          ? "WHAT WE DO"
                          : "WHERE WE'RE GOING"}
                      </p>

                      <h3 className="mt-0.5 text-xl font-extrabold tracking-tight sm:text-2xl">
                        {title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`relative mt-4 max-w-lg text-sm leading-6 ${
                      featured ? "text-black/80" : "text-gray-600"
                    }`}
                  >
                    {text}
                  </p>

                  {/* Divider */}
                  <div
                    className={`mt-4 h-px w-full ${
                      featured ? "bg-black/15" : "bg-gray-200"
                    }`}
                  />

                  {/* Points */}
                  <ul className="mt-4 space-y-2.5">
                    {points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3.5"
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            featured
                              ? "bg-black text-yellow-400"
                              : "bg-yellow-400 text-black"
                          }`}
                        >
                          <Check size={12} strokeWidth={3} />
                        </span>

                        <span
                          className={`text-sm leading-5 ${
                            featured
                              ? "font-medium text-black/85"
                              : "font-medium text-gray-700"
                          }`}
                        >
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-black/20 transition-all duration-300 ${
                      featured
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </motion.article>
              )
            )}
          </motion.div>

          {/* Compact Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="mt-5 flex items-center justify-center gap-2 text-center"
          >
            <Compass
              size={16}
              className="shrink-0 text-yellow-400"
            />

            <p className="text-xs font-medium text-gray-400">
              Your destination matters. Your comfort matters more.
            </p>

            <ArrowUpRight
              size={15}
              className="shrink-0 text-yellow-400"
            />
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
