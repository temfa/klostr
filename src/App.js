import { Route, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Landing from "./pages/landing/landing";
import GetStarted from "./pages/get-started/getStarted";

function App() {
  const variants = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={Route}
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
        className="">
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
