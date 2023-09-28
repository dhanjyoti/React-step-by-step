import { FamilyContext } from "./FamilyContext"
import { useContext } from "react"

const GrandSon1 = () => {
  const secret = useContext(FamilyContext);

  return (
    <div>
      <h3>{`Grand son ${secret.familyName}`}</h3>
      <p>{secret.onlyGrandChildrenShouldKnow()}</p>
    </div>
  )
}

export default GrandSon1;