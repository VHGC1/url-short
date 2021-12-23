import React, { useState } from "react";
import {
  Error,
  FormSubContainer,
  FormUrl,
  Input,
  InputContainer,
  Section,
  ShortenButton,
} from "./Form.styled";

const Form = ({ setShortenedLink, shortenedLink }) => {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
          <FormSubContainer>
            <InputContainer>
              <Input
                type="text"
                id="link"
                name="link"
                value={link}
                onChange={({ target }) => setLink(target.value)}
                placeholder="Shorten a link here..."
                required
              />
              {error && <Error>error</Error>}
            </InputContainer>
            {loading ? (
              <ShortenButton disabled>Shorten it!</ShortenButton>
            ) : (
              <ShortenButton>Shorten it!</ShortenButton>
            )}
          </FormSubContainer>
        </FormUrl>
      </div>
    </Section>
  );
};

export default Form;
