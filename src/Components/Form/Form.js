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
    if(link) {
      try {
        setError(null)
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
    } else setError("Please add a link");
  }

  return (
    <Section>
      <div className="container">
        <FormUrl onSubmit={handleSubmit} style={{position: "relative"}}>
          <FormSubContainer>
            <InputContainer>
              <Input
                type="text"
                id="link"
                name="link"
                value={link}
                onChange={({ target }) => setLink(target.value)}
                placeholder="Shorten a link here..."
                error={error}
              />
              {error && <Error>{error}</Error>}
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
