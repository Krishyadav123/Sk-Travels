
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
  Luggage,
  Route,
  Clock,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";

const benefits = [
  "Travel together in one vehicle",
  "Suitable for family and group outings",
  "Useful for weddings and corporate events",
  "Convenient for planned outstation journeys",
];

const travelOptions = [
  {
    icon: Users,
    title: "Family & Group Trips",
    description:
      "Plan family holidays, reunions and group outings with a vehicle suited to your passenger count.",
  },
  {
    icon: Heart,
    title: "Wedding Transportation",
    description:
      "Arrange group transportation for wedding guests, relatives and family functions.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Travel",
    description:
      "Coordinate transportation for company outings, business visits and corporate events.",
  },
  {
    icon: MapPin,
    title: "Outstation Trips",
    description:
      "Explore rental options for journeys from Indore to nearby cities and tourist destinations.",
  },
];

const bookingSteps = [
  {
    number: "01",
    title: "Share your travel plan",
    description:
      "Provide your pickup point, destination, travel dates and expected return time.",
  },
  {
    number: "02",
    title: "Confirm passenger count",
    description:
      "Share the number of passengers and luggage requirements to identify a suitable vehicle.",
  },
  {
    number: "03",
    title: "Check the complete fare",
    description:
      "Ask about kilometre limits, driver charges, tolls, parking and other applicable costs.",
  },
  {
    number: "04",
    title: "Confirm your booking",
    description:
      "Check vehicle availability, pickup timing and booking terms before finalising your trip.",
  },
];

const faqs = [
  {
    question: "How can I book a Tempo Traveller on rent in Indore?",
    answer:
      "Contact SK Tour & Travels with your travel dates, pickup point, destination and passenger count. Confirm vehicle availability, pricing and booking terms before finalising your trip.",
  },
  {
    question: "Is a Tempo Traveller suitable for family trips?",
    answer:
      "A Tempo Traveller can be suitable for family holidays and group journeys. Select a vehicle configuration that accommodates your passengers and luggage comfortably.",
  },
  {
    question: "Can I rent a Tempo Traveller for an outstation trip?",
    answer:
      "You can enquire about outstation travel with SK Tour & Travels. Share your destination, travel dates and itinerary to check availability and pricing.",
  },
  {
    question: "What determines Tempo Traveller rental charges in Indore?",
    answer:
      "The fare may depend on the vehicle configuration, travel distance, trip duration, route and applicable additional charges. Request a complete quotation before booking.",
  },
  {
    question: "How many passengers can a Tempo Traveller accommodate?",
    answer:
      "Seating capacity depends on the specific vehicle configuration. Confirm the available seating layout and permitted passenger capacity before making your booking.",
  },
  {
    question: "Are tolls and driver charges included in the rental?",
    answer:
      "Inclusions vary by quotation and booking terms. Ask whether tolls, parking, driver allowance and other applicable charges are included or payable separately.",
  },
];

const Blog3 = () => {
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
                to="/blogs"
                className="transition hover:text-yellow-600"
              >
                Blogs
              </Link>

              <ChevronRight size={15} />

              <span className="font-medium text-gray-800">
                Tempo Traveller on Rent in Indore
              </span>
            </nav>

            {/* Category */}
            <div className="mb-4">
              <span className="inline-flex rounded-full border border-yellow-400/50 bg-yellow-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-900">
                Vehicle Rental
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              Tempo Traveller on Rent in{" "}
              <span className="text-yellow-500">Indore</span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              Planning a group journey from Indore? Explore Tempo Traveller
              rental options for family holidays, weddings, corporate
              outings and outstation trips. Learn what to check before
              choosing a vehicle with SK Tour &amp; Travels.
            </p>

            {/* Single Responsive Image */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm sm:mt-10">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=85"
                alt="Vehicle travel on a road for a group journey from Indore"
                className="h-56 w-full object-cover sm:h-80 lg:h-[460px]"
                fetchPriority="high"
              />
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Choose a suitable vehicle for your group travel requirements.
            </p>
          </div>
        </section>

        {/* Article Content */}
        <article className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
            {/* Main Article */}
            <div className="min-w-0">
              {/* Introduction */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold leading-tight text-gray-950 sm:text-3xl">
                  Why Choose a Tempo Traveller in Indore?
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Organising transportation for a large family or group can
                  take time, especially when everyone needs to reach the
                  same destination. A suitable group vehicle can make
                  planning easier by allowing passengers to travel together.
                </p>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Tempo Traveller rental may be worth considering for family
                  holidays, wedding functions, corporate outings and
                  outstation journeys. The right choice depends on your
                  passenger count, luggage requirements, route and budget.
                </p>
              </section>

              {/* Benefits */}
              <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-7">
                <h2 className="text-xl font-extrabold text-gray-950 sm:text-2xl">
                  Benefits of Renting a Tempo Traveller
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Here are some practical reasons to consider a group
                  vehicle for your next journey.
                </p>

                <ul className="mt-5 space-y-4">
                  {benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-700 sm:text-base"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-yellow-500"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Travel Options */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  Where Can You Use a Tempo Traveller?
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  A Tempo Traveller can suit different group travel needs.
                  Consider these common uses when planning your next trip
                  from Indore.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {travelOptions.map((item) => {
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

              {/* Capacity */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  How to Choose the Right Seating Capacity
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Tempo Travellers are available in different seating
                  configurations. The suitable option for your trip depends
                  on the number of passengers, luggage and the length of
                  the journey.
                </p>

                <div className="mt-5 rounded-xl border-l-4 border-yellow-400 bg-yellow-50 p-5">
                  <h3 className="font-bold text-gray-950">
                    Before selecting your vehicle
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                    <li>• Confirm the actual seating configuration.</li>
                    <li>• Share the total number of passengers.</li>
                    <li>• Discuss luggage and storage requirements.</li>
                    <li>• Check the vehicle's permitted passenger capacity.</li>
                  </ul>
                </div>
              </section>

              {/* Pricing */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  Tempo Traveller Rental Price in Indore
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  The rental cost may vary according to seating capacity,
                  travel distance, trip duration, destination and booking
                  terms. One-way trips and round trips may also be priced
                  differently.
                </p>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  To estimate your budget accurately, ask for a quotation
                  based on your complete itinerary. Confirm the billable
                  distance and whether driver allowance, tolls, parking
                  and other charges are included.
                </p>

                <div className="mt-5 rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black">
                      <Luggage size={22} />
                    </div>

                    <h3 className="text-lg font-extrabold text-gray-950">
                      Get a Clear Quotation
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    Share your destination, travel dates, passenger count
                    and expected return details. Ask for the complete fare
                    breakdown before confirming your booking.
                  </p>
                </div>
              </section>

              {/* Booking Process */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  How to Book a Tempo Traveller in Indore
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Keep your travel details ready before contacting a rental
                  provider. These steps can help you compare options and
                  confirm your booking with clarity.
                </p>

                <div className="mt-6 space-y-5">
                  {bookingSteps.map((step) => (
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
                  Tips for a Comfortable Group Journey
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Plan your departure time, keep your itinerary ready and
                  allow extra time for traffic. For longer journeys, discuss
                  planned stops, rest breaks and the expected travel
                  duration with your provider.
                </p>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  If you are travelling for a wedding or corporate event,
                  arrange transportation early and confirm pickup locations
                  with all passengers. Always verify vehicle availability
                  before making final plans.
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

              {/* Related Blogs */}
              <section className="border-t border-gray-200 pt-6">
                <p className="text-sm leading-7 text-gray-600">
                  Looking for other group travel options? Read our{" "}
                  <Link
                    to="/blog/force-urbania-rental-in-indore"
                    className="font-bold text-gray-950 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:text-yellow-600"
                  >
                    Force Urbania rental guide
                  </Link>{" "}
                  or explore our{" "}
                  <Link
                    to="/services"
                    className="font-bold text-gray-950 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:text-yellow-600"
                  >
                    travel services
                  </Link>
                  .
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
                Share your route, travel dates and passenger count when
                enquiring about Tempo Traveller rental in Indore.
              </p>

              <div className="mt-5 space-y-4 border-t border-gray-200 pt-5">
                <div className="flex items-start gap-3">
                  <CalendarCheck
                    size={19}
                    className="mt-0.5 shrink-0 text-yellow-600"
                  />
                  <p className="text-sm text-gray-700">
                    Confirm dates and availability.
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
                Pricing and vehicle availability are subject to confirmation.
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

export default Blog3;
