
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
  Clock,
  Route,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";

const benefits = [
  "A practical option for family and group journeys",
  "Suitable for business trips and corporate travel",
  "Useful for airport transfers and outstation trips",
  "Choose a vehicle based on passenger and luggage needs",
];

const travelOptions = [
  {
    icon: Users,
    title: "Family Trips",
    description:
      "Plan family outings and holidays with a vehicle suited to your group size and travel requirements.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Travel",
    description:
      "Arrange transportation for meetings, business visits and corporate travel from Indore.",
  },
  {
    icon: Heart,
    title: "Wedding & Events",
    description:
      "Consider an Innova for family functions, wedding-related travel and special occasions.",
  },
  {
    icon: MapPin,
    title: "Outstation Journeys",
    description:
      "Enquire about trips from Indore to nearby cities, tourist destinations and other locations.",
  },
];

const bookingSteps = [
  {
    number: "01",
    title: "Share your itinerary",
    description:
      "Provide your pickup location, destination, travel date and return details.",
  },
  {
    number: "02",
    title: "Confirm passenger requirements",
    description:
      "Share the number of passengers and luggage so you can choose a suitable vehicle.",
  },
  {
    number: "03",
    title: "Request a complete quotation",
    description:
      "Confirm the rental fare, billable kilometres, driver charges and any additional costs.",
  },
  {
    number: "04",
    title: "Confirm availability",
    description:
      "Check the vehicle, pickup timing and booking terms before finalising your journey.",
  },
];

const faqs = [
  {
    question: "How can I book an Innova rental in Indore?",
    answer:
      "Contact SK Tour & Travels with your pickup location, destination, travel date and passenger count. Confirm vehicle availability, pricing and booking terms before finalising your trip.",
  },
  {
    question: "Can I rent an Innova for an outstation trip?",
    answer:
      "You can enquire about outstation travel with SK Tour & Travels. Share your destination, travel dates and itinerary to check availability and receive a quotation.",
  },
  {
    question: "What determines the Innova rental price in Indore?",
    answer:
      "The rental fare may depend on the route, distance, trip duration, vehicle availability and applicable additional charges. Request a complete quotation for your specific journey.",
  },
  {
    question: "Can I book an Innova for airport pickup and drop?",
    answer:
      "Ask SK Tour & Travels about airport pickup and drop availability. Share your flight timing, pickup or drop location and passenger requirements when enquiring.",
  },
  {
    question: "Are tolls and driver charges included in the rental?",
    answer:
      "Inclusions depend on the quotation and booking terms. Confirm whether tolls, parking, driver allowance and other applicable charges are included or charged separately.",
  },
  {
    question: "How early should I book an Innova?",
    answer:
      "Booking in advance is helpful, especially for weekends, holidays and special events. Confirm availability with the travel provider before finalising your travel plans.",
  },
];

const Blog4 = () => {
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
                Innova Rental in Indore
              </span>
            </nav>

            {/* Category */}
            <div className="mb-4">
              <span className="inline-flex rounded-full border border-yellow-400/50 bg-yellow-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-900">
                Car Rental
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              Innova Rental in{" "}
              <span className="text-yellow-500">Indore</span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              Looking for Innova rental in Indore? Explore travel options
              for family outings, business journeys, airport transfers and
              outstation trips. Learn how to choose a suitable vehicle,
              understand rental charges and plan your journey with
              SK Tour &amp; Travels.
            </p>

            {/* Single Responsive Image */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm sm:mt-10">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85"
                alt="Car on the road for a comfortable journey from Indore"
                className="h-56 w-full object-cover sm:h-80 lg:h-[460px]"
                fetchPriority="high"
              />
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Choose a suitable rental vehicle for your next journey.
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
                  Why Consider Innova Rental in Indore?
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Choosing the right vehicle can make your travel planning
                  easier. Whether you are visiting another city, attending
                  a business meeting or planning a family outing, it helps
                  to select a vehicle that suits your passenger count,
                  luggage and itinerary.
                </p>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  An Innova can be an option to consider for personal and
                  group travel requirements. Before booking, confirm the
                  available vehicle configuration, passenger capacity,
                  luggage space and rental terms with your travel provider.
                </p>
              </section>

              {/* Benefits */}
              <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-7">
                <h2 className="text-xl font-extrabold text-gray-950 sm:text-2xl">
                  Benefits of Renting an Innova
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Consider these points when deciding whether an Innova
                  suits your travel plans.
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

              {/* Travel Uses */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  Where Can You Use an Innova Rental?
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Innova rental may be suitable for several travel
                  requirements. Your destination, trip duration and
                  passenger count will help determine the best option.
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

              {/* Airport and Local Travel */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  Innova for Local Travel and Airport Transfers
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  If you need transportation within Indore, share your
                  pickup point, destination and expected travel duration.
                  For airport transfers, provide your flight timing and
                  allow sufficient time for traffic and airport procedures.
                </p>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Confirm whether the booking covers a one-way transfer,
                  return journey or multiple stops. These details help
                  the provider prepare an accurate quotation for your trip.
                </p>
              </section>

              {/* Outstation Travel */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  Innova Rental for Outstation Trips
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  For outstation travel from Indore, prepare your route,
                  travel dates and expected return details before booking.
                  If your itinerary includes sightseeing or multiple stops,
                  share them in advance.
                </p>

                <div className="mt-5 rounded-xl border-l-4 border-yellow-400 bg-yellow-50 p-5">
                  <h3 className="font-bold text-gray-950">
                    Before starting your journey
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                    <li>• Confirm the complete trip fare.</li>
                    <li>• Check the billable kilometres and return terms.</li>
                    <li>• Ask about tolls, parking and driver charges.</li>
                    <li>• Confirm pickup time and planned stops.</li>
                  </ul>
                </div>
              </section>

              {/* Pricing */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  Innova Rental Price in Indore
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  The rental price can vary depending on the route, distance,
                  trip duration, vehicle availability and applicable
                  charges. Local bookings, airport transfers and outstation
                  journeys may have different pricing terms.
                </p>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  To understand the total cost, request a quotation based
                  on your actual itinerary. Ask whether the fare includes
                  driver allowance, tolls, parking, waiting time and any
                  additional kilometres.
                </p>

                <div className="mt-5 rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black">
                      <Route size={22} />
                    </div>

                    <h3 className="text-lg font-extrabold text-gray-950">
                      Request a Clear Fare Breakdown
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    Share your destination, travel dates, passenger count
                    and return requirements. Confirm all inclusions and
                    additional charges before booking.
                  </p>
                </div>
              </section>

              {/* Booking Process */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  How to Book an Innova in Indore
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Follow these steps to make your rental enquiry easier
                  and understand the booking terms before your journey.
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
                  Tips for a Smooth Journey
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Book in advance when possible, especially during busy
                  travel periods. Keep your itinerary ready and confirm
                  the pickup location, timing and contact details before
                  departure.
                </p>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  For longer trips, discuss planned breaks and expected
                  journey duration. If you have additional luggage or
                  specific passenger requirements, mention them before
                  the vehicle is confirmed.
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

              {/* Related Internal Links */}
              <section className="border-t border-gray-200 pt-6">
                <p className="text-sm leading-7 text-gray-600">
                  Looking for group travel options? Read our{" "}
                  <Link
                    to="/blog/tempo-traveller-on-rent-in-indore"
                    className="font-bold text-gray-950 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:text-yellow-600"
                  >
                    Tempo Traveller rental guide
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
                Planning Your Next Trip?
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Share your travel dates, route and passenger requirements
                when enquiring about Innova rental in Indore.
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
                  <Clock
                    size={19}
                    className="mt-0.5 shrink-0 text-yellow-600"
                  />
                  <p className="text-sm text-gray-700">
                    Confirm pickup time and trip duration.
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

export default Blog4;
