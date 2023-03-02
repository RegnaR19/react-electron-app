import UsersPage from "./UsersPage";
import React from "react";
import axios from 'axios'

type Props = {
   users: any,
   setUsers: any
}

export default class Users extends React.Component<Props> {

   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then((response: any) => {
            this.props.setUsers(response.data.items)
         })
   }

   usersElements = this.props.users.map((e: any) =>
      <UsersPage id2={e.id} name={e.name}
         status={e.status} city={e.city} img={e.img} />)

   render() {
      return (
         <>
            {this.usersElements}
         </>
      )
   }
}