import GrandSon1 from './GrandSon1'
import GrandDaughter1 from './GrandDaughter1'
import { FamilyContext } from "./FamilyContext"
import { useContext } from "react"

const Children = () => {
    const secret = useContext(FamilyContext);

  return (
    <div>
        <h2>{`Children ${secret.familyName}`}</h2>
        <GrandSon1 />
        <GrandDaughter1 />
    </div>
  )
}

export default Children