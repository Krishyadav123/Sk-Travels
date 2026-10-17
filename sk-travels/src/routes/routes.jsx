
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Services from "../pages/services/Services";

import Blog from "../blogs/Blog";
import Blog1 from "../blogs/components/Blog1";
import Blog2 from "../blogs/components/Blog2";
import Blog3 from "../blogs/components/Blog3";
import Blog4 from "../blogs/components/Blog4";
import Blog5 from "../blogs/components/Blog5";
import Blog6 from "../blogs/components/Blog6";
import Blog7 from "../blogs/components/Blog7";
import Blog8 from "../blogs/components/Blog8";
import Blog9 from "../blogs/components/Blog9";
import Blog10 from "../blogs/components/Blog10";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />

      {/* Blog Listing */}
      <Route path="/blogs" element={<Blog />} />

      {/* Individual Blog Pages */}
      <Route
        path="/blog/force-urbania-rental-in-indore"
        element={<Blog1 />}
      />

      <Route
        path="/blog/force-urbania-price-per-km-in-indore"
        element={<Blog2 />}
      />

      <Route
        path="/blog/tempo-traveller-on-rent-in-indore"
        element={<Blog3 />}
      />

      <Route
        path="/blog/innova-rental-in-indore"
        element={<Blog4 />}
      />

      <Route
        path="/blog/outstation-cab-service-in-indore"
        element={<Blog5 />}
      />

      <Route
        path="/blog/airport-taxi-service-in-indore"
        element={<Blog6 />}
      />

      <Route
        path="/blog/car-rental-in-indore-with-driver"
        element={<Blog7 />}
      />

      <Route
        path="/blog/force-urbania-on-rent-for-wedding"
        element={<Blog8 />}
      />

      <Route
        path="/blog/indore-to-ujjain-taxi-fare"
        element={<Blog9 />}
      />

      <Route
        path="/blog/indore-to-omkareshwar-taxi-fare"
        element={<Blog10 />}
      />
    </Routes>
  );
};

export default AllRoutes;
