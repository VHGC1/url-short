import React from "react";

const StatisticsSection = () => {
  return (
    <section style={{ background: "#F0F1F6" }}>
      <div className="container">
        <div style={{ padding: "100px 0" }}>
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboar
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded link help instil confidence in your content.
            </p>
          </div>
          <div>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div>
            <h3>Fully Customizable</h3>
            <p>
              improved brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
