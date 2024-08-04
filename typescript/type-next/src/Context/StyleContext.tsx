import { createContext } from "react";
import { StyleObj } from "./Style";

export const StyleObjContext = createContext(StyleObj);
interface StyleContextType {
    children : React.ReactNode;
}

export const StyleContextProvider = ({children}: StyleContextType) => {
    return <StyleObjContext.Provider value={StyleObj}>
        {children}
    </StyleObjContext.Provider>
}