import React from "react";
import { CopyButton, UrlShort } from "./FormItem.styled";

const FormItem = ({ data }) => {
  
  return (
    <section style={{background: "#F0F1F6", padding: "1rem 0"}}>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        
        {data.map(({ code, full_short_link, original_link }) => (
          <UrlShort
            key={code += Math.random() * 10}
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

            <CopyButton>copy</CopyButton>
          </UrlShort>
        ))}
      </div>
    </section>
  );
};

export default FormItem;
