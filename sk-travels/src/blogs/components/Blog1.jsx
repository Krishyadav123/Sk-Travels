
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  BriefcaseBusiness,
  Heart,
  MapPin,
  CalendarCheck,
  CarFront,
  ChevronRight,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";

const features = [
  "Comfortable group travel",
  "Suitable for family trips and weddings",
  "Useful for corporate travel and events",
  "A practical option for outstation journeys",
];

const travelUses = [
  {
    icon: Users,
    title: "Family & Group Trips",
    description:
      "Travel together in one vehicle and make your family outing or group journey easier to plan.",
  },
  {
    icon: Heart,
    title: "Wedding Transportation",
    description:
      "Arrange transportation for wedding guests, relatives and other group travel requirements.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Travel",
    description:
      "Plan transportation for office outings, business visits, meetings and corporate events.",
  },
  {
    icon: MapPin,
    title: "Outstation Journeys",
    description:
      "Consider a Force Urbania for trips from Indore to nearby cities, destinations and tourist places.",
  },
];

const faqs = [
  {
    question: "How can I book a Force Urbania in Indore?",
    answer:
      "Contact SK Tour & Travels with your travel date, pickup location, destination and number of passengers. Confirm availability, fare and trip terms before booking.",
  },
  {
    question: "Is Force Urbania suitable for family trips?",
    answer:
      "Force Urbania can be a suitable option for family outings and group journeys. Choose the vehicle configuration according to your passenger count and luggage requirements.",
  },
  {
    question: "Can I rent a Force Urbania for an outstation trip?",
    answer:
      "You can enquire about Force Urbania for outstation travel with SK Tour & Travels. Share your destination, journey dates and trip plan to check availability and pricing.",
  },
  {
    question: "What affects the Force Urbania rental price?",
    answer:
      "The total fare may depend on the travel distance, trip duration, route, vehicle configuration and applicable trip charges. Confirm the complete quotation before booking.",
  },
  {
    question: "What details should I share before booking?",
    answer:
      "Share your pickup point, destination, travel date, return date if applicable, passenger count and luggage requirements. This helps the travel provider suggest a suitable arrangement.",
  },
];

const Blog1 = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Article Header */}
        <section className="px-4 pb-8 pt-32 sm:px-6 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-5xl">
            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500"
            >
              <Link to="/" className="transition hover:text-yellow-600">
                Home
              </Link>

              <ChevronRight size={15} />

              <Link
                to="/blog"
                className="transition hover:text-yellow-600"
              >
                Blogs
              </Link>

              <ChevronRight size={15} />

              <span className="font-medium text-gray-800">
                Force Urbania Rental in Indore
              </span>
            </nav>

            {/* Category */}
            <div className="mb-4">
              <span className="inline-flex rounded-full border border-yellow-400/50 bg-yellow-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-900">
                Travel Guide
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              Force Urbania Rental in{" "}
              <span className="text-yellow-500">Indore</span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              Looking for a comfortable vehicle for your next group trip?
              Explore Force Urbania rental in Indore for family journeys,
              weddings, corporate travel and outstation trips with SK Tour
              &amp; Travels.
            </p>

            {/* Article Image - Single Image */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm sm:mt-10">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1600&q=85"
                alt="Vehicle on the road for a comfortable group travel journey"
                className="h-56 w-full object-cover sm:h-80 lg:h-[460px]"
                fetchPriority="high"
              />
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Plan your group travel from Indore with the right vehicle and
              a confirmed booking.
            </p>
          </div>
        </section>

        {/* Article Content */}
        <article className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
            {/* Main Article */}
            <div className="min-w-0">
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold leading-tight text-gray-950 sm:text-3xl">
                  Why Choose Force Urbania Rental in Indore?
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  When several people are travelling together, arranging
                  transportation can become difficult. Booking separate cars
                  may require extra coordination, while a suitable group
                  vehicle can help everyone travel together.
                </p>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Force Urbania is an option worth considering for group
                  journeys, family holidays, wedding transportation and
                  business travel. Before booking, check the available
                  seating configuration, luggage space and trip requirements
                  to make sure the vehicle suits your plans.
                </p>
              </section>

              {/* Key Benefits */}
              <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-7">
                <h2 className="text-xl font-extrabold text-gray-950 sm:text-2xl">
                  Benefits of Renting a Force Urbania
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Here are a few reasons travellers may consider this vehicle
                  for their next journey:
                </p>

                <ul className="mt-5 space-y-4">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-700 sm:text-base"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-yellow-500"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Travel Uses */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  Where Can You Use a Force Urbania?
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Your travel purpose, passenger count and route will help
                  determine whether Force Urbania is the right choice. Here
                  are some common travel requirements to consider.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {travelUses.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black">
                          <Icon size={22} />
                        </div>

                        <h3 className="mt-4 text-lg font-bold text-gray-950">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Pricing Guide */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  Force Urbania Rental Price in Indore
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  The cost of renting a Force Urbania can vary according to
                  the distance, duration of the trip, route, vehicle
                  configuration and applicable charges. One-way journeys
                  and round trips may also have different pricing terms.
                </p>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Rather than relying on an estimated online rate, ask for
                  a complete quotation based on your specific itinerary.
                  Confirm what is included in the fare and whether any
                  additional charges apply.
                </p>

                <div className="mt-5 rounded-xl border-l-4 border-yellow-400 bg-yellow-50 p-5">
                  <h3 className="font-bold text-gray-950">
                    Before confirming your booking
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                    <li>• Confirm the total trip fare.</li>
                    <li>• Ask about included kilometres and extra charges.</li>
                    <li>• Confirm driver charges and applicable tolls.</li>
                    <li>• Check pickup time, trip duration and return terms.</li>
                  </ul>
                </div>
              </section>

              {/* Booking Process */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  How to Book a Force Urbania in Indore
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Booking becomes easier when you have your travel details
                  ready. Follow these steps before confirming your vehicle.
                </p>

                <div className="mt-6 space-y-5">
                  {[
                    {
                      number: "01",
                      title: "Share your travel plan",
                      description:
                        "Provide your pickup location, destination, travel date and expected return date.",
                    },
                    {
                      number: "02",
                      title: "Confirm passenger requirements",
                      description:
                        "Mention the number of passengers and luggage so the appropriate configuration can be checked.",
                    },
                    {
                      number: "03",
                      title: "Request a complete quotation",
                      description:
                        "Confirm the total fare, trip terms, included services and any additional charges.",
                    },
                    {
                      number: "04",
                      title: "Confirm availability",
                      description:
                        "Finalise the booking after checking vehicle availability, pickup timing and payment terms.",
                    },
                  ].map((step) => (
                    <div
                      key={step.number}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 font-extrabold text-black">
                        {step.number}
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-950">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm leading-7 text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Travel Tips */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  Tips for a Smooth Group Journey
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Plan your pickup time in advance, keep your itinerary
                  ready and allow extra time for traffic or unexpected
                  delays. For longer journeys, discuss planned stops and
                  the expected travel duration before departure.
                </p>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  If you are travelling for a wedding, office event or
                  family function, try to book early. Share any special
                  requirements in advance and confirm the details with
                  your travel provider before the journey.
                </p>
              </section>

              {/* FAQs */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  Frequently Asked Questions
                </h2>

                <div className="mt-6 space-y-3">
                  {faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-xl border border-gray-200 bg-white p-5 open:border-yellow-400"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-gray-950 marker:hidden">
                        <span>{faq.question}</span>

                        <span className="text-xl text-yellow-600 transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>

                      <p className="mt-4 text-sm leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Related Internal Link */}
              <section className="border-t border-gray-200 pt-6">
                <p className="text-sm leading-7 text-gray-600">
                  Looking for other travel options? Explore our{" "}
                  <Link
                    to="/services"
                    className="font-bold text-gray-950 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:text-yellow-600"
                  >
                    travel services
                  </Link>{" "}
                  to find a suitable option for your journey.
                </p>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6 lg:sticky lg:top-24">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black">
                <CarFront size={25} />
              </div>

              <h2 className="mt-4 text-xl font-extrabold text-gray-950">
                Planning a Group Trip?
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Keep your travel dates, destination and passenger count
                ready when enquiring about Force Urbania rental in Indore.
              </p>

              <div className="mt-5 space-y-4 border-t border-gray-200 pt-5">
                <div className="flex items-start gap-3">
                  <CalendarCheck
                    size={19}
                    className="mt-0.5 shrink-0 text-yellow-600"
                  />
                  <p className="text-sm text-gray-700">
                    Confirm travel dates and availability.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Users
                    size={19}
                    className="mt-0.5 shrink-0 text-yellow-600"
                  />
                  <p className="text-sm text-gray-700">
                    Share passenger and luggage details.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-yellow-600"
                  />
                  <p className="text-sm text-gray-700">
                    Confirm the final fare before booking.
                  </p>
                </div>
              </div>

              <Link
                to="/services"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 px-4 py-3 text-sm font-bold text-black transition hover:bg-yellow-300"
              >
                Explore Services
                <ArrowRight size={17} />
              </Link>

              <p className="mt-3 text-center text-xs leading-5 text-gray-500">
                Vehicle availability and pricing are subject to confirmation.
              </p>
            </aside>
          </div>
        </article>

        {/* Existing CTA Component */}
        <CTA />
      </main>

      <Footer />
    </>
  );
};

export default Blog1;
