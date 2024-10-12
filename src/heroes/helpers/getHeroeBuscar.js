import { fetchHeroesFromApi } from "../data/heroes";

export const getHeroeBuscar = async (buscar) => {
  const heroes = await fetchHeroesFromApi(buscar);
  return heroes;
};
