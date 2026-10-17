
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
  Car,
  CalendarCheck,
  ShieldCheck,
  Route,
  Wallet,
  Landmark,
  Users,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";

const Blog9 = () => {
  const fareFactors = [
    "Vehicle category and model",
    "One-way or round-trip booking",
    "Total distance and trip duration",
    "Waiting time and additional stops",
    "Driver allowance, if applicable",
    "Tolls, parking, and other applicable charges",
  ];

  const bookingSteps = [
    {
      title: "Choose your travel date",
      description:
        "Decide when you want to travel from Indore to Ujjain and whether you need a return journey.",
    },
    {
      title: "Select your vehicle",
      description:
        "Choose a sedan, SUV, or another available vehicle according to passenger count and luggage.",
    },
    {
      title: "Request a fare quotation",
      description:
        "Share your pickup location, destination, trip type, and planned stops to get a route-specific quote.",
    },
    {
      title: "Confirm the booking",
      description:
        "Review the complete fare, pickup time, inclusions, payment terms, and return arrangements before confirming.",
    },
  ];

  const faqs = [
    {
      question: "How much is a taxi from Indore to Ujjain?",
      answer:
        "The fare depends on the vehicle, pickup location, one-way or round-trip booking, and applicable charges. Request a current quotation for your travel date instead of relying on a general estimate.",
    },
    {
      question: "Can I book a one-way taxi from Indore to Ujjain?",
      answer:
        "You can enquire about a one-way taxi. Availability and pricing depend on the operator's route and booking terms, so confirm the total fare before booking.",
    },
    {
      question: "Can I book a round-trip taxi for Ujjain Mahakaleshwar Temple?",
      answer:
        "You can enquire about a round-trip cab for a temple visit. Share your pickup time, expected return time, and any additional stops so the operator can quote accordingly.",
    },
    {
      question: "Which car is suitable for an Indore to Ujjain trip?",
      answer:
        "A sedan may suit a small group, while an SUV or Innova can offer more space. Larger groups can enquire about a Tempo Traveller or Force Urbania. Confirm seating capacity and availability before booking.",
    },
    {
      question: "Are tolls and driver charges included in the taxi fare?",
      answer:
        "Inclusions vary by operator. Ask whether tolls, parking, driver allowance, waiting time, and applicable taxes are included in the quoted fare.",
    },
    {
      question: "Should I book my Ujjain taxi in advance?",
      answer:
        "Advance booking is recommended, particularly on weekends, holidays, and busy religious occasions. Confirm your pickup time and vehicle availability in advance.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gray-50 pt-32 sm:pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-5">
            <Link to="/" className="hover:text-yellow-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/blogs"
              className="hover:text-yellow-600 transition-colors"
            >
              Blogs
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">
              Indore to Ujjain Taxi Fare
            </span>
          </div>

          <div className="max-w-4xl lg:max-w-5xl">
            <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              <Route size={16} />
              Taxi Fare Guide
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-5">
              Indore to Ujjain Taxi Fare: Complete Cab Booking Guide
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-8">
              Planning a trip from Indore to Ujjain? Understand what affects
              taxi fares, compare vehicle options, and learn how to arrange a
              convenient one-way or round-trip cab for your journey.
            </p>

            <div className="flex flex-wrap gap-5 mt-6 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <Clock size={17} />
                6–8 min read
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={17} />
                Indore to Ujjain
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article and Sidebar */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:justify-center lg:gap-10 xl:grid-cols-[800px_320px] xl:gap-12">

            {/* Main Article */}
            <article className="lg:col-span-2 min-w-0">

              {/* Replace this generic image with an actual Indore-Ujjain travel photo */}
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=85"
                alt="Taxi car for travel from Indore to Ujjain"
                className="w-full h-56 sm:h-80 lg:h-[460px] object-cover rounded-2xl mb-8 border border-gray-200 shadow-sm"
                loading="eager"
              />

              <div className="space-y-9 text-gray-700 leading-8">

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Travel from Indore to Ujjain by Taxi
                  </h2>

                  <p className="mb-4">
                    Ujjain is a popular destination for religious visits,
                    family trips, and sightseeing from Indore. Travellers
                    visiting Mahakaleshwar Temple or other local attractions
                    may prefer a private cab for flexible pickup and travel
                    arrangements.
                  </p>

                  <p>
                    Booking a taxi allows you to plan your departure, choose a
                    suitable vehicle, and discuss additional stops according
                    to your itinerary. The final fare depends on your exact
                    pickup point, destination, vehicle, and booking conditions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    What Affects the Indore to Ujjain Taxi Fare?
                  </h2>

                  <p className="mb-5">
                    There is no single fare for every taxi booking. The price
                    can change depending on the type of journey and the
                    service provider's pricing policy.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {fareFactors.map((factor, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 bg-gray-50"
                      >
                        <CheckCircle2
                          size={21}
                          className="text-yellow-600 shrink-0 mt-1"
                        />
                        <p className="text-sm sm:text-base leading-7">
                          {factor}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-5">
                    Always request a complete quotation for your specific
                    journey. Confirm whether the fare includes return travel,
                    waiting time, tolls, parking, and driver allowance.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    One-Way vs Round-Trip Taxi Booking
                  </h2>

                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-xl p-5">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-11 h-11 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                          <ArrowRight size={22} className="text-yellow-700" />
                        </div>
                        <h3 className="text-lg font-bold text-black mt-2">
                          One-Way Taxi
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base leading-7">
                        Suitable if you need to travel from Indore to Ujjain
                        without planning a return ride in the same booking.
                        Ask the operator whether one-way service is available
                        and confirm the total price.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-5">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-11 h-11 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                          <Route size={22} className="text-yellow-700" />
                        </div>
                        <h3 className="text-lg font-bold text-black mt-2">
                          Round-Trip Taxi
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base leading-7">
                        Useful for travellers planning a temple visit or
                        same-day outing with a return to Indore. Share your
                        expected waiting time and return schedule when
                        requesting a quotation.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Which Vehicle Should You Choose?
                  </h2>

                  <p className="mb-5">
                    Select a vehicle according to your group size, comfort
                    preferences, and luggage. Confirm the exact model,
                    seating capacity, and availability before making a
                    booking.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-left text-sm sm:text-base">
                      <thead className="bg-gray-100 text-black">
                        <tr>
                          <th className="p-4 font-bold">Vehicle</th>
                          <th className="p-4 font-bold">Suitable For</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-4 font-semibold">Sedan</td>
                          <td className="p-4">
                            Individuals, couples, and small families
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold">SUV / Innova</td>
                          <td className="p-4">
                            Families needing additional space
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold">
                            Tempo Traveller
                          </td>
                          <td className="p-4">
                            Larger families and small groups
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold">Force Urbania</td>
                          <td className="p-4">
                            Group trips and organised travel
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                    <Link
                      to="/blog/innova-rental-in-indore"
                      className="inline-flex items-center gap-2 font-semibold text-yellow-700 hover:text-black"
                    >
                      Innova Rental in Indore
                      <ArrowRight size={17} />
                    </Link>

                    <Link
                      to="/blog/tempo-traveller-on-rent-in-indore"
                      className="inline-flex items-center gap-2 font-semibold text-yellow-700 hover:text-black"
                    >
                      Tempo Traveller Rental
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Visiting Mahakaleshwar Temple?
                  </h2>

                  <p className="mb-4">
                    If your main destination is Mahakaleshwar Temple, plan
                    your pickup and expected arrival time according to your
                    visit. Allow extra time for traffic, parking arrangements,
                    and queues during busy periods.
                  </p>

                  <p>
                    If you plan to visit additional places in Ujjain, tell the
                    operator before booking. Extra stops or waiting time may
                    affect the final quotation. Check current temple entry,
                    darshan, and local travel arrangements through official
                    sources before your trip.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    How to Book an Indore to Ujjain Taxi
                  </h2>

                  <div className="space-y-5">
                    {bookingSteps.map((step, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center shrink-0">
                          {index + 1}
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-black mb-1">
                            {step.title}
                          </h3>
                          <p className="text-sm sm:text-base leading-7">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Tips for a Smooth Journey
                  </h2>

                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <CalendarCheck
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Book in advance during weekends, holidays, and busy
                        religious occasions.
                      </span>
                    </li>

                    <li className="flex gap-3 items-start">
                      <Clock
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Allow additional time for traffic and your planned
                        activities in Ujjain.
                      </span>
                    </li>

                    <li className="flex gap-3 items-start">
                      <Wallet
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Confirm the full fare and any additional charges
                        before paying an advance.
                      </span>
                    </li>

                    <li className="flex gap-3 items-start">
                      <ShieldCheck
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Keep the booking confirmation and driver's contact
                        details accessible.
                      </span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <details
                        key={index}
                        className="group border border-gray-200 rounded-xl p-4 sm:p-5"
                      >
                        <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-bold text-black">
                          <span>{faq.question}</span>
                          <span className="text-yellow-600 text-xl leading-6 group-open:rotate-45 transition-transform">
                            +
                          </span>
                        </summary>

                        <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>

                <section className="border-t border-gray-200 pt-7">
                  <h2 className="text-2xl font-bold text-black mb-4">
                    Book Your Indore to Ujjain Taxi
                  </h2>

                  <p className="mb-4">
                    Whether you are travelling for Mahakaleshwar darshan,
                    a family outing, or a personal visit, plan your journey
                    by confirming the pickup point, vehicle, travel schedule,
                    and total fare in advance.
                  </p>

                  <p>
                    You can also explore our guide to{" "}
                    <Link
                      to="/blog/indore-to-omkareshwar-taxi-fare"
                      className="text-yellow-700 font-semibold hover:underline"
                    >
                      Indore to Omkareshwar taxi fare
                    </Link>{" "}
                    and our{" "}
                    <Link
                      to="/blog/outstation-cab-service-in-indore"
                      className="text-yellow-700 font-semibold hover:underline"
                    >
                      outstation cab service guide
                    </Link>
                    .
                  </p>
                </section>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:self-start">
              <div className="border border-gray-200 rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-28">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mb-4">
                  <Landmark size={24} className="text-yellow-700" />
                </div>

                <h3 className="text-xl font-bold text-black mb-3">
                  Planning a Ujjain Trip?
                </h3>

                <p className="text-sm text-gray-600 leading-7 mb-5">
                  Enquire about a suitable cab for your travel date, pickup
                  location, and one-way or round-trip requirements.
                </p>

                <Link
                  to="/services"
                  className="w-full inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-5 py-3 rounded-lg transition-colors"
                >
                  View Our Services
                  <ArrowRight size={18} />
                </Link>

                <div className="border-t border-gray-200 my-6" />

                <h3 className="text-lg font-bold text-black mb-4">
                  Related Blogs
                </h3>

                <div className="space-y-4">
                  <Link
                    to="/blog/indore-to-omkareshwar-taxi-fare"
                    className="flex items-start gap-3 group"
                  >
                    <MapPin
                      size={20}
                      className="text-yellow-600 shrink-0 mt-1"
                    />
                    <span className="font-medium text-sm leading-6 group-hover:text-yellow-700">
                      Indore to Omkareshwar Taxi Fare
                    </span>
                  </Link>

                  <Link
                    to="/blog/outstation-cab-service-in-indore"
                    className="flex items-start gap-3 group"
                  >
                    <Route
                      size={20}
                      className="text-yellow-600 shrink-0 mt-1"
                    />
                    <span className="font-medium text-sm leading-6 group-hover:text-yellow-700">
                      Outstation Cab Service in Indore
                    </span>
                  </Link>

                  <Link
                    to="/blog/innova-rental-in-indore"
                    className="flex items-start gap-3 group"
                  >
                    <Car
                      size={20}
                      className="text-yellow-600 shrink-0 mt-1"
                    />
                    <span className="font-medium text-sm leading-6 group-hover:text-yellow-700">
                      Innova Rental in Indore
                    </span>
                  </Link>

                  <Link
                    to="/blog/tempo-traveller-on-rent-in-indore"
                    className="flex items-start gap-3 group"
                  >
                    <Users
                      size={20}
                      className="text-yellow-600 shrink-0 mt-1"
                    />
                    <span className="font-medium text-sm leading-6 group-hover:text-yellow-700">
                      Tempo Traveller on Rent in Indore
                    </span>
                  </Link>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Blog9;
