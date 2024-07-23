interface TeamsType{
    IPL:{
        team: string,
        Clr: string
    }[]
}

export default function Teams(props: TeamsType){
    return (
        <div>
            {props.IPL.map((team) => (<div key={team.team}>{team.team} {team.Clr}</div>))}
        </div>
    )
}