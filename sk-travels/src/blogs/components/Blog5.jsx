
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Car,
  Clock,
  ShieldCheck,
  Phone,
  Route,
  CalendarCheck,
  Luggage,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";

const Blog5 = () => {
  const benefits = [
    "Convenient pickup and drop-off from your preferred location",
    "Comfortable travel for family trips and business journeys",
    "Flexible travel plans based on your itinerary",
    "Suitable vehicle options for individuals and groups",
    "Experienced drivers familiar with intercity routes",
    "Advance booking for better trip planning",
  ];

  const bookingSteps = [
    {
      title: "Share your travel details",
      description:
        "Provide your pickup location, destination, travel date, pickup time, and number of passengers.",
    },
    {
      title: "Choose a suitable vehicle",
      description:
        "Select a vehicle based on your group size, luggage requirements, and travel preferences.",
    },
    {
      title: "Confirm the complete fare",
      description:
        "Ask about kilometres, driver allowance, tolls, parking, night charges, and any other applicable costs.",
    },
    {
      title: "Confirm your booking",
      description:
        "Once the itinerary and fare terms are agreed upon, confirm your cab booking.",
    },
  ];

  const faqs = [
    {
      question: "Can I book an outstation cab from Indore for a one-way trip?",
      answer:
        "Yes, you can enquire about a one-way outstation cab. Availability and pricing depend on the destination, vehicle, and operator's booking terms.",
    },
    {
      question: "Can I book a cab from Indore for a round trip?",
      answer:
        "Yes, round-trip bookings can be arranged for family visits, business travel, sightseeing, and other journeys. Share your return date and schedule while requesting a quote.",
    },
    {
      question: "How is the outstation cab fare calculated?",
      answer:
        "The fare may depend on the vehicle type, total distance, trip duration, one-way or round-trip arrangement, driver allowance, tolls, parking, and applicable taxes. Confirm the complete fare before booking.",
    },
    {
      question: "Which vehicle should I choose for an outstation trip?",
      answer:
        "A sedan or SUV may suit a small family, while an Innova, Tempo Traveller, or Force Urbania may be more suitable for larger groups. Choose according to passenger count and luggage.",
    },
    {
      question: "Can I book an outstation cab for multiple destinations?",
      answer:
        "You can enquire about a multi-stop itinerary. Share all destinations and planned stops in advance so the operator can confirm feasibility and pricing.",
    },
    {
      question: "How early should I book an outstation cab?",
      answer:
        "Booking in advance is recommended, especially during holidays, weekends, wedding seasons, and busy travel periods. Confirm availability for your exact travel date.",
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
              Outstation Cab Service in Indore
            </span>
          </div>

          <div className="max-w-4xl lg:max-w-5xl">
            <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              <Route size={16} />
              Outstation Travel Guide
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-5">
              Outstation Cab Service in Indore: A Complete Travel Guide
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-8">
              Planning an outstation journey from Indore? Learn how to choose
              the right cab, compare fare details, plan your route, and book a
              comfortable ride for your next trip.
            </p>

            <div className="flex flex-wrap gap-5 mt-6 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <Clock size={17} />
                6–8 min read
              </span>
              <span className="inline-flex items-center gap-2">
                <Car size={17} />
                Cab Booking Guide
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

              {/* Replace this generic image with an actual outstation cab photo */}
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=85"
                alt="Car ready for an outstation journey from Indore"
                className="w-full h-56 sm:h-80 lg:h-[460px] object-cover rounded-2xl mb-8 border border-gray-200 shadow-sm"
                loading="eager"
              />

              <div className="space-y-9 text-gray-700 leading-8">

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    What Is an Outstation Cab Service?
                  </h2>

                  <p className="mb-4">
                    An outstation cab service is a convenient way to travel
                    from Indore to another city or destination by private car.
                    It is useful for family holidays, business meetings,
                    religious visits, weekend trips, and personal travel.
                  </p>

                  <p>
                    Instead of coordinating multiple buses or trains, you can
                    plan your journey around your preferred pickup time,
                    destination, and itinerary. Depending on availability, you
                    can enquire about sedan cars, SUVs, Innova vehicles, Tempo
                    Travellers, and Force Urbania vans.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Why Choose an Outstation Cab from Indore?
                  </h2>

                  <p className="mb-5">
                    A private cab offers flexibility when your trip includes
                    family members, luggage, multiple stops, or destinations
                    that are not easily accessible by public transport.
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
                    Popular Outstation Trips from Indore
                  </h2>

                  <p className="mb-5">
                    Your destination and itinerary will help determine the
                    appropriate vehicle and booking arrangement. Travellers
                    commonly enquire about routes such as:
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-4 border border-gray-200 rounded-xl p-4">
                      <div className="w-11 h-11 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                        <MapPin className="text-yellow-700" size={22} />
                      </div>
                      <div>
                        <h3 className="font-bold text-black text-lg">
                          Indore to Ujjain
                        </h3>
                        <p className="text-sm leading-7">
                          Suitable for temple visits, family outings, and
                          planned religious trips.
                        </p>
                        <Link
                          to="/blog/indore-to-ujjain-taxi-fare"
                          className="inline-flex items-center gap-2 mt-2 text-yellow-700 font-semibold text-sm hover:text-black"
                        >
                          Read Ujjain taxi fare guide <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>

                    <div className="flex gap-4 border border-gray-200 rounded-xl p-4">
                      <div className="w-11 h-11 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                        <MapPin className="text-yellow-700" size={22} />
                      </div>
                      <div>
                        <h3 className="font-bold text-black text-lg">
                          Indore to Omkareshwar
                        </h3>
                        <p className="text-sm leading-7">
                          A private cab can help families plan a temple visit
                          with a pickup and return schedule.
                        </p>
                        <Link
                          to="/blog/indore-to-omkareshwar-taxi-fare"
                          className="inline-flex items-center gap-2 mt-2 text-yellow-700 font-semibold text-sm hover:text-black"
                        >
                          Read Omkareshwar taxi fare guide{" "}
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>

                    <div className="flex gap-4 border border-gray-200 rounded-xl p-4">
                      <div className="w-11 h-11 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                        <MapPin className="text-yellow-700" size={22} />
                      </div>
                      <div>
                        <h3 className="font-bold text-black text-lg">
                          Other Cities and Destinations
                        </h3>
                        <p className="text-sm leading-7">
                          You can enquire about business trips, family holidays,
                          weekend travel, and multi-destination itineraries.
                          Confirm route availability before booking.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Which Vehicle Should You Book?
                  </h2>

                  <p className="mb-5">
                    Choose a vehicle based on the number of passengers, luggage,
                    trip duration, and comfort requirements. Confirm the
                    vehicle model and seating capacity with the operator.
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
                            Small families and business travel
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold">SUV / Innova</td>
                          <td className="p-4">
                            Families needing additional space and comfort
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold">
                            Tempo Traveller
                          </td>
                          <td className="p-4">
                            Group outings and larger families
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold">Force Urbania</td>
                          <td className="p-4">
                            Group tours, events, and group journeys
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-4 text-sm text-gray-500">
                    Vehicle availability, seating configuration, and luggage
                    space must be confirmed at the time of booking.
                  </p>

                  <div className="mt-5">
                    <Link
                      to="/blog/innova-rental-in-indore"
                      className="inline-flex items-center gap-2 font-semibold text-yellow-700 hover:text-black"
                    >
                      Explore Innova rental in Indore
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    Outstation Cab Fare: What Should You Check?
                  </h2>

                  <p className="mb-4">
                    Outstation cab fares can vary according to the destination,
                    vehicle category, total distance, journey duration, and
                    booking type. There is no single fare that applies to every
                    route or vehicle.
                  </p>

                  <p className="mb-4">
                    Before confirming your booking, ask whether the quotation
                    includes:
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Base fare and the applicable kilometre calculation",
                      "One-way or round-trip booking conditions",
                      "Driver allowance and overnight charges, if applicable",
                      "Toll charges, parking fees, and state taxes, if applicable",
                      "Extra stops, waiting time, and itinerary changes",
                      "Advance payment, cancellation, and refund terms",
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
                    Request a clear fare breakdown before paying an advance.
                    This helps you compare quotes fairly and avoid unexpected
                    costs during your journey.
                  </p>

                  <div className="mt-5 p-5 sm:p-6 bg-yellow-50 border border-yellow-200 rounded-2xl">
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                      Need a suitable vehicle for your trip?
                    </h3>
                    <p className="text-sm sm:text-base mb-4">
                      Share your route, travel date, passenger count, and
                      whether you need a one-way or round-trip cab to request
                      an appropriate quotation.
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
                    How to Book an Outstation Cab in Indore
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
                    Tips for a Comfortable Outstation Journey
                  </h2>

                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <CalendarCheck
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Book early during weekends, holidays, and busy travel
                        seasons.
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <ShieldCheck
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Confirm the vehicle, driver details, fare inclusions,
                        and booking terms before departure.
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Luggage
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Mention the number of bags and passengers so the
                        selected vehicle has suitable space.
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Clock
                        size={21}
                        className="text-yellow-600 shrink-0 mt-1"
                      />
                      <span>
                        Keep some extra time for traffic, breaks, and
                        unexpected delays.
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
                    Plan Your Next Trip from Indore
                  </h2>

                  <p className="mb-4">
                    A well-planned outstation cab booking makes it easier to
                    organise your pickup, route, luggage, and travel schedule.
                    Compare suitable vehicles, clarify the complete fare, and
                    confirm your booking details before starting the journey.
                  </p>

                  <p>
                    You can also explore our guides to{" "}
                    <Link
                      to="/blog/force-urbania-rental-in-indore"
                      className="text-yellow-700 font-semibold hover:underline"
                    >
                      Force Urbania rental in Indore
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/blog/tempo-traveller-on-rent-in-indore"
                      className="text-yellow-700 font-semibold hover:underline"
                    >
                      Tempo Traveller rental in Indore
                    </Link>{" "}
                    to find a suitable vehicle for your group.
                  </p>
                </section>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:self-start">
              <div className="border border-gray-200 rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-28">
                <h3 className="text-xl font-bold text-black mb-3">
                  Planning an Outstation Trip?
                </h3>

                <p className="text-sm text-gray-600 leading-7 mb-5">
                  Enquire about vehicle availability for your destination,
                  passenger count, and travel date.
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
                    <Route
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

export default Blog5;
