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
    
    if (validateUrl(link)) {
      try {
        setError(null);
        setLoading(true);
        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${link}`
        );
        const json = await response.json();
        if (response.ok === false) {
          throw new Error(json.error);
        } else {
          setShortenedLink([...shortenedLink, json.result]);
          setLink('')
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    } else setError("Please add a link");
  }

  function validateUrl(url) {
    let regex = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/

    if (url.length > 0) {
      return regex.test(url)
    }
  }

  return (
    <Section >
      <div className="container" >
        <FormUrl onSubmit={handleSubmit}>
          <FormSubContainer >
            <InputContainer >
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
