import React, { useState } from "react";

import { FormUrl, Section } from "./Form.styled";

const Form = ({ setShortenedLink, shortenedLink, setError }) => {
  const [link, setLink] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    );
    const shortened = await response.json();
    if (response.ok === true) {
      setShortenedLink([...shortenedLink, shortened.result]);
    } else {
      setError(shortened.error);
    }
  }

  return (
    <Section>
      <div className="container">
        <FormUrl onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              style={{ fontSize: "18px", flex: "1" }}
              onChange={({ target }) => setLink(target.value)}
              required
            />
            <button>Shorten it!</button>
          </div>
        </FormUrl>
      </div>
    </Section>
  );
};

export default Form;
