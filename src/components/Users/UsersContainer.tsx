import React, { useEffect } from "react";
import Users from "./Users";
import { getUsers } from '@/redux/usersReducer';
import { connect } from 'react-redux';

type Props = {
   pageSize: number
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
      <Users onPageChanged={onPageChanged} />
   </>
}


export default connect(null, { getUsers })(UsersContainer)