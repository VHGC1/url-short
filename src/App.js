import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import StatisticsSection from "./Components/StatisticsSection/StatisticsSection";
import FormItem from "./Components/Form/FormItem"

function App() {
  const [shortenedLink, setShortenedLink] = useState([])

  useEffect(() => {
    console.log(shortenedLink)
  }, [shortenedLink])

  return (
    <>
      <Header />
      <Home />
      <Form setShortenedLink={setShortenedLink} shortenedLink={shortenedLink} />
      {shortenedLink && shortenedLink.map((link) => <FormItem key={link.code} data={shortenedLink}/>)}
      <StatisticsSection />0
    </>
  );
}

export default App;
