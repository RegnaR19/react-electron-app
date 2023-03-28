import { authRedirect } from "@/hoc/authRedirect";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { follow, unfollow, setUsers, setCurrentPage, getUsers } from "../../redux/usersReducer";
import Users from "./Users";

type Props = {
   users: any,
   setUsers: any,
   pageSize: any,
   totalUsersCount: number,
   currentPage: number,
   setCurrentPage: any,
   getUsers: any
}

class UsersContainer extends React.Component<Props> {

   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
   }

   onPageChanged = (pageNumber: any) => {
      this.props.getUsers(pageNumber, this.props.setUsers)
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



export default compose(
   connect(mapStateToProps, { follow, unfollow, setCurrentPage, setUsers, getUsers })
   // authRedirect
)(UsersContainer)