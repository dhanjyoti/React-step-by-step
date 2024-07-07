import { Login } from "./Login"
import { ProfileProps } from "./Profit"

type PrivateProps ={
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}

export const Private =({isLoggedIn, component: Component}: PrivateProps)=>{
    if(isLoggedIn){
        return <Component name="dhanjyoti"/>
    } else {
        return <Login/>
    }
}