import getUsers from "../../../../services/getUsers"

export default async function Page(props){
    const getUsersList  = getUsers();
    const users = await getUsersList;
    const currentId = props.params.userId;
    const userData =  users[currentId - 1];
    console.log(userData)
    return (
        <div>
            <h2>User detail page</h2>
            <h2>Id: {userData.id}</h2>
            <h2>Name: {userData.name}</h2>
            <h2>Website: {userData.website}</h2>
        </div>
    )
}
export async function generateStaticParams(){
    const getUsersList  = getUsers();
    const users = await getUsersList;
    return users.map(user=>({
        userId:user.id.toString()
    }))
}