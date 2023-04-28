import React from "react";
import s from './Users.module.css'

type Props = {
   users: any,
   pageSize: number,
   totalUsersCount: number,
   currentPage: number,
   onPageChanged: any
}

const Paginator: React.FC<Props> = (props) => {

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
      </>
   )
}

export default Paginator