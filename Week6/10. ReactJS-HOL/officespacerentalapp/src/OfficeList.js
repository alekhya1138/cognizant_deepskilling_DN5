import React from "react";
import "./OfficeList.css";

const OfficeList = () => {
  const offices = [
    {
      name: "Tech Park A",
      rent: 55000,
      address: "Hyderabad",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c"
    },
    {
      name: "Biz Hub B",
      rent: 75000,
      address: "Bangalore",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    },
    {
      name: "WorkSpace C",
      rent: 60000,
      address: "Chennai",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36"
    }
  ];

  return (
    <div className="container">
      {offices.map((office, index) => (
        <div key={index} className="card">
          <img src={office.image} alt="office" className="office-img" />
          <h2>{office.name}</h2>
          <p><b>Address:</b> {office.address}</p>
          <p className={office.rent > 60000 ? "high" : "low"}>
            Rent: ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OfficeList;