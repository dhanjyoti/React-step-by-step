interface PropsType{
    name: string
    age: number
    isEligible: boolean
}

export default function HomeCOM(props: PropsType){
    return (
        <div>
            hello everyone {props.name}
            {props.isEligible ?
            <p>Your are is {props.age}</p> :
            <p>You cannot vote</p>}
        </div>
    )
}