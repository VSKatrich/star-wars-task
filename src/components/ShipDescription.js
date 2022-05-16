import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getShipDescription } from "../api/api"

import st from "./ShipDescription.module.css"

const ShipDescription = () => {
  const params = useParams();
  const { shipId } = params;

  const [shipDescription, setShipDescription] = useState({})

  useEffect(() => {
    getShipDescription(shipId).then(
      dataShip => setShipDescription(dataShip)
    )
  }, [shipId])

  return (
    <div className={st.container}>
      <div className={st.name}>
        {shipDescription.name}
      </div>

      <div className={st.item}>
        <b>model:</b> {shipDescription.model}
      </div>

      <div className={st.item}>
        <b>passengers:</b> {shipDescription.passengers}
      </div>
    </div>
  )
}

export default ShipDescription