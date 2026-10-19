import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import {
  User,
  MapPin,
  Phone,
  MessageSquare,
  MessageCircle,
  MessageSquareText,
  ShieldCheck,
  Headset,
  Send,
  ArrowRight,
} from "lucide-react";

// 👉 Apna number yahan daal dena
const PHONE_NUMBER = "+919755331189"; // call link ke liye (+ ke saath)
const WHATSAPP_NUMBER = "919755331189"; // WhatsApp ke liye (+ ke bina)
const PHONE_DISPLAY = "97553 31189"; // screen par dikhane ke liye

const FEATURES = [
  { icon: MessageSquareText, label: "Quick Response" },
  { icon: ShieldCheck, label: "Best Rates & Transparent Pricing" },
  { icon: Headset, label: "Dedicated Support" },
];

const leftVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-900 placeholder:text-gray-500 transition focus:border-yellow-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400/40";

function Field({ id, label, icon: Icon, className = "", children }) {
  return (
    <div className={`relative ${className}`}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <Icon
        size={18}
        className="pointer-events-none absolute left-4 top-3.5 text-gray-700"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    city: "",
    contact: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Contact me sirf digits allow
    const clean = name === "contact" ? value.replace(/\D/g, "") : value;
    setForm((prev) => ({ ...prev, [name]: clean }));
  };

  // Submit par details WhatsApp me pre-filled message ke saath khulti hain.
  // Backend (Express/MongoDB) se jodna ho to yahan fetch("/api/enquiry") laga dena.
  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = [
      "Hello SK Tour & Travels, I have an enquiry.",
      "",
      `Name: ${form.name.trim()}`,
      `City: ${form.city.trim()}`,
      `Contact: ${form.contact}`,
    ];
    if (form.message.trim()) lines.push(`Message: ${form.message.trim()}`);
    const text = lines.join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setStatus("Thank you! WhatsApp khul raha hai, wahan se message send kar do.");
    setForm({ name: "", city: "", contact: "", message: "" });
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="contact"
        className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24"
      >
        {/* Decorations (sirf badi screen par) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-10 top-8 hidden h-24 w-36 [background-image:radial-gradient(#facc15_1.5px,transparent_1.5px)] [background-size:18px_18px] lg:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-80 right-24 hidden h-[560px] w-[560px] rounded-full border border-yellow-400/50 lg:block"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
          {/* ---------- Left ---------- */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={rise} className="flex items-center gap-3">
              <span className="h-0.5 w-12 bg-yellow-400" />
              <p className="text-xs font-medium tracking-[0.25em] text-gray-300 sm:text-sm">
                GET IN TOUCH
              </p>
            </motion.div>

            <motion.h2
              variants={rise}
              className="mt-6 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Let&apos;s Plan
              <span className="block text-yellow-400">Your Next Trip</span>
            </motion.h2>

            <motion.p
              variants={rise}
              className="mt-6 max-w-lg text-base leading-relaxed text-gray-200 sm:text-lg"
            >
              Share your travel details and our team will get back to you with
              the best options, pricing and availability.
            </motion.p>

            {/* Features */}
            <motion.ul
              variants={rise}
              className="mt-8 grid grid-cols-3 gap-2 sm:max-w-lg"
            >
              {FEATURES.map(({ icon: Icon, label }, i) => (
                <li
                  key={label}
                  className={`flex flex-col items-center gap-3 px-2 text-center ${
                    i !== 0 ? "border-l border-white/15" : ""
                  }`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-400 text-yellow-400">
                    <Icon size={22} />
                  </span>
                  <span className="text-xs font-semibold leading-tight text-white sm:text-sm">
                    {label}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* Call + WhatsApp box */}
            <motion.div
              variants={rise}
              className="mt-8 flex flex-col gap-5 rounded-2xl border border-white/15 bg-white/5 p-5 sm:flex-row sm:items-center sm:gap-0 sm:p-6"
            >
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="group flex flex-1 items-center gap-4 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black transition-transform group-hover:scale-105">
                  <Phone size={24} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    Call Us
                  </span>
                  <span className="block text-lg font-bold text-white">
                    {PHONE_DISPLAY}
                  </span>
                  <span className="block text-xs text-gray-400">
                    Mon - Sun, 24/7
                  </span>
                </span>
              </a>

              <span className="hidden h-14 w-px bg-white/15 sm:mx-5 sm:block" />

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 items-center gap-4 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black transition-transform group-hover:scale-105">
                  <MessageCircle size={26} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-yellow-400">
                    Chat on WhatsApp
                  </span>
                  <span className="block text-lg font-bold text-white">
                    {PHONE_DISPLAY}
                  </span>
                  <span className="block text-xs text-gray-400">
                    Instant reply
                  </span>
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* ---------- Form ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-3xl bg-white p-6 shadow-2xl shadow-black/50 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-10 bg-yellow-400" />
              <p className="text-xs font-medium tracking-[0.25em] text-gray-800">
                SEND AN ENQUIRY
              </p>
            </div>

            <h3 className="mt-4 text-3xl font-extrabold text-gray-950 sm:text-4xl">
              Get a <span className="text-yellow-400">Quick Quote</span>
            </h3>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              Fill in the details and we&apos;ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="name" label="Your Name" icon={User}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </Field>

                <Field id="city" label="Address (City)" icon={MapPin}>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    autoComplete="address-level2"
                    placeholder="Address (City)"
                    value={form.city}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field id="contact" label="Contact Number" icon={Phone}>
                <input
                  id="contact"
                  name="contact"
                  type="tel"
                  inputMode="numeric"
                  required
                  autoComplete="tel-national"
                  maxLength={10}
                  pattern="[6-9][0-9]{9}"
                  title="Enter a valid 10 digit mobile number"
                  placeholder="Contact Number"
                  value={form.contact}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              <Field id="message" label="Your Message" icon={MessageSquare}>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message (Optional)"
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </Field>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-yellow-400 px-6 py-4 text-base font-bold text-black transition-colors hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                <Send size={20} />
                Send Enquiry
                <ArrowRight size={20} />
              </button>

              <p
                role="status"
                aria-live="polite"
                className="min-h-5 text-center text-sm font-medium text-gray-700"
              >
                {status}
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}