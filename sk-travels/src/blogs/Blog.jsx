
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const blogs = [
  {
    id: 1,
    title: "Force Urbania Rental in Indore",
    slug: "/blog/force-urbania-rental-in-indore",
    description:
      "Looking for Force Urbania rental in Indore? Explore a comfortable travel option for family trips, weddings, corporate travel and outstation journeys. Check vehicle details and plan your next trip with SK Tour & Travels.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    category: "Force Urbania Rental",
  },
  {
    id: 2,
    title: "Force Urbania Price per Km in Indore",
    slug: "/blog/force-urbania-price-per-km-in-indore",
    description:
      "Understand Force Urbania rental pricing in Indore, the factors that affect your trip cost and what to check before booking a vehicle.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=85",
    category: "Rental Prices",
  },
  {
    id: 3,
    title: "Tempo Traveller on Rent in Indore",
    slug: "/blog/tempo-traveller-on-rent-in-indore",
    description:
      "Planning a group trip? Explore Tempo Traveller rental options in Indore for family holidays, group tours, weddings and outstation journeys.",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85",
    category: "Vehicle Rental",
  },
  {
    id: 4,
    title: "Innova Rental in Indore",
    slug: "/blog/innova-rental-in-indore",
    description:
      "Discover Innova rental options in Indore for comfortable family travel, business trips, airport transfers and outstation journeys.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
    category: "Car Rental",
  },
  {
    id: 5,
    title: "Outstation Cab Service in Indore",
    slug: "/blog/outstation-cab-service-in-indore",
    description:
      "Planning an outstation journey from Indore? Learn how to choose the right cab, compare vehicle options and prepare for a comfortable trip.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    category: "Outstation Travel",
  },
  {
    id: 6,
    title: "Airport Taxi Service in Indore",
    slug: "/blog/airport-taxi-service-in-indore",
    description:
      "Learn how to arrange airport pickup and drop in Indore, choose a suitable vehicle and plan your journey with less hassle.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
    category: "Airport Transfers",
  },
  {
    id: 7,
    title: "Car Rental in Indore with Driver",
    slug: "/blog/car-rental-in-indore-with-driver",
    description:
      "Looking for a car rental with a driver in Indore? Explore vehicle options for local travel, family outings, business trips and outstation journeys.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
    category: "Car Rental",
  },
  {
    id: 8,
    title: "Force Urbania on Rent for Wedding",
    slug: "/blog/force-urbania-on-rent-for-wedding",
    description:
      "Planning wedding transportation? Discover how Force Urbania can help transport wedding guests and family members comfortably.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    category: "Wedding Travel",
  },
  {
    id: 9,
    title: "Indore to Ujjain Taxi Fare",
    slug: "/blog/indore-to-ujjain-taxi-fare",
    description:
      "Planning a trip from Indore to Ujjain? Learn about route planning, vehicle selection, taxi fare factors and booking tips before travelling.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    category: "Route & Taxi Fare",
  },
  {
    id: 10,
    title: "Indore to Omkareshwar Taxi Fare",
    slug: "/blog/indore-to-omkareshwar-taxi-fare",
    description:
      "Planning a visit to Omkareshwar from Indore? Explore travel planning tips, vehicle options and the factors that affect your taxi fare.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
    category: "Route & Taxi Fare",
  },
];


const Blog = () => {
  return (
    <>
      <Navbar />

      <section className="w-full bg-white px-4 py-10 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          {/* Page Heading */}
          <div className="mb-8 text-center md:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600 sm:text-sm">
              Travel Guides & Tips
            </p>

            <h1 className="mt-3 text-3xl font-extrabold text-gray-950 sm:text-4xl md:text-5xl">
              Our <span className="text-yellow-500">Blogs</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Explore travel tips, vehicle rental guides and helpful
              information for your next journey with SK Tour & Travels.
            </p>
          </div>

          {/* Blog Card */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                to={blog.slug}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl"
              >
                {/* Image */}
                <div className="aspect-[5/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={blog.image}
                    alt="Force Urbania rental in Indore for group travel"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-yellow-600">
                    {blog.category}
                  </p>

                  <h2 className="text-lg font-extrabold leading-tight text-gray-950 transition-colors group-hover:text-yellow-600 md:text-xl">
                    {blog.title}
                  </h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
                    {blog.description}
                  </p>

                  {/* Read More */}
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gray-950 transition-colors group-hover:text-yellow-600">
                    Read More
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
