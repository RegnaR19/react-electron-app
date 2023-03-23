import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount } from "../../redux/usersReducer";
import Users from "./Users";
import axios from 'axios'
import { getUsers } from "@/api/api";

type Props = {
   users: any,
   setUsers: any,
   pageSize: any,
   totalUsersCount: number,
   currentPage: number,
   setCurrentPage: any,
   setTotalUsersCount: any
}

class UsersContainer extends React.Component<Props> {

   componentDidMount() {
      getUsers(this.props.currentPage).then((response: any) => {
         this.props.setUsers(response.data.items)
         this.props.setTotalUsersCount(response.data.totalCount)
      })
   }

   onPageChanged = (pageNumber: any) => {
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}`)
         .then((response: any) => {
            this.props.setUsers(response.data.items)
         })
   }

   render() {
      return <>
         <Users totalUsersCount={this.props.totalUsersCount}
            users={this.props.users}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
         />
      </>
   }
}

let mapStateToProps = (state: any) => {
   return {
      users: state.usersPage.usersList,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage
   }
}


export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount })(UsersContainer)