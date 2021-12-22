import React, { useState } from "react";

import { FormUrl } from "./Form.styled";

const Form = ({ setShortenedLink, shortenedLink }) => {
  const [link, setLink] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    );
    const shortened = await response.json();
    if (response.ok === true) {
      setShortenedLink([...shortenedLink, shortened.result]);
    }
  }

  return (
    <section style={{ position: "relative" }}>
      <div className="container">
        <FormUrl onSubmit={handleSubmit}>
          <input
            type="text"
            style={{ fontSize: "18px", flex: "1" }}
            onChange={({ target }) => setLink(target.value)}
          />
          <button>Shorten it!</button>
        </FormUrl>
        {link && <p>{link}</p>}
      </div>
    </section>
  );
};

export default Form;
