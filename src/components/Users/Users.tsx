import UsersPage from "./UsersPage";
import React from "react";
import Paginator from "./Paginator";

type Props = {
   users: any,
   pageSize: number,
   totalUsersCount: number,
   currentPage: number,
   onPageChanged: any
}

const Users: React.FC<Props> = (props) => {

   let usersElements = props.users.map((e: any) =>
      <UsersPage id2={e.id} key={e.id} name={e.name}
         status={e.status} img={e.photos.small} />)

   return (
      <>
         <div className="col2-app">
            <h3>Пользователи</h3>
            <Paginator pageSize={props.pageSize} users={props.users}
               totalUsersCount={props.totalUsersCount} currentPage={props.currentPage}
               onPageChanged={props.onPageChanged} />
            {usersElements}
         </div>
      </>
   )
}

export default Users