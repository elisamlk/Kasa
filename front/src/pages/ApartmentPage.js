import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";
import ApartmentTitle from "../components/apartmentTitle/ApartmentTitle";
import Tags from "../components/tags/Tags";
import Host from "../components/host/Host";
import Rating from "../components/rating/Rating";
import Collapse from "../components/collapse/Collapse";
import "./ApartmentPage.scss";

const ApartmentPage = () => {
  const { id } = useParams();
  const [apartmentDetail, setApartmentDetail] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../data.json");
        const jsonData = await response.json();
        setApartmentDetail(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  if (apartmentDetail === null) {
    // Afficher un message de chargement ou un composant de chargement
    return <div>Loading...</div>;
  }
  const filteredApartment = apartmentDetail.find((item) => item.id === id);
  if (!filteredApartment) {
    // Gérer le cas où aucun appartement n'est trouvé avec l'ID donné
    return <div>Apartment not found</div>;
  }
  const listPictures = filteredApartment.pictures;
  const host = filteredApartment.host;

  console.log("filtre", filteredApartment.equipments);
  const equipements = filteredApartment.equipments.join('\n');
  console.log(listPictures);
  return (
    <main>
      <section className="apartment-list">
        <Carousel id={id} pictures={listPictures} />
      </section>

      <section className="part-1">
        <ApartmentTitle
          id={filteredApartment.id}
          title={filteredApartment.title}
          location={filteredApartment.location}
        />
        <Host picture={host.picture} name={host.name} />
      </section>

      <section className="part-2">
        <Tags tags={filteredApartment.tags} />
        <Rating rating={filteredApartment.rating} />
      </section>
      <section className="collapse-section">
        <Collapse title="Description" content={filteredApartment.description} />
        <Collapse
          title="Equipement"
          content={equipements}
        />
      </section>
    </main>
  );
};
export default ApartmentPage;
