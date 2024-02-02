import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";
import ApartmentTitle from "../components/apartmentTitle/ApartmentTitle";
import Tags from "../components/tags/Tags";
import Host from "../components/host/Host";
import Rating from "../components/rating/Rating";
import Collapse from "../components/collapse/Collapse";
import "./ApartmentPage.scss";

const ApartmentPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [apartmentDetail, setApartmentDetail] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../data.json");
        const jsonData = await response.json();
        setApartmentDetail(jsonData.apartments);
        // console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  if (apartmentDetail === null) {
    // rediriger vers page 404
    return <div>Loading...</div>;
  }
  const filteredApartment = apartmentDetail.find((item) => item.id === id);
  if (!filteredApartment) {
    // Gérer le cas où aucun appartement n'est trouvé avec l'ID donné
    // return <div>Apartment not found</div>;
    // ici faire la redirection vers page 404
    history.push("/404");
    return null;
  }
  const listPictures = filteredApartment.pictures;
  const host = filteredApartment.host;

  console.log("filtre", filteredApartment.equipments);
  const equipements = filteredApartment.equipments.join(`\n `);
  console.log(listPictures);
  return (
    <main>
      <section className="apartment-list">
        <Carousel id={id} pictures={listPictures} />
      </section>
      <div class="part-info">
        <section className="part-1">
          <ApartmentTitle
            id={filteredApartment.id}
            title={filteredApartment.title}
            location={filteredApartment.location}
          />
          <Tags tags={filteredApartment.tags} />

        </section>

        <section className="part-2">
          <Host picture={host.picture} name={host.name} />

          <Rating rating={filteredApartment.rating} />
        </section>
      </div>


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
