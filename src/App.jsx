import Hero from "./components/hero";
import NavBar from "./components/navbar";
import Features from "./components/features";
import Cta from "./components/cta";
import Women from "./components/women";
import Men from "./components/men";
import Letter from "./components/letter";
import Footer from "./components/footer";
import {motion} from 'framer-motion'

function App() {
  return (
    <motion.div initial="initial" animate="animate">
      <NavBar />
      <Hero />
      <Features />
      <Women />
      <Cta />
      <Men />
      <Letter/>
      <Footer />
    </motion.div>
  );
}

export default App;
