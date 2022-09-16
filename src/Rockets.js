import './Rockets.css';
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

function Rockets() {
  const [rockets, setRockets] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const itensPerPage = 2;
  const pages = Math.ceil(rockets.length / itensPerPage)
  const paginatedRockets = useMemo(() => rockets.slice(currentPage * itensPerPage, (currentPage + 1) * itensPerPage), [rockets, currentPage])

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((res) => res.json())
      .then((rockets) => {
        setRockets(rockets)
      })
  }, [])

  return (
    <div className="Rockets">
      <ul className="List">
        {paginatedRockets.map((rocket) => 
          <li key={rocket.id}>
            <Link to={"rockets/" + rocket.id}>
            <img src={rocket.flickr_images[0]}></img>
              <p>{rocket.name}</p>
            </Link>
             
          </li>
        )}
      </ul>
      <ul className="Pages">
        {Array(pages).fill(null).map((element, index) =>  
          <li key={"page_" + index}>
            <button onClick={() => setCurrentPage(index)}>
              {index + 1}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Rockets;
