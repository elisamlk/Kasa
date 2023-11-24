import React, { useState, useEffect } from "react";

const ApartmentList = () => {
  const [apartment, setApartment] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json"); // Important ! Fichier dans le dossier public
        const jsonData = await response.json();
        setApartment(jsonData);
        console.log(apartment);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apartment]);

  return (
    <div>
      <h2>Liste des appartements</h2>
      <ul>
        {apartment.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApartmentList;
