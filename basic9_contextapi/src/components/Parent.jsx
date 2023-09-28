import Children from "./Children"

const Parent = ({secret}) => {
  return (
    <div>
        <h1>{`Parent ${secret.familyName}`}</h1>
        <p>{secret.onlyParentCanSee()}</p>
        <Children secret={secret} />
    </div>
  )
}

export default Parent