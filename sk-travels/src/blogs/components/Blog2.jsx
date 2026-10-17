
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  IndianRupee,
  MapPin,
  CalendarCheck,
  CarFront,
  Clock,
  Route,
  ChevronRight,
  Calculator,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";

const pricingFactors = [
  "Total distance and travel route",
  "Trip duration and number of travel days",
  "One-way trip or round-trip requirements",
  "Driver charges, tolls and applicable parking fees",
  "Vehicle configuration and passenger requirements",
];

const fareSteps = [
  {
    number: "01",
    title: "Share your travel route",
    description:
      "Tell the travel provider your pickup location, destination and any planned stops.",
  },
  {
    number: "02",
    title: "Confirm the trip distance",
    description:
      "Ask how the billable kilometres will be calculated, including any return journey.",
  },
  {
    number: "03",
    title: "Check additional charges",
    description:
      "Confirm driver allowance, tolls, parking, extra kilometres and other applicable costs.",
  },
  {
    number: "04",
    title: "Get the final quotation",
    description:
      "Ask for the total estimated fare and confirm the booking terms before your journey.",
  },
];

const faqs = [
  {
    question: "What is the Force Urbania price per km in Indore?",
    answer:
      "The rental rate depends on the vehicle configuration, route, trip duration and booking terms. Contact SK Tour & Travels for the current rate and a quotation based on your itinerary.",
  },
  {
    question: "How is Force Urbania rental fare calculated?",
    answer:
      "The fare may depend on the billable kilometres, trip duration and applicable additional charges. Confirm the kilometre calculation and all inclusions before booking.",
  },
  {
    question: "Is the return distance included in the rental fare?",
    answer:
      "Return-distance policies vary by booking. Ask whether the quotation covers only the onward journey or both onward and return travel.",
  },
  {
    question: "Are tolls and driver charges included in the price?",
    answer:
      "These charges depend on the quotation and rental terms. Confirm whether tolls, parking, driver allowance and other applicable costs are included or charged separately.",
  },
  {
    question: "Can I book Force Urbania for an outstation trip?",
    answer:
      "You can enquire about an outstation trip with SK Tour & Travels. Share your destination, dates, passenger count and expected itinerary to check availability and pricing.",
  },
  {
    question: "How can I get an accurate rental quotation?",
    answer:
      "Provide your pickup point, destination, travel dates, return details, passenger count and planned stops. Ask for a complete quotation with the fare calculation and additional charges explained.",
  },
];

const Blog2 = () => {
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
                Force Urbania Price per Km in Indore
              </span>
            </nav>

            {/* Category */}
            <div className="mb-4">
              <span className="inline-flex rounded-full border border-yellow-400/50 bg-yellow-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-900">
                Rental Prices
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              Force Urbania Price per Km in{" "}
              <span className="text-yellow-500">Indore</span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              Planning a group trip and want to understand Force Urbania
              rental prices in Indore? Learn how per-kilometre rates work,
              which additional charges to check and how to request a clear
              quotation for your journey with SK Tour &amp; Travels.
            </p>

            {/* Single Responsive Image */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm sm:mt-10">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1600&q=85"
                alt="Road journey and vehicle rental planning for a trip from Indore"
                className="h-56 w-full object-cover sm:h-80 lg:h-[460px]"
                fetchPriority="high"
              />
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Understand your trip costs before confirming your vehicle.
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
                  Understanding Force Urbania Rental Rates
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Force Urbania is an option for group travel, family
                  holidays, wedding transportation and corporate journeys.
                  If you are searching for Force Urbania price per km in
                  Indore, understanding the rental terms can help you
                  compare quotations and plan your travel budget.
                </p>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  However, the per-kilometre rate alone may not represent
                  the complete trip cost. The total fare can depend on
                  the route, distance, trip duration, vehicle configuration
                  and the charges included in your booking.
                </p>
              </section>

              {/* What Affects Pricing */}
              <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-7">
                <h2 className="text-xl font-extrabold text-gray-950 sm:text-2xl">
                  Factors That Affect the Rental Price
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Before choosing a rental option, check these important
                  factors that can affect the final quotation.
                </p>

                <ul className="mt-5 space-y-4">
                  {pricingFactors.map((factor) => (
                    <li
                      key={factor}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-700 sm:text-base"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-yellow-500"
                      />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Per Km Calculation */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  How to Calculate Force Urbania Rental Cost
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  A per-kilometre calculation is useful for estimating
                  distance-based travel costs. First, confirm the applicable
                  rate and the number of kilometres that will be billed.
                </p>

                <div className="mt-5 rounded-xl border border-yellow-300 bg-yellow-50 p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black">
                      <Calculator size={22} />
                    </div>

                    <h3 className="text-lg font-extrabold text-gray-950">
                      Basic Fare Calculation
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base">
                    <strong>Distance-based fare =</strong> Billable
                    kilometres × Confirmed rate per kilometre
                  </p>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    The final amount may also include additional charges
                    according to your booking terms.
                  </p>
                </div>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  For example, do not calculate your budget using only the
                  distance to your destination until the provider confirms
                  whether return kilometres, driver charges and other
                  expenses are included. This helps avoid unexpected costs.
                </p>
              </section>

              {/* Additional Charges */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  Additional Charges to Check Before Booking
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Different rental providers may follow different pricing
                  policies. Before making a booking, ask whether the
                  quotation includes the following:
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-4 sm:p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-black">
                      <Route size={22} />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-950">
                        Total Billable Distance
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-gray-600">
                        Confirm how onward travel, return distance and
                        additional stops are counted.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-4 sm:p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-black">
                      <Users size={22} />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-950">
                        Driver Allowance
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-gray-600">
                        Ask whether driver allowance or overnight charges
                        apply to your journey.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-4 sm:p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-black">
                      <MapPin size={22} />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-950">
                        Tolls and Parking
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-gray-600">
                        Confirm how tolls, parking and other route-related
                        expenses will be handled.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-4 sm:p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-black">
                      <Clock size={22} />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-950">
                        Trip Duration
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-gray-600">
                        Ask about waiting time, extra hours and the terms
                        for multi-day trips.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Booking Steps */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  How to Get a Force Urbania Rental Quote in Indore
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  You can get a more useful quotation by sharing your trip
                  details clearly. Follow these steps when contacting a
                  travel provider.
                </p>

                <div className="mt-6 space-y-5">
                  {fareSteps.map((step) => (
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

              {/* Best Uses */}
              <section className="mb-10">
                <h2 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  When Is Force Urbania a Practical Choice?
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Force Urbania may be worth considering when several
                  passengers need to travel together. It can be suitable
                  for family outings, wedding functions, corporate events
                  and outstation journeys, depending on the available
                  vehicle configuration.
                </p>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  When comparing the price with other vehicles, consider
                  the number of passengers, luggage requirements, comfort
                  and total trip cost instead of comparing the per-kilometre
                  rate alone.
                </p>

                <Link
                  to="/blog/force-urbania-rental-in-indore"
                  className="mt-5 inline-flex items-center gap-2 font-bold text-gray-950 underline decoration-yellow-400 decoration-2 underline-offset-4 transition hover:text-yellow-600"
                >
                  Read our Force Urbania Rental Guide
                  <ArrowRight size={17} />
                </Link>
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

              {/* Internal Link */}
              <section className="border-t border-gray-200 pt-6">
                <p className="text-sm leading-7 text-gray-600">
                  Looking for more travel options? Explore our{" "}
                  <Link
                    to="/services"
                    className="font-bold text-gray-950 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:text-yellow-600"
                  >
                    travel services
                  </Link>{" "}
                  or read our{" "}
                  <Link
                    to="/blog/force-urbania-rental-in-indore"
                    className="font-bold text-gray-950 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:text-yellow-600"
                  >
                    Force Urbania rental guide
                  </Link>
                  .
                </p>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6 lg:sticky lg:top-24">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black">
                <IndianRupee size={25} />
              </div>

              <h2 className="mt-4 text-xl font-extrabold text-gray-950">
                Need a Rental Quote?
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Share your travel dates, route and passenger count to
                enquire about Force Urbania rental in Indore.
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
                  <Route
                    size={19}
                    className="mt-0.5 shrink-0 text-yellow-600"
                  />
                  <p className="text-sm text-gray-700">
                    Share your complete travel route.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-yellow-600"
                  />
                  <p className="text-sm text-gray-700">
                    Request a complete fare breakdown.
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
                Current rates and vehicle availability must be confirmed
                before booking.
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

export default Blog2;
