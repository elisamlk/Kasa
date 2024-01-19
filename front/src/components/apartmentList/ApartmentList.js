import React, { useState, useEffect } from "react";
import "./ApartmentList.scss";
import ApartmentCard from "../apartmentCard/ApartmentCard";

const ApartmentList = () => {
  const [apartment, setApartment] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json"); // Important ! Fichier dans le dossier public
        const jsonData = await response.json();
        // console.log(jsonData)
        setApartment(jsonData.apartments);
        // console.log(apartment);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apartment]);

  return (
    <section className="apartment-list">
      {apartment.map((item) => (
        <ApartmentCard id={item.id} cover={item.cover} title={item.title} />
      ))}
    </section>
  );
};

export default ApartmentList;
