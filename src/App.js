import { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import StatisticsSection from "./Components/StatisticsSection/StatisticsSection";
import FormItem from "./Components/Form/FormItem";
import Error from "./Components/Form/Error";

function App() {
  const [shortenedLink, setShortenedLink] = useState([]);
  const [error, setError] = useState(null);

  return (
    <>
      <Header />
      <Home />
      <Form setShortenedLink={setShortenedLink} shortenedLink={shortenedLink} setError={setError} />
      {error && <Error error={error}/>}
      {/* {shortenedLink && 
        shortenedLink.map(({code}) => (
          console.log(code)
        ))} */}
        {shortenedLink && <FormItem data={shortenedLink} />}
      <StatisticsSection />
    </>
  );
}

export default App;
