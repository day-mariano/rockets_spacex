import './Rocket.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Rocket() {
  const [rocket, setRocket] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/rockets/" + id)
      .then((res) => res.json())
      .then((rocket) => {
        setRocket(rocket)
      })
  }, [])

  return (
    <div className= "HandleRocket">
      {rocket ? (
        <div className="Rocket">
          <h2>{rocket.name}</h2>
          <p>{rocket.description}</p>
          <p>Altura: {rocket.height.meters} m </p>
          <p>Peso: {rocket.mass.kg} kg</p>
          <p>Diametro: {rocket.diameter.meters}</p>
          <img src={rocket.flickr_images[0]}></img>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default Rocket;
