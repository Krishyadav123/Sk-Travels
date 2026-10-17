import { motion, MotionConfig } from "framer-motion";
import { ChevronRight, Phone, MapPin, Mail } from "lucide-react";

// 👉 Apni details yahan daal dena
const PHONE_NUMBER = "+919876543210"; // call link ke liye (+ ke saath)
const PHONE_DISPLAY = "+91 98765 43210";
const EMAIL = "info@sktourandtravels.in";
const ADDRESS = "Indore, Madhya Pradesh";

// 👉 Social links: "#" ki jagah apne asli page ke links daal dena
const SOCIAL_LINKS = {
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  youtube: "https://youtube.com/",
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    ADDRESS
  )}`,
};

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Popular Destinations", href: "#destinations" },
  { label: "Vehicles", href: "#fleet" },
  { label: "Customer Reviews", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

/* ---------- Social icons (inline SVG, koi extra package nahi chahiye) ---------- */
const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M13.5 21v-8h2.7l.5-3.3h-3.2V7.6c0-.9.4-1.7 1.8-1.7h1.5V3.1S15.4 3 14.2 3C11.7 3 10.2 4.5 10.2 7.2v2.5H7.5V13h2.7v8h3.3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path d="M10 9l5 3-5 3z" fill="currentColor" />
  </svg>
);

const SOCIALS = [
  { label: "Instagram", href: SOCIAL_LINKS.instagram, icon: <InstagramIcon /> },
  { label: "Facebook", href: SOCIAL_LINKS.facebook, icon: <FacebookIcon /> },
  { label: "YouTube", href: SOCIAL_LINKS.youtube, icon: <YoutubeIcon /> },
  { label: "Our location on Google Maps", href: SOCIAL_LINKS.maps, icon: <MapPin size={20} /> },
];

/* ---------- Dummy logo ----------
   Real logo aane par ye component hata ke bas ye use karna:
   <img src="/logo.png" alt="SK Tour & Travels" className="h-12 w-auto" />
*/
const Logo = () => (
  <a
    href="#home"
    aria-label="SK Tour & Travels - Home"
    className="inline-flex items-center gap-2 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
  >
    <img
      src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1792053142/Untitled_design_4_acgbj3.png"
      alt="SK Tour & Travels Logo"
        className="h-20 w-auto rounded-lg"
    />
  </a>
);

const Heading = ({ children }) => (
  <div>
    <h3 className="text-xl font-bold text-white">{children}</h3>
    <span className="mt-2 block h-1 w-10 rounded-full bg-yellow-400" />
  </div>
);

const columnsVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <MotionConfig reducedMotion="user">
      <footer className="bg-black border-t border-amber-50 text-white">
        <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:pt-20">
          <motion.div
            variants={columnsVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.3fr] lg:gap-16"
          >
            {/* ---------- Brand ---------- */}
            <motion.div variants={rise} className="sm:col-span-2 lg:col-span-1">
              <Logo />
              <p className="mt-6 max-w-md text-base leading-relaxed text-gray-300">
                Reliable travel services for family trips, corporate travel,
                outstation trips, wedding travel and more. Your comfort and
                safety is always our priority.
              </p>

              <ul className="mt-6 flex items-center gap-3">
                {SOCIALS.map(({ label, href, icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-400/60 bg-white/5 text-yellow-400 transition-colors hover:bg-yellow-400 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ---------- Quick Links ---------- */}
            <motion.nav variants={rise} aria-label="Quick links">
              <Heading>Quick Links</Heading>
              <ul className="mt-6 space-y-3">
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="group inline-flex items-center gap-2 rounded text-gray-300 transition-colors hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                    >
                      <ChevronRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* ---------- Contact ---------- */}
            <motion.div variants={rise}>
              <Heading>Contact Us</Heading>
              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="group flex items-center gap-4 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black transition-transform group-hover:scale-105">
                      <Phone size={22} />
                    </span>
                    <span>
                      <span className="block text-lg font-bold">{PHONE_DISPLAY}</span>
                      <span className="block text-sm text-gray-400">Mon - Sun, 24/7</span>
                    </span>
                  </a>
                </li>

                <li className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black">
                    <MapPin size={22} />
                  </span>
                  <span>
                    <span className="block font-semibold">{ADDRESS}</span>
                    <span className="block text-sm text-gray-400">
                      Service across MP &amp; nearby states
                    </span>
                  </span>
                </li>

                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group flex items-center gap-4 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black transition-transform group-hover:scale-105">
                      <Mail size={22} />
                    </span>
                    <span className="min-w-0">
                      <span className="block break-all font-semibold">{EMAIL}</span>
                      <span className="block text-sm text-gray-400">
                        We reply within a few hours
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* ---------- Copyright ---------- */}
          <div className="mt-14 border-t border-white/10 pt-6 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SK Tour &amp; Travels. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </MotionConfig>
  );
}