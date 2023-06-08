import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { setUsers, setCurrentPage, getUsers } from "../../redux/usersReducer";
import Users from "./Users";
import { AppStateType } from "@/redux/redux-store";

type Props = {
   users: any
   setUsers: any
   pageSize: number
   totalUsersCount: number
   currentPage: number
   getUsers: (pageNumber: number, pageSize: number) => void
}

const UsersContainer: React.FC<Props> = (props) => {

   useEffect(() => {
      props.getUsers(props.currentPage, props.pageSize)
   }, [])


   const onPageChanged = (pageNumber: number, setUsers: number) => {
      props.getUsers(pageNumber, setUsers)
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

let mapStateToProps = (state: AppStateType) => {
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