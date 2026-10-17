import { motion, MotionConfig } from "framer-motion";
import { ChevronRight } from "lucide-react";

// Default background (tumhari Cloudinary image). Kisi bhi page par `image` prop se badal sakte ho
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/dhf8eyjee/image/upload/v1792135994/Urbania_Van_and_MPV_Lineup_tfct5v.png";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/*
  Reusable top banner.

  About page:
    <PageBanner />

  Services page:
    <PageBanner
      eyebrow="OUR SERVICES"
      title="Our"
      highlight="Services"
      subtitle="Outstation, wedding, corporate and airport travel, all in complete comfort."
      breadcrumb="Services"
      note={["Every Journey", "Matters To Us"]}
    />
*/
export default function PageBanner({
  eyebrow = "ABOUT US",
  title = "About SK",
  highlight = "Tour & Travels",
  subtitle = "Comfortable, safe and reliable journeys for every trip, near or far.",
  breadcrumb = "About Us",
  homeHref = "/", // react-router use karte ho to <Link to="/"> laga dena
  image = DEFAULT_IMAGE,
  note = ["Travel", "Beyond", "Boundaries"],
}) {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative isolate w-full overflow-hidden bg-black">
        {/* Background image */}
        <motion.img
          src={image}
          alt=""
          aria-hidden="true"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover object-right"
        />

        {/* Overlays: text readable rahe, right side ki image dikhe */}
        <div className="absolute inset-0 bg-black/60 lg:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-black via-black/70 to-black/10 lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 md:pb-24 md:pt-40">
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Eyebrow */}
            <motion.div variants={rise} className="mb-5 flex items-center gap-3">
              <span className="h-0.5 w-12 bg-yellow-400" />
              <p className="text-xs font-semibold tracking-[0.25em] text-white sm:text-sm">
                {eyebrow}
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={rise}
              className="mb-5 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
            >
              <span className="block text-white">{title}</span>
              <span className="block text-yellow-400">{highlight}</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={rise}
              className="mb-8 max-w-md text-base leading-relaxed text-gray-200 sm:text-lg"
            >
              {subtitle}
            </motion.p>

            {/* Breadcrumb */}
            <motion.nav variants={rise} aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-gray-200">
                <li>
                  <a
                    href={homeHref}
                    className="rounded transition-colors hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                  >
                    Home
                  </a>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-4 w-4 text-yellow-400" />
                </li>
                <li aria-current="page" className="font-semibold text-yellow-400">
                  {breadcrumb}
                </li>
              </ol>
            </motion.nav>
          </motion.div>

          {/* Handwritten note */}
          {note?.length > 0 && (
            <motion.p
              initial={{ opacity: 0, rotate: -3, y: 20 }}
              animate={{ opacity: 1, rotate: -3, y: 0 }}
              transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
              className="absolute bottom-10 right-10 hidden text-xl italic leading-tight text-yellow-400 lg:block"
              style={{ fontFamily: "cursive" }}
              aria-hidden="true"
            >
              {note.map((line, i) => (
                <span key={line}>
                  {line}
                  {i !== note.length - 1 && <br />}
                </span>
              ))}
              <span className="mt-2 block h-1 w-24 rounded-full bg-yellow-400" />
            </motion.p>
          )}
        </div>
      </section>
    </MotionConfig>
  );
}