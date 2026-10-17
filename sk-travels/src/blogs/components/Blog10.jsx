
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
  Compass,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";

const Blog10 = () => {
  const fareFactors = [
    "Vehicle category and model",
    "One-way or round-trip booking",
    "Pickup location and total travel distance",
    "Waiting time and additional stops",
    "Driver allowance, if applicable",
    "Tolls, parking, and other applicable charges",
  ];

  const bookingSteps = [
    {
      title: "Choose your travel date",
      description:
        "Decide when you want to travel from Indore to Omkareshwar and whether you need a return journey.",
    },
    {
      title: "Select a suitable vehicle",
      description:
        "Choose a sedan, SUV, Innova, or group vehicle based on your passenger count and luggage.",
    },
    {
      title: "Request a complete fare quotation",
      description:
        "Share your pickup point, travel date, trip type, and any additional stops to receive a route-specific quote.",
    },
    {
      title: "Confirm your booking",
      description:
        "Review the fare, pickup time, waiting arrangements, payment terms, and return schedule before confirming.",
    },
  ];

  const faqs = [
    {
      question: "How much does a taxi from Indore to Omkareshwar cost?",
      answer:
        "The fare depends on the vehicle, pickup location, one-way or round-trip booking, and applicable charges. Request a current quotation for your travel date to know the actual price.",
    },
    {
      question: "Can I book a one-way taxi from Indore to Omkareshwar?",
      answer:
        "You can enquire about a one-way cab. Availability and pricing depend on the operator's route and booking policy, so confirm the total fare before booking.",
    },
    {
      question: "Can I book a round-trip cab for Omkareshwar darshan?",
      answer:
        "You can enquire about a round-trip taxi for your visit. Share your preferred pickup time, expected return time, and any additional stops to receive a suitable quotation.",
    },
    {
      question: "Which car is suitable for an Omkareshwar trip?",
      answer:
        "A sedan may suit a small group, while an SUV or Innova may offer more space. Larger groups can enquire about a Tempo Traveller or Force Urbania. Confirm seating capacity and availability before booking.",
    },
    {
      question: "Are tolls, parking, and driver charges included in the fare?",
      answer:
        "Inclusions vary by operator and package. Ask for a breakdown covering tolls, parking, driver allowance, waiting time, and any other applicable charges.",
    },
    {
      question: "Should I book my Omkareshwar taxi in advance?",
      answer:
        "Advance booking is recommended, particularly during weekends, holidays, and busy religious occasions. Confirm the vehicle and pickup time before your travel date.",
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
              Indore to Omkareshwar Taxi Fare
            </span>
          </div>

          <div className="max-w-4xl lg:max-w-5xl">
            <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              <Route size={16} />
              Taxi Fare Guide
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-5">
              Indore to Omkareshwar Taxi Fare: Complete Cab Booking Guide
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-8">
              Planning a trip from Indore to Omkareshwar? Explore taxi booking
              options, understand the factors affecting your fare, and choose
              a suitable vehicle for a comfortable temple visit or family trip.
            </p>

            <div className="flex flex-wrap gap-5 mt-6 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <Clock size={17} />
                6–8 min read
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={17} />
                Indore to Omkareshwar
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

              {/* Replace this generic image with an actual cab or Omkareshwar travel photo */}
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=85"
                alt="Taxi for travel from Indore to Omkareshwar"
                className="w-full h-56 sm:h-80 lg:h-[460px] object-cover rounded-2xl mb-8 border border-gray-200 shadow-sm"
                loading="eager"
              />

              <div className="space-y-9 text-gray-700 leading-8">

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Travel from Indore to Omkareshwar by Taxi
                  </h2>

                  <p className="mb-4">
                    Omkareshwar is a well-known religious destination in
                    Madhya Pradesh. Many travellers plan a visit from Indore
                    for temple darshan, family outings, and spiritual trips.
                    A private cab can provide flexible pickup and drop-off
                    arrangements according to your travel plan.
                  </p>

                  <p>
                    Before booking, decide whether you need a one-way journey
                    or a round trip. Share your pickup location, preferred
                    departure time, and expected return schedule so the
                    operator can suggest an appropriate vehicle and quotation.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    What Affects the Indore to Omkareshwar Taxi Fare?
                  </h2>

                  <p className="mb-5">
                    Taxi prices can vary depending on the vehicle, route,
                    journey type, and booking terms. Checking these factors
                    helps you understand the quotation before confirming.
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
                    Request a complete fare breakdown for your actual travel
                    date. Confirm whether the quoted price includes return
                    travel, waiting time, tolls, parking, and driver allowance.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    One-Way vs Round-Trip Taxi
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
                        A one-way booking may suit travellers who only need
                        transport from Indore to Omkareshwar. Ask whether the
                        operator offers one-way service and confirm the total
                        price and drop-off arrangements.
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
                        A round-trip booking may be convenient if you plan to
                        return to Indore after darshan. Tell the operator how
                        long you expect to stay and whether you need additional
                        stops during the journey.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Which Vehicle Should You Choose?
                  </h2>

                  <p className="mb-5">
                    The right vehicle depends on the number of passengers,
                    luggage, and your comfort preferences. Confirm the exact
                    model, seating capacity, and availability before booking.
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
                    Planning Your Omkareshwar Temple Visit
                  </h2>

                  <p className="mb-4">
                    If your main purpose is temple darshan, plan your departure
                    and arrival schedule according to your preferred visit
                    time. Keep extra time for traffic, parking arrangements,
                    walking, and queues during busy periods.
                  </p>

                  <p className="mb-4">
                    If you want to visit other attractions along the way, tell
                    your driver or service provider before the trip. Additional
                    stops and waiting time may affect the final fare.
                  </p>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <Compass
                        size={23}
                        className="text-yellow-700 shrink-0 mt-1"
                      />
                      <div>
                        <h3 className="font-bold text-black mb-1">
                          Plan Your Route in Advance
                        </h3>
                        <p className="text-sm sm:text-base leading-7">
                          Confirm the pickup point, destination, planned stops,
                          and return timing before departure. Check current
                          temple and local travel information before your visit.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    How to Book an Indore to Omkareshwar Taxi
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
                    Tips for a Comfortable Journey
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
                        Allow enough time for traffic, darshan, and your return
                        journey.
                      </span>
                    </li>

                    <li className="flex gap-3 items-start">
                      <Wallet
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Confirm the complete fare and additional charges before
                        paying an advance.
                      </span>
                    </li>

                    <li className="flex gap-3 items-start">
                      <ShieldCheck
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Keep your booking confirmation and driver contact
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
                    Book Your Indore to Omkareshwar Taxi
                  </h2>

                  <p className="mb-4">
                    Whether you are travelling for temple darshan, a family
                    outing, or a personal visit, plan your journey by
                    confirming the pickup point, vehicle, return schedule,
                    and total fare in advance.
                  </p>

                  <p>
                    You can also explore our guide to{" "}
                    <Link
                      to="/blog/indore-to-ujjain-taxi-fare"
                      className="text-yellow-700 font-semibold hover:underline"
                    >
                      Indore to Ujjain taxi fare
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
                  Planning an Omkareshwar Trip?
                </h3>

                <p className="text-sm text-gray-600 leading-7 mb-5">
                  Enquire about a suitable cab for your travel date, pickup
                  location, passenger count, and one-way or round-trip plans.
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
                    to="/blog/indore-to-ujjain-taxi-fare"
                    className="flex items-start gap-3 group"
                  >
                    <MapPin
                      size={20}
                      className="text-yellow-600 shrink-0 mt-1"
                    />
                    <span className="font-medium text-sm leading-6 group-hover:text-yellow-700">
                      Indore to Ujjain Taxi Fare
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
                    to="/blog/force-urbania-rental-in-indore"
                    className="flex items-start gap-3 group"
                  >
                    <Car
                      size={20}
                      className="text-yellow-600 shrink-0 mt-1"
                    />
                    <span className="font-medium text-sm leading-6 group-hover:text-yellow-700">
                      Force Urbania Rental in Indore
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

export default Blog10;
