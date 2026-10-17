
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Plane,
  Clock,
  ShieldCheck,
  MapPin,
  Luggage,
  CalendarCheck,
  Car,
  Phone,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";

const Blog6 = () => {
  const benefits = [
    "Convenient pickup from your home, hotel, or office",
    "Airport drop-off for domestic and international flights",
    "Suitable vehicle options for individuals and families",
    "Advance booking to plan your airport transfer",
    "Space for passengers and luggage according to vehicle size",
    "Flexible pickup scheduling based on your flight timings",
  ];

  const bookingSteps = [
    {
      title: "Share your flight details",
      description:
        "Provide your travel date, flight time, pickup location, and whether you need an airport pickup or drop-off.",
    },
    {
      title: "Choose your vehicle",
      description:
        "Select a suitable car according to your passenger count, luggage, and comfort requirements.",
    },
    {
      title: "Confirm the fare",
      description:
        "Ask about the complete fare, waiting time, parking charges, tolls, and any additional applicable costs.",
    },
    {
      title: "Confirm your booking",
      description:
        "Verify your pickup time, driver contact details, pickup point, and booking terms before travelling.",
    },
  ];

  const faqs = [
    {
      question: "Can I book a taxi to Devi Ahilya Bai Holkar Airport in Indore?",
      answer:
        "You can enquire about a taxi for airport pickup or drop-off in Indore. Share your pickup location, travel date, and preferred time to check availability.",
    },
    {
      question: "Can I book an airport taxi in advance?",
      answer:
        "Yes, advance booking can help you plan your airport transfer. Confirm the booking and pickup time with the service provider before your travel date.",
    },
    {
      question: "How much does an airport taxi in Indore cost?",
      answer:
        "The fare depends on your pickup location, vehicle type, travel time, and applicable charges. Request a quote for your specific route and confirm the total fare before booking.",
    },
    {
      question: "Can I book a taxi for an early-morning flight?",
      answer:
        "You can enquire about early-morning or late-night transfers. Confirm availability, pickup time, and any applicable night charges with the operator in advance.",
    },
    {
      question: "Which vehicle is suitable for airport transfers?",
      answer:
        "A sedan may be suitable for a small group, while an SUV or Innova may provide more space for families and luggage. Larger groups can enquire about a Tempo Traveller or Force Urbania.",
    },
    {
      question: "Can I get picked up from the airport after landing?",
      answer:
        "Airport pickup may be available depending on the provider. Share your flight number, arrival time, passenger count, and contact details when enquiring.",
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
              Airport Taxi Service in Indore
            </span>
          </div>

          <div className="max-w-4xl lg:max-w-5xl">
            <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              <Plane size={16} />
              Airport Transfer Guide
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-5">
              Airport Taxi Service in Indore: Pickup, Drop-Off and Booking Guide
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-8">
              Looking for an airport taxi in Indore? Learn how to plan your
              airport transfer, choose the right vehicle, compare fares, and
              book a convenient ride for your flight.
            </p>

            <div className="flex flex-wrap gap-5 mt-6 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <Clock size={17} />
                6–8 min read
              </span>
              <span className="inline-flex items-center gap-2">
                <Car size={17} />
                Airport Travel Guide
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

              {/* Replace with an actual airport taxi or airport transfer image */}
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=85"
                alt="Car for airport taxi service in Indore"
                className="w-full h-56 sm:h-80 lg:h-[460px] object-cover rounded-2xl mb-8 border border-gray-200 shadow-sm"
                loading="eager"
              />

              <div className="space-y-9 text-gray-700 leading-8">

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Airport Taxi Service in Indore
                  </h2>

                  <p className="mb-4">
                    Reaching the airport on time is an important part of every
                    journey. An airport taxi service helps travellers plan
                    their transfer between the airport and locations such as
                    homes, hotels, offices, and other pickup points in Indore.
                  </p>

                  <p>
                    Whether you are catching an early-morning flight, travelling
                    for business, or returning home after a trip, you can enquire
                    about a suitable vehicle based on your schedule, number of
                    passengers, and luggage requirements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Why Book an Airport Taxi in Advance?
                  </h2>

                  <p className="mb-5">
                    Planning your airport transfer ahead of time can make your
                    travel day easier. It allows you to discuss pickup
                    arrangements, confirm the fare, and select a vehicle
                    suitable for your journey.
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
                    Airport Pickup and Drop-Off Services
                  </h2>

                  <div className="space-y-5">
                    <div className="border border-gray-200 rounded-xl p-5">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-11 h-11 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                          <Plane size={22} className="text-yellow-700" />
                        </div>
                        <h3 className="text-lg font-bold text-black mt-2">
                          Airport Drop-Off
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base leading-7">
                        Book a cab from your home, hotel, or office to the
                        airport. When planning the pickup time, consider traffic,
                        check-in requirements, and your flight's departure time.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-5">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-11 h-11 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                          <MapPin size={22} className="text-yellow-700" />
                        </div>
                        <h3 className="text-lg font-bold text-black mt-2">
                          Airport Pickup
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base leading-7">
                        If you are arriving in Indore, enquire about a pickup
                        from the airport to your destination. Share your flight
                        details and confirm the meeting point and waiting-time
                        policy in advance.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-5">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-11 h-11 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                          <Car size={22} className="text-yellow-700" />
                        </div>
                        <h3 className="text-lg font-bold text-black mt-2">
                          Airport Transfer for Families and Groups
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base leading-7">
                        Travelling with family, colleagues, or extra luggage?
                        Ask about an SUV, Innova, Tempo Traveller, or Force
                        Urbania, depending on your group size and availability.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Which Car Is Best for an Airport Transfer?
                  </h2>

                  <p className="mb-5">
                    The best vehicle depends on how many people are travelling
                    and how much luggage you have. Confirm the seating capacity
                    and available luggage space before finalising your booking.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-left text-sm sm:text-base">
                      <thead className="bg-gray-100 text-black">
                        <tr>
                          <th className="p-4 font-bold">Vehicle Type</th>
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
                            Families needing more passenger and luggage space
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
                            Group airport transfers and organised travel
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
                      Innova Rental in Indore <ArrowRight size={17} />
                    </Link>

                    <Link
                      to="/blog/tempo-traveller-on-rent-in-indore"
                      className="inline-flex items-center gap-2 font-semibold text-yellow-700 hover:text-black"
                    >
                      Tempo Traveller Rental <ArrowRight size={17} />
                    </Link>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Airport Taxi Fare in Indore
                  </h2>

                  <p className="mb-4">
                    Airport taxi fares may vary according to the pickup
                    location, vehicle type, travel time, distance, and service
                    provider. Late-night transfers or additional waiting may
                    involve extra charges, depending on the booking terms.
                  </p>

                  <p className="mb-4">
                    Before confirming a ride, ask the provider to clarify:
                  </p>

                  <ul className="space-y-3">
                    {[
                      "The total fare for your pickup or drop-off route",
                      "Whether parking charges and tolls are included",
                      "Waiting-time limits for airport pickups",
                      "Any early-morning or late-night charges",
                      "The advance payment and cancellation policy",
                      "The vehicle type and passenger luggage capacity",
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

                  <div className="mt-5 p-5 sm:p-6 bg-yellow-50 border border-yellow-200 rounded-2xl">
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                      Need an airport transfer?
                    </h3>
                    <p className="text-sm sm:text-base mb-4">
                      Share your pickup point, flight timing, passenger count,
                      and luggage details to enquire about an appropriate
                      vehicle and fare.
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-5 py-3 rounded-lg transition-colors"
                    >
                      Explore Cab Services <ArrowRight size={18} />
                    </Link>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    How to Book an Airport Taxi
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
                    Tips for a Smooth Airport Journey
                  </h2>

                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <Clock
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Allow extra travel time for traffic and unexpected
                        delays, especially during peak hours.
                      </span>
                    </li>

                    <li className="flex gap-3 items-start">
                      <CalendarCheck
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Share your flight details and confirm the pickup
                        schedule before the travel date.
                      </span>
                    </li>

                    <li className="flex gap-3 items-start">
                      <Luggage
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Mention the number and size of your bags to ensure the
                        vehicle has sufficient luggage space.
                      </span>
                    </li>

                    <li className="flex gap-3 items-start">
                      <ShieldCheck
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Keep your booking confirmation and driver's contact
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
                    Book Your Airport Taxi in Indore
                  </h2>

                  <p className="mb-4">
                    A planned airport transfer can make your journey easier
                    from the moment you leave home until you reach your
                    destination. Choose a suitable vehicle, confirm your fare,
                    and finalise the pickup details before travelling.
                  </p>

                  <p>
                    For longer journeys after landing, explore our guides to{" "}
                    <Link
                      to="/blog/outstation-cab-service-in-indore"
                      className="text-yellow-700 font-semibold hover:underline"
                    >
                      outstation cab service in Indore
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/blog/force-urbania-rental-in-indore"
                      className="text-yellow-700 font-semibold hover:underline"
                    >
                      Force Urbania rental in Indore
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
                  <Plane size={24} className="text-yellow-700" />
                </div>

                <h3 className="text-xl font-bold text-black mb-3">
                  Need an Airport Taxi?
                </h3>

                <p className="text-sm text-gray-600 leading-7 mb-5">
                  Enquire about airport pickup or drop-off options based on
                  your location, flight timing, and vehicle requirements.
                </p>

                <Link
                  to="/services"
                  className="w-full inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-5 py-3 rounded-lg transition-colors"
                >
                  View Our Services <ArrowRight size={18} />
                </Link>

                <div className="border-t border-gray-200 my-6" />

                <h3 className="text-lg font-bold text-black mb-4">
                  Related Blogs
                </h3>

                <div className="space-y-4">
                  <Link
                    to="/blog/car-rental-in-indore-with-driver"
                    className="flex items-start gap-3 group"
                  >
                    <Car
                      size={20}
                      className="text-yellow-600 shrink-0 mt-1"
                    />
                    <span className="font-medium text-sm leading-6 group-hover:text-yellow-700">
                      Car Rental in Indore with Driver
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
                    <Car
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

export default Blog6;
