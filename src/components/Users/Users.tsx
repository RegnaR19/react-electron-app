import UsersPage from "./UsersPage";
import React from "react";
import Paginator from "./Paginator";
import Indent10 from "../Forms/Indent";

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
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

   return (
      <>
         <div className="col2-app">
            <div className='big-title'>Пользователи</div>
            На странице: по {props.pageSize}, количество: {props.totalUsersCount}, страниц: {pagesCount}<br /><br />

            <Paginator pageSize={props.pageSize}
               totalUsersCount={props.totalUsersCount} currentPage={props.currentPage}
               onPageChanged={props.onPageChanged} />
            <Indent10 />
            {usersElements}
            <Indent10 />
            <Paginator pageSize={props.pageSize}
               totalUsersCount={props.totalUsersCount} currentPage={props.currentPage}
               onPageChanged={props.onPageChanged} />
         </div>
      </>
   )
}

export default Users