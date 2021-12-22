import React, { useState } from "react";

import { FormUrl } from "./Form.styled";

const Form = ({ setShortenedLink }) => {
  const [link, setLink] = useState("");

  return (
    <section style={{ position: "relative" }}>
      <div className="container">
        <FormUrl
          onSubmit={(e) => e.preventDefault()}
          
        >
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
