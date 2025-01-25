import React from "react";
import "./Statistic.style.scss";

const StatisticsSection = () => {
  const stats = [
    { number: "1M+", label: "CUSTOMERS" },
    { number: "12+", label: "YEARS OF EXCELLENCE" },
    { number: "41+", label: "R&D ENGINEERS" },
    { number: "78+", label: "COUNTRIES" },
    { number: "3287+", label: "PARTNERS" },
    { number: "41+", label: "AWARDS RECEIVED" },
  ];

  return (
    <div className="statistics-section">
      <h4>WHY REGISTER KARO</h4>
      <h2>Some Numbers are important</h2>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsSection;
