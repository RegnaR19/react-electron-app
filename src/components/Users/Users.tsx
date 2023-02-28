import UsersPage from "./UsersPage";
import React from "react";

type Props = {
   users?: any,
   setUsers?: any
}

let Users: React.FC<Props> = ({ ...props }) => {

   let usersElements = props.users.map((e: any) => <UsersPage id2={e.id} key={e.id} name={e.name}
      status={e.status} city={e.city} img={e.img} />)

   return (
      <>
         {usersElements}
      </>
   )
}

export default Users;