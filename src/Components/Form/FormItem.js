import React from "react";

const FormItem = ({ data }) => {
  return (
    <section style={{background: "rgb(191, 191, 191)"}}>
      {data.map(({ code, full_short_link, original_link }) => (
        <div key={code}>
          <p>{original_link}</p>
          <p>{full_short_link}</p>
          <button>copy</button>
        </div>
      ))}
    </section>
  );
};

export default FormItem;
