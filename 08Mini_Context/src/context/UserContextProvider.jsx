import React from "react";
import UserContext from "./UserContext";

// as we learn about Outlite jo value ho os ka header as it rakho footer as it rakho or jo b outlite ho os ko output krwa do.
// children is not magical jysy hm apna div wagyra dyty hn wysy hi ha  children is generaic name. jo b ap ky pas aa rha os ko name dy do.

const UserContextProvider = ({children}) => {
    const  {user, setUser} = React.useState(null)

 return(
    <UserContext.Provider value={{user, setUser}}>
    {children}
    </UserContext.Provider>
 )
}

export default UserContextProvider