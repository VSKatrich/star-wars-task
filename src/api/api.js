import axios from "axios"

export const getEpisode = () => {
  return axios.get('https://swapi.dev/api/films/1/').then(res => res.data)
}

export const getShipDescription = (shipNumber) => {
  return axios.get(`https://swapi.dev/api/starships/${shipNumber}`).then(res => res.data)
}