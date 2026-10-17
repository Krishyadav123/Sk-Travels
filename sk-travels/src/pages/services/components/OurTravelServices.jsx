
import { motion } from "framer-motion";
import {
  Plane,
  MapPin,
  Camera,
  HeartHandshake,
  BriefcaseBusiness,
  Mountain,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Airport Transfers",
    description:
      "Enjoy convenient airport pickup and drop services with a comfortable and reliable ride.",
    icon: Plane,
    features: ["On-time pickup", "Comfortable rides"],
  },
  {
    id: 2,
    title: "Outstation Trips",
    description:
      "Travel to your favourite destinations with flexible routes and a smooth journey.",
    icon: MapPin,
    features: ["One-way & round trips", "Long-distance travel"],
  },
  {
    id: 3,
    title: "Local Sightseeing",
    description:
      "Explore the city, visit popular attractions and enjoy your day without travel worries.",
    icon: Camera,
    features: ["City tours", "Flexible itineraries"],
  },
  {
    id: 4,
    title: "Wedding Travel",
    description:
      "Make wedding transportation easier with spacious vehicles for guests and family.",
    icon: HeartHandshake,
    features: ["Guest transportation", "Group travel"],
  },
  {
    id: 5,
    title: "Corporate Travel",
    description:
      "Professional transportation for business meetings, office trips and corporate events.",
    icon: BriefcaseBusiness,
    features: ["Business trips", "Event transportation"],
  },
  {
    id: 6,
    title: "Family & Pilgrimage Tours",
    description:
      "Plan memorable family holidays and peaceful pilgrimage journeys with comfortable travel.",
    icon: Mountain,
    features: ["Family vacations", "Pilgrimage journeys"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function OurTravelServices() {
  return (
    <section
      id="our-services"
      className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      {/* Background Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-900 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            Travel Made Easy
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Our Travel{" "}
            <span className="text-yellow-500">Services</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            From airport transfers to outstation adventures, we offer
            comfortable travel solutions for every journey.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-yellow-400 hover:shadow-xl hover:shadow-gray-200/70 sm:p-7"
              >
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400 text-black transition-transform duration-300 group-hover:scale-105">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <span className="text-3xl font-black text-gray-100 transition-colors duration-300 group-hover:text-yellow-200">
                    {String(service.id).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-950 sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 flex-grow text-sm leading-7 text-gray-600">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-5 space-y-3 border-t border-gray-100 pt-5">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2.5 text-sm font-medium text-gray-700"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-yellow-500"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Enquiry Link */}
                <a
                  href="/contact"
                  aria-label={`Enquire about ${service.title}`}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-gray-950 transition-colors hover:text-yellow-600"
                >
                  Enquire Now
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 rounded-2xl border border-gray-200 bg-black px-5 py-6 text-center sm:flex-row sm:gap-6 sm:py-5"
        >
          <p className="text-sm leading-6 text-gray-600 sm:text-base">
            Have a specific travel requirement?{" "}
            <span className="font-semibold text-gray-100">
              We are here to help.
            </span>
          </p>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-yellow-300"
          >
            Plan Your Journey
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
