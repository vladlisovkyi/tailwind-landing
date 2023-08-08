import React, { useState } from "react";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Feature from "./components/Feature/Feature";
import Creations from "./components/Creations/Creations";
import Footer from "./components/Footer/Footer";
import GoTopButton from "./components/GoTopButton/GoTopButton";

function App() {
  const [heroHeight, setHeroHeight] = useState<number>(0);
  return (
    <div>
      <Header heroHeight={heroHeight}/>
      <Hero setHeroHeight={setHeroHeight}/>
      <Feature />
      <Creations />
      <GoTopButton heroHeight={heroHeight}/>
      <Footer />
    </div>
  );
}

export default App;
