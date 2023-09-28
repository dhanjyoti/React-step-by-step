import { FamilyContext } from "./FamilyContext"
import { useContext } from "react"

const GrandDaughter1 = () => {
  const secret = useContext(FamilyContext);
  return (
    <div>
      <h3>{`Grand daughter ${secret.familyName}`}</h3>
      <p>{secret.onlyGrandChildrenShouldKnow()}</p>
    </div>
  )
}

export default GrandDaughter1