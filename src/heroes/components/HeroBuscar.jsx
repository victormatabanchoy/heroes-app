import { useEffect, useState } from "react";
import { getHeroeBuscar } from "../helpers";
import { HeroCardBuscar } from "./HeroCardBuscar";

export const HeroBuscar = ({ buscar, triggered }) => {
  const [heroes, setHeroes] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchHeroes = async () => {
      if (triggered) {
        setIsSearching(true);
        const fetchedHeroes = await getHeroeBuscar(buscar);
        setHeroes(fetchedHeroes);
        setIsSearching(false);
      }
    };

    fetchHeroes();
  }, [buscar, triggered]);

  return (
    <div className="row">
      {isSearching && <p>Buscando héroes...</p>}
      {heroes.length > 0 ? (
        <div className="row">
          {heroes.map((hero) => (
            <div key={hero.id} className="col-md-6 mb-4">
              <HeroCardBuscar {...hero} />
            </div>
          ))}
        </div>
      ) : (
        !isSearching && <p>No se encontró ningún héroe.</p>
      )}
    </div>
  );
};
