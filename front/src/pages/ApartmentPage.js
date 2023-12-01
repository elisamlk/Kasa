import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Carousel from "../components/carousel/Carousel";
// import ApartmentTitle from "../components/apartmentTitle/ApartmentTitle";
// import Tags from "../components/tags/Tags";

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

  const filteredApartments = apartmentDetail.find((item) => item.id === id);
  console.log("filtre",filteredApartments)
  const pictures = filteredApartments.pictures;
  console.log(pictures);


  return (
    <main>
      {/* <section className="apartment-list">
        {filteredApartments.map((item) => (
          <Carousel id={item.id} pictures={item.pictures} />
        ))}
      </section> */}
      {/* <section>
        <Carousel id ={id} pictures={pictures}/>
      </section> */}

      {/* <section>
        {filteredApartments.map((item) => (
          <ApartmentTitle id={item.id} title={item.title} location={item.location} />
       
        
        ))}

      </section> */}
      {/* {filteredApartments.map((item)=>(
        <Tags id={item.id} tags={item.tags}/>
      ))} */}
      {/* <div>
        <Tags id={filteredApartments.id} tags={filteredApartments.tags}/>
      </div> */}

    </main>

  );
};

export default ApartmentPage;
