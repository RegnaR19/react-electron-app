import UsersPage from "./UsersPage";
import React from "react";
import axios from 'axios'
import s from './Users.module.css'

type Props = {
   users: any,
   setUsers: any,
   pageSize: number,
   totalUsersCount: number,
   currentPage: number,
   setCurrentPage: any
}

export default class Users extends React.Component<Props> {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`)
         .then((response: any) => {
            this.props.setUsers(response.data.items)
         })
   }

   render() {

      let usersElements = this.props.users.map((e: any) =>
         <UsersPage id2={e.id} name={e.name}
            status={e.status} city={e.city} img={e.img} />)

      let pagesSize = this.props.pageSize
      let totalUsersCount = this.props.totalUsersCount
      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

      let pages = []
      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i)
      }

      return (
         <>
            Страниц: {pagesSize} и юзеров: {totalUsersCount}<br />
            Выходит кол-во страниц: {pagesCount}<br />
            {pages.map((e: any) => {
               return <span className={this.props.currentPage === e ? s.selectedPage : ""}
                  onClick={() => { this.props.setCurrentPage(e) }}>
                  {e}
               </span>
            })}

            {usersElements}
         </>
      )
   }
}