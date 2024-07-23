interface PersonType{
    Details: {
        FName: string,
        LName: string,
        Age: number,
        isVegan: boolean
    }
}

export default function PersonDetail(props: PersonType){
    return (
        <div>
            <div>First Name - {props.Details.FName}</div>
            <div>Last Name - {props.Details.LName}</div>
            <div>Age - {props.Details.Age}</div>
            <div>{props.Details.isVegan ? 
            <p>He is Vegan</p> :
            <p>He is not Vegan</p>
            }</div>
        </div>
    )
}