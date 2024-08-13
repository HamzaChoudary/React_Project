import React from 'react'

const UserContext = React.createContext()

export default UserContext; 

// we make here seprate componenets and after that we wrap it in the UserContext and it will become provider.
// Context is like Globel variable
/*{ <UserContext>
    <Login />
    <Card>
         <Dashboard />
    </Card>
</UserContext> }*/


