import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount } from "../../redux/usersReducer";
import Users from "./Users";
import { usersAPI } from "@/api/api";

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
      usersAPI.getUsers(this.props.currentPage).then((data: any) => {
         this.props.setUsers(data.items)
         this.props.setTotalUsersCount(data.totalCount)
      })
   }

   onPageChanged = (pageNumber: any) => {
      this.props.setCurrentPage(pageNumber)
      usersAPI.getUsers(pageNumber)
         .then((data: any) => {
            this.props.setUsers(data.items)
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