import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./page/home";
import { Portfolio } from "./page/portfolio";
import { ContactUs } from "./page/contact";
import { About } from "./page/about";
import { Socialicons } from "./social";
import { motion, AnimatePresence } from 'framer-motion';

function AppRoutes() {
  const location = useLocation();

  return (
    <div className="s_c">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: 10 }} 
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.4 }} 
          style={{ position: 'absolute', width: '100%' }} 
        >
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Socialicons />
    </div>
  );
}

export default AppRoutes;