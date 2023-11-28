import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";

const ApartmentPage = () => {
  const { id } = useParams();
  const [apartmentDetail, setApartmentDetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../data.json"); // Important ! Fichier dans le dossier public
        const jsonData = await response.json();
        setApartmentDetail(jsonData);
        console.log(apartmentDetail);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apartmentDetail]);

  const filteredApartments = apartmentDetail.filter((item) => item.id === id);

  console.log("apartmentpage", id);
  return (
    <section className="apartment-list">
      {filteredApartments.map((item) => (
        <Carousel id={item.id} pictures={item.pictures} />
      ))}
    </section>
  );
};

export default ApartmentPage;
