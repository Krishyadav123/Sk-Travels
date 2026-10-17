
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Car,
  Clock,
  ShieldCheck,
  MapPin,
  UserRound,
  CalendarCheck,
  BriefcaseBusiness,
  Luggage,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";

const Blog7 = () => {
  const benefits = [
    "Travel comfortably without driving yourself",
    "Convenient pickup and drop-off at your preferred location",
    "Suitable for local travel and outstation journeys",
    "Vehicle options for individuals, families, and groups",
    "Useful for business meetings, events, and family functions",
    "Flexible travel planning according to your itinerary",
  ];

  const bookingSteps = [
    {
      title: "Share your travel requirements",
      description:
        "Tell the service provider your pickup location, destination, travel date, timing, and number of passengers.",
    },
    {
      title: "Select your vehicle",
      description:
        "Choose a sedan, SUV, Innova, or another available vehicle according to your group size and luggage.",
    },
    {
      title: "Confirm the fare and terms",
      description:
        "Ask about the total fare, included kilometres, driver allowance, waiting charges, tolls, parking, and other applicable costs.",
    },
    {
      title: "Confirm your booking",
      description:
        "Verify the vehicle, driver details, pickup time, itinerary, and payment or cancellation terms.",
    },
  ];

  const faqs = [
    {
      question: "Can I rent a car with a driver in Indore?",
      answer:
        "You can enquire about chauffeur-driven car rental in Indore for local travel, airport transfers, business trips, family outings, and outstation journeys. Availability depends on your date and vehicle requirements.",
    },
    {
      question: "Can I book a car with a driver for a full day?",
      answer:
        "Full-day bookings may be available depending on the service provider. Confirm the permitted hours, included kilometres, waiting time, and extra-hour charges before booking.",
    },
    {
      question: "How much does car rental with a driver cost in Indore?",
      answer:
        "Pricing depends on the vehicle, rental duration, distance, route, and applicable charges. Ask for a quotation based on your exact itinerary and confirm what is included.",
    },
    {
      question: "Can I book a driver-operated car for outstation travel?",
      answer:
        "Yes, you can enquire about chauffeur-driven outstation travel. Share your destination, travel dates, return schedule, and whether the trip is one-way or round-trip.",
    },
    {
      question: "Which car is suitable for a family trip?",
      answer:
        "A sedan may suit a smaller family, while an SUV or Innova can provide additional space. Consider passenger count and luggage, and confirm seating capacity before booking.",
    },
    {
      question: "Are tolls, parking, and driver charges included?",
      answer:
        "Inclusions vary by booking. Ask for a clear breakdown covering tolls, parking, driver allowance, waiting time, taxes, and any additional charges before confirming.",
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
              Car Rental in Indore with Driver
            </span>
          </div>

          <div className="max-w-4xl lg:max-w-5xl">
            <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              <Car size={16} />
              Car Rental Guide
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-5">
              Car Rental in Indore with Driver: A Complete Booking Guide
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-8">
              Need a car with a driver in Indore? Explore vehicle options,
              understand rental charges, and learn how to book a comfortable
              ride for local travel, airport transfers, business meetings, or
              outstation trips.
            </p>

            <div className="flex flex-wrap gap-5 mt-6 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <Clock size={17} />
                6–8 min read
              </span>
              <span className="inline-flex items-center gap-2">
                <UserRound size={17} />
                Chauffeur-Driven Travel
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

              {/* Replace this generic image with your actual rental car photo */}
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=85"
                alt="Car available for chauffeur-driven rental in Indore"
                className="w-full h-56 sm:h-80 lg:h-[460px] object-cover rounded-2xl mb-8 border border-gray-200 shadow-sm"
                loading="eager"
              />

              <div className="space-y-9 text-gray-700 leading-8">

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    What Is Car Rental with a Driver?
                  </h2>

                  <p className="mb-4">
                    Car rental with a driver, also called chauffeur-driven car
                    rental, allows you to travel in a hired vehicle without
                    driving it yourself. It can be a practical option when you
                    want to focus on your schedule, spend time with your family,
                    or attend meetings without managing the drive.
                  </p>

                  <p>
                    In Indore, travellers may enquire about driver-operated
                    vehicles for city travel, airport transfers, weddings,
                    business appointments, sightseeing, and journeys to other
                    cities. The appropriate vehicle depends on the number of
                    passengers, luggage, and travel plan.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Benefits of Hiring a Car with a Driver
                  </h2>

                  <p className="mb-5">
                    A chauffeur-driven car can make travel more convenient,
                    especially when your day includes multiple destinations,
                    long journeys, or a fixed schedule.
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
                    When Should You Hire a Car with a Driver?
                  </h2>

                  <div className="space-y-4">
                    <div className="flex gap-4 border border-gray-200 rounded-xl p-4 sm:p-5">
                      <div className="w-11 h-11 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                        <MapPin size={22} className="text-yellow-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-black text-lg mb-1">
                          Local City Travel
                        </h3>
                        <p className="text-sm sm:text-base leading-7">
                          Arrange travel between meetings, shopping areas,
                          hotels, appointments, and other locations in Indore.
                          Confirm the rental duration and included distance.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 border border-gray-200 rounded-xl p-4 sm:p-5">
                      <div className="w-11 h-11 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                        <BriefcaseBusiness
                          size={22}
                          className="text-yellow-700"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-black text-lg mb-1">
                          Business Meetings
                        </h3>
                        <p className="text-sm sm:text-base leading-7">
                          A hired car can help you plan transport for client
                          meetings, office visits, and business guests.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 border border-gray-200 rounded-xl p-4 sm:p-5">
                      <div className="w-11 h-11 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                        <Car size={22} className="text-yellow-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-black text-lg mb-1">
                          Family Outings and Events
                        </h3>
                        <p className="text-sm sm:text-base leading-7">
                          Hire a suitable vehicle for family functions,
                          celebrations, sightseeing, or planned visits with
                          multiple stops.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 border border-gray-200 rounded-xl p-4 sm:p-5">
                      <div className="w-11 h-11 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                        <CalendarCheck
                          size={22}
                          className="text-yellow-700"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-black text-lg mb-1">
                          Outstation Journeys
                        </h3>
                        <p className="text-sm sm:text-base leading-7">
                          Enquire about driver-operated vehicles for trips
                          outside Indore, including one-way journeys and
                          round-trip travel.
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
                    Which Vehicle Should You Choose?
                  </h2>

                  <p className="mb-5">
                    Choose a vehicle based on passenger count, luggage,
                    comfort preferences, and journey duration. Confirm the
                    available vehicle model and seating capacity when booking.
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
                            Individuals, couples, and smaller families
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold">SUV</td>
                          <td className="p-4">
                            Families needing extra passenger or luggage space
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold">Innova</td>
                          <td className="p-4">
                            Family trips and comfortable group travel
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold">
                            Tempo Traveller
                          </td>
                          <td className="p-4">
                            Larger families and group outings
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold">Force Urbania</td>
                          <td className="p-4">
                            Group journeys, events, and organised trips
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
                      to="/blog/force-urbania-rental-in-indore"
                      className="inline-flex items-center gap-2 font-semibold text-yellow-700 hover:text-black"
                    >
                      Force Urbania Rental
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Car Rental Charges in Indore
                  </h2>

                  <p className="mb-4">
                    The cost of renting a car with a driver depends on the
                    vehicle category, booking duration, total distance, route,
                    and applicable service charges. Local hourly or full-day
                    packages may have different terms from outstation trips.
                  </p>

                  <p className="mb-4">
                    Before confirming your booking, check the following:
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Rental duration and included kilometres",
                      "Extra-hour and additional-distance charges",
                      "Driver allowance and overnight charges, if applicable",
                      "Tolls, parking fees, and applicable taxes",
                      "Waiting time and charges for additional stops",
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
                    Ask for the complete fare breakdown before booking. This
                    helps you compare different vehicle options and understand
                    the total expected cost.
                  </p>

                  <div className="mt-5 p-5 sm:p-6 bg-yellow-50 border border-yellow-200 rounded-2xl">
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                      Looking for a driver-operated car?
                    </h3>
                    <p className="text-sm sm:text-base mb-4">
                      Share your route, travel date, rental duration, and
                      passenger count to enquire about available vehicles and
                      pricing.
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-5 py-3 rounded-lg transition-colors"
                    >
                      Explore Cab Services
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    How to Book a Car with a Driver
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
                    Tips Before Confirming Your Booking
                  </h2>

                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <CalendarCheck
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Book early for weekends, holidays, weddings, and busy
                        travel periods.
                      </span>
                    </li>

                    <li className="flex gap-3 items-start">
                      <Luggage
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Share passenger and luggage details to select a
                        suitable vehicle.
                      </span>
                    </li>

                    <li className="flex gap-3 items-start">
                      <ShieldCheck
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Confirm the driver's details, vehicle, fare inclusions,
                        and payment terms before travelling.
                      </span>
                    </li>

                    <li className="flex gap-3 items-start">
                      <Clock
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Allow extra time for traffic, waiting, and schedule
                        changes.
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
                    Book Your Car Rental in Indore
                  </h2>

                  <p className="mb-4">
                    Whether you need a car for local travel, a business
                    appointment, a family outing, or an outstation journey,
                    planning the details in advance can make your trip easier.
                    Compare available vehicles and confirm the complete fare
                    before booking.
                  </p>

                  <p>
                    You can also explore our guides to{" "}
                    <Link
                      to="/blog/airport-taxi-service-in-indore"
                      className="text-yellow-700 font-semibold hover:underline"
                    >
                      airport taxi service in Indore
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/blog/outstation-cab-service-in-indore"
                      className="text-yellow-700 font-semibold hover:underline"
                    >
                      outstation cab service in Indore
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
                  <Car size={24} className="text-yellow-700" />
                </div>

                <h3 className="text-xl font-bold text-black mb-3">
                  Need a Car with a Driver?
                </h3>

                <p className="text-sm text-gray-600 leading-7 mb-5">
                  Enquire about available vehicles for local travel, airport
                  transfers, events, or outstation journeys.
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
                    to="/blog/airport-taxi-service-in-indore"
                    className="flex items-start gap-3 group"
                  >
                    <Car
                      size={20}
                      className="text-yellow-600 shrink-0 mt-1"
                    />
                    <span className="font-medium text-sm leading-6 group-hover:text-yellow-700">
                      Airport Taxi Service in Indore
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

export default Blog7;
