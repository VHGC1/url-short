import React from "react";
import Bg from "../../Assets/bg-shorten-desktop.svg";

const Form = () => {
  return (
    <section style={{ position: "relative" }}>
      <div className="container">
        <form
          style={{
            backgroundColor: "hsl(257, 27%, 26%)",
            backgroundImage: `url('${Bg}')`,
            padding: "50px",
            display: "flex",
            borderRadius: "0.5rem",
            marginBottom: "-4rem",
          }}
        >
          <input type="text" style={{ fontSize: "18px", flex: "1" }} />
          <button>Shorten it!</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
