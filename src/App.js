import { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import StatisticsSection from "./Components/StatisticsSection/StatisticsSection";
import FormItem from "./Components/Form/FormItem";
import BoostSection from "./Components/BoostSection/BoostSection";

function App() {
  const [shortenedLink, setShortenedLink] = useState([]);

  return (
    <>
      <Header />
      <Home />
      <Form setShortenedLink={setShortenedLink} shortenedLink={shortenedLink} />
      {shortenedLink && <FormItem data={shortenedLink} />}
      <StatisticsSection />
      <BoostSection />
    </>
  );
}

export default App;
