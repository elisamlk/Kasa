import React from "react";
import { useParams } from "react-router-dom";

const ApartmentPage = () => {
  const { id } = useParams();
  console.log("apartmentpage",id);
  return (
    <main>
      <h1>Page Appartement - {id}</h1>
    </main>
  );
};

export default ApartmentPage;
