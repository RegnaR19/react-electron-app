import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { setUsers, setCurrentPage, getUsers } from "../../redux/usersReducer";
import Users from "./Users";

type Props = {
   users: any,
   setUsers: any,
   pageSize: number,
   totalUsersCount: number,
   currentPage: number,
   getUsers: any
}

const UsersContainer: React.FC<Props> = (props) => {

   useEffect(() => {
      props.getUsers(props.currentPage, props.pageSize)
   }, [])


   const onPageChanged = (pageNumber: any) => {
      props.getUsers(pageNumber, props.setUsers)
   }

   return <>
      <Users totalUsersCount={props.totalUsersCount}
         users={props.users}
         pageSize={props.pageSize}
         currentPage={props.currentPage}
         onPageChanged={onPageChanged}
      />
   </>
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
   connect(mapStateToProps, { setCurrentPage, setUsers, getUsers })
   // authRedirect
)(UsersContainer)