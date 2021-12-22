import React from "react";

const FormItem = ({ data }) => {
  return (
    <section style={{ background: "rgb(191, 191, 191)" }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {data.map(({ code, full_short_link, original_link }) => (
          <div
            key={code}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{display: "flex", flex: "1", justifyContent: "space-between"}}>
              <p>{original_link}</p>
              <p>{full_short_link}</p>
            </div>

            <button>copy</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FormItem;
