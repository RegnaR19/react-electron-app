import UsersPage from "./UsersPage";
import React from "react";
import axios from 'axios'

type Props = {
   users: any,
   setUsers: any,
   pageSize: number,
   totalUsersCount: number
}

export default class Users extends React.Component<Props> {

   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
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
      let pagesCount = this.props.totalUsersCount / this.props.pageSize
      
      return (
         <>
            Страниц: {pagesSize} и юзеров: {totalUsersCount}<br />
            Выходит кол-во страниц: {pagesCount}
            {usersElements}
         </>
      )
   }
}