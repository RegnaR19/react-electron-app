import UsersPage from "./UsersPage";
import React from "react";
import s from './Users.module.css'

type Props = {
   users: any,
   pageSize: number,
   totalUsersCount: number,
   currentPage: number,
   onPageChanged: any
}

const Users: React.FC<Props> = ({ ...props }) => {

   let usersElements = props.users.map((e: any) =>
      <UsersPage id2={e.id} name={e.name}
         status={e.status} city={e.city} img={e.img} />)

   let pagesSize = props.pageSize
   let totalUsersCount = props.totalUsersCount
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   return (
      <>
         На странице: {pagesSize} и юзеров: {totalUsersCount}<br />
         Кол-во страниц: {pagesCount}<br />
         {pages.map((e: any) => {
            return <span className={props.currentPage === e ? s.selectedPage : ""}
               onClick={() => { props.onPageChanged(e) }}>
               {e}
            </span>
         })}

         {usersElements}
      </>
   )
}

export default Users