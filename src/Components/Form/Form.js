import React, { useState } from "react";
import { FormUrl, Section } from "./Form.styled";

const Form = ({ setShortenedLink, shortenedLink }) => {
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      const json = await response.json();
      if (response.ok === false) {
        throw new Error(json.error);
      } else {
        setShortenedLink([...shortenedLink, json.result]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section>
      <div className="container">
        <FormUrl onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="link"
              name="link"
              value={link}
              style={{ fontSize: "18px", flex: "1" }}
              onChange={({ target }) => setLink(target.value)}
              required
            />
            {loading ? <button disabled>Shorten it!</button> : <button>Shorten it!</button>}
          </div>
          {error && <p>{error}</p>}
        </FormUrl>
      </div>
    </Section>
  );
};

export default Form;
