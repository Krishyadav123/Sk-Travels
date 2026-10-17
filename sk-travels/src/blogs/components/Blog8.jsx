
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Car,
  Clock,
  Users,
  CalendarCheck,
  MapPin,
  ShieldCheck,
  Heart,
  Sparkles,
  Luggage,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";

const Blog8 = () => {
  const benefits = [
    "Comfortable group travel for wedding guests",
    "Useful for transporting guests between venues",
    "Suitable for family functions and wedding events",
    "A spacious option for group journeys",
    "Helps coordinate planned pickup and drop-off schedules",
    "Advance booking for better event planning",
  ];

  const bookingSteps = [
    {
      title: "Share your wedding schedule",
      description:
        "Provide the wedding date, pickup points, event venues, travel timings, and expected number of passengers.",
    },
    {
      title: "Choose the right vehicle",
      description:
        "Discuss your group size, luggage requirements, and seating preferences before selecting a Force Urbania.",
    },
    {
      title: "Confirm the complete quotation",
      description:
        "Ask about rental duration, kilometres, driver allowance, waiting time, parking, tolls, and other applicable charges.",
    },
    {
      title: "Confirm your booking",
      description:
        "Finalise the pickup schedule, vehicle details, payment terms, and arrangements for each event location.",
    },
  ];

  const faqs = [
    {
      question: "Can I rent a Force Urbania for a wedding in Indore?",
      answer:
        "You can enquire about Force Urbania rental for wedding functions in Indore. Availability depends on your event date, vehicle requirements, and the operator's schedule.",
    },
    {
      question: "Why choose Force Urbania for wedding guests?",
      answer:
        "Force Urbania can be a practical option for group transportation between hotels, homes, wedding venues, and other event locations. Confirm the available seating configuration before booking.",
    },
    {
      question: "How much does Force Urbania wedding rental cost?",
      answer:
        "The cost depends on the rental duration, travel distance, number of trips, waiting time, and applicable charges. Request a quotation based on your wedding itinerary rather than relying on a general estimate.",
    },
    {
      question: "Can I book Force Urbania for multiple wedding functions?",
      answer:
        "You can enquire about transport for multiple functions such as mehendi, haldi, the wedding ceremony, and the reception. Share all event dates, venues, and timings so the operator can confirm availability.",
    },
    {
      question: "How early should I book a Force Urbania for a wedding?",
      answer:
        "Advance booking is recommended, especially during busy wedding seasons. Confirm the vehicle availability and booking terms as soon as your event schedule is finalised.",
    },
    {
      question: "Are tolls, parking, and driver charges included in the wedding package?",
      answer:
        "Inclusions vary by operator and package. Ask for a written fare breakdown covering driver allowance, parking, tolls, waiting time, extra kilometres, and other applicable costs.",
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
              Force Urbania on Rent for Wedding
            </span>
          </div>

          <div className="max-w-4xl lg:max-w-5xl">
            <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              <Heart size={16} />
              Wedding Travel Guide
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-5">
              Force Urbania on Rent for Wedding in Indore
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-8">
              Planning wedding transportation in Indore? Discover how renting
              a Force Urbania can help organise guest travel between hotels,
              homes, wedding venues, and other celebration locations.
            </p>

            <div className="flex flex-wrap gap-5 mt-6 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <Clock size={17} />
                6–8 min read
              </span>
              <span className="inline-flex items-center gap-2">
                <Users size={17} />
                Wedding Group Travel
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

              {/* Replace this generic image with an actual Force Urbania wedding rental photo */}
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85"
                alt="Wedding celebration and guest transportation planning in Indore"
                className="w-full h-56 sm:h-80 lg:h-[460px] object-cover rounded-2xl mb-8 border border-gray-200 shadow-sm"
                loading="eager"
              />

              <div className="space-y-9 text-gray-700 leading-8">

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Why Is Wedding Transportation Important?
                  </h2>

                  <p className="mb-4">
                    Weddings often involve several functions, multiple venues,
                    and guests arriving from different locations. Coordinating
                    their transportation can become challenging when everyone
                    has to arrange separate vehicles.
                  </p>

                  <p>
                    Renting a suitable group vehicle can help families plan
                    pickups and drop-offs more efficiently. A Force Urbania
                    may be suitable for transporting wedding guests between
                    hotels, homes, ceremony venues, reception halls, and other
                    event locations, depending on availability and seating
                    requirements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Benefits of Force Urbania Rental for Weddings
                  </h2>

                  <p className="mb-5">
                    When planning group transportation, the right vehicle can
                    make it easier to coordinate travel timings and keep guests
                    together during important wedding events.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 bg-gray-50"
                      >
                        <CheckCircle2
                          size={21}
                          className="text-yellow-600 shrink-0 mt-1"
                        />
                        <p className="text-sm sm:text-base leading-7">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Where Can You Use Force Urbania During a Wedding?
                  </h2>

                  <div className="space-y-4">
                    <div className="flex gap-4 border border-gray-200 rounded-xl p-4 sm:p-5">
                      <div className="w-11 h-11 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                        <MapPin size={22} className="text-yellow-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-black text-lg mb-1">
                          Hotel to Wedding Venue
                        </h3>
                        <p className="text-sm sm:text-base leading-7">
                          Arrange planned pickups for guests staying at hotels
                          or guest houses and travelling to the wedding venue.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 border border-gray-200 rounded-xl p-4 sm:p-5">
                      <div className="w-11 h-11 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                        <Heart size={22} className="text-yellow-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-black text-lg mb-1">
                          Multiple Wedding Functions
                        </h3>
                        <p className="text-sm sm:text-base leading-7">
                          Discuss transport arrangements for mehendi, haldi,
                          the wedding ceremony, and reception. Share the
                          schedule for every function before booking.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 border border-gray-200 rounded-xl p-4 sm:p-5">
                      <div className="w-11 h-11 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                        <Sparkles size={22} className="text-yellow-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-black text-lg mb-1">
                          Guest Pickup and Drop-Off
                        </h3>
                        <p className="text-sm sm:text-base leading-7">
                          Coordinate guest transportation between selected
                          pickup points and event venues according to the
                          agreed travel schedule.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 border border-gray-200 rounded-xl p-4 sm:p-5">
                      <div className="w-11 h-11 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                        <Car size={22} className="text-yellow-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-black text-lg mb-1">
                          Outstation Wedding Travel
                        </h3>
                        <p className="text-sm sm:text-base leading-7">
                          If guests are travelling from outside Indore, enquire
                          about suitable group transportation and confirm the
                          route, timing, and fare terms.
                        </p>
                        <Link
                          to="/blog/outstation-cab-service-in-indore"
                          className="inline-flex items-center gap-2 mt-2 text-yellow-700 font-semibold text-sm hover:text-black"
                        >
                          Read the outstation cab guide
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    How to Plan Wedding Guest Transportation
                  </h2>

                  <p className="mb-5">
                    Before booking, prepare a simple transport plan. This helps
                    you communicate your requirements clearly and understand
                    whether one vehicle or multiple trips will be needed.
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Estimate how many guests need transportation.",
                      "List the pickup locations and wedding venues.",
                      "Prepare the dates and timings for each function.",
                      "Discuss how many trips may be required.",
                      "Confirm seating capacity and luggage space.",
                      "Keep a buffer for traffic and event delays.",
                    ].map((item, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <CheckCircle2
                          size={20}
                          className="text-yellow-600 shrink-0 mt-1"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Force Urbania Wedding Rental Charges
                  </h2>

                  <p className="mb-4">
                    The rental cost for a wedding depends on the event duration,
                    total distance, number of trips, waiting time, travel route,
                    and vehicle availability. A short transfer between two
                    nearby locations may have different terms from a full-day
                    wedding booking.
                  </p>

                  <p className="mb-4">
                    Ask the service provider to clarify these details before
                    confirming:
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Hourly, kilometre-based, or full-day rental terms",
                      "Total duration and included kilometres",
                      "Number of pickups, drops, and additional trips",
                      "Driver allowance and waiting charges",
                      "Tolls, parking fees, and applicable taxes",
                      "Advance payment and cancellation conditions",
                    ].map((item, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <CheckCircle2
                          size={20}
                          className="text-yellow-600 shrink-0 mt-1"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4">
                    Request a complete quotation based on your actual wedding
                    schedule. Do not assume that every package includes waiting
                    time, parking, or multiple trips.
                  </p>

                  <div className="mt-5 p-5 sm:p-6 bg-yellow-50 border border-yellow-200 rounded-2xl">
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                      Planning a Wedding in Indore?
                    </h3>
                    <p className="text-sm sm:text-base mb-4">
                      Share your wedding date, guest count, pickup locations,
                      and function schedule to enquire about Force Urbania
                      availability and rental terms.
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-5 py-3 rounded-lg transition-colors"
                    >
                      Explore Travel Services
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    How to Book Force Urbania for a Wedding
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
                    Tips for Booking During Wedding Season
                  </h2>

                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <CalendarCheck
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Enquire early because vehicle availability may be
                        limited during busy wedding dates.
                      </span>
                    </li>

                    <li className="flex gap-3 items-start">
                      <Users
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Estimate guest numbers carefully and confirm the
                        available seating configuration.
                      </span>
                    </li>

                    <li className="flex gap-3 items-start">
                      <Clock
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Include reasonable buffer time between pickups and
                        wedding functions.
                      </span>
                    </li>

                    <li className="flex gap-3 items-start">
                      <ShieldCheck
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Confirm the vehicle, driver details, total fare, and
                        cancellation terms in advance.
                      </span>
                    </li>

                    <li className="flex gap-3 items-start">
                      <Luggage
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Discuss luggage and any special passenger requirements
                        before finalising the vehicle.
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
                    Make Wedding Travel Easier with Force Urbania
                  </h2>

                  <p className="mb-4">
                    Good transportation planning helps guests reach wedding
                    venues according to the event schedule. Finalise the
                    itinerary, confirm vehicle availability, and review all
                    rental terms before your celebration.
                  </p>

                  <p>
                    You can also read our guides to{" "}
                    <Link
                      to="/blog/force-urbania-rental-in-indore"
                      className="text-yellow-700 font-semibold hover:underline"
                    >
                      Force Urbania rental in Indore
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/blog/force-urbania-price-per-km-in-indore"
                      className="text-yellow-700 font-semibold hover:underline"
                    >
                      Force Urbania price per km
                    </Link>{" "}
                    for more information.
                  </p>
                </section>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:self-start">
              <div className="border border-gray-200 rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-28">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mb-4">
                  <Heart size={24} className="text-yellow-700" />
                </div>

                <h3 className="text-xl font-bold text-black mb-3">
                  Wedding Guest Transportation
                </h3>

                <p className="text-sm text-gray-600 leading-7 mb-5">
                  Enquire about Force Urbania rental for your wedding date,
                  event locations, and guest transportation requirements.
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

                  <Link
                    to="/blog/force-urbania-price-per-km-in-indore"
                    className="flex items-start gap-3 group"
                  >
                    <MapPin
                      size={20}
                      className="text-yellow-600 shrink-0 mt-1"
                    />
                    <span className="font-medium text-sm leading-6 group-hover:text-yellow-700">
                      Force Urbania Price per Km in Indore
                    </span>
                  </Link>

                  <Link
                    to="/blog/tempo-traveller-on-rent-in-indore"
                    className="flex items-start gap-3 group"
                  >
                    <Car
                      size={20}
                      className="text-yellow-600 shrink-0 mt-1"
                    />
                    <span className="font-medium text-sm leading-6 group-hover:text-yellow-700">
                      Tempo Traveller on Rent in Indore
                    </span>
                  </Link>

                  <Link
                    to="/blog/outstation-cab-service-in-indore"
                    className="flex items-start gap-3 group"
                  >
                    <MapPin
                      size={20}
                      className="text-yellow-600 shrink-0 mt-1"
                    />
                    <span className="font-medium text-sm leading-6 group-hover:text-yellow-700">
                      Outstation Cab Service in Indore
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

export default Blog8;
