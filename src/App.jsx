import React from "react";
import Header from "./components/header/Header";
import IntroView from "./views/introView/IntroView";
import HotelsViews from "./views/hotelsView/HotelsViews";
import TravelView from "./views/travelView/TravelView";
import ActivityView from "./views/activityView/ActivityView";
import AboutView from "./views/aboutView/AboutView";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <IntroView />
        <HotelsViews />
        <TravelView />
        <ActivityView />
        <AboutView />
      </main>
      <Footer />
    </>
  );
};

export default App;
