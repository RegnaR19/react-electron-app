import UsersPage from "./UsersPage";
import React, { useEffect } from "react";
import Paginator from "./Paginator";
import Indent10 from "../Forms/Indent";
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '@/redux/redux-store';

type Props = {
   onPageChanged: any
}

const Users: React.FC<Props> = ({onPageChanged}) => {

   const totalUsersCount = useSelector((state: AppStateType) => state.usersPage.totalUsersCount)
   const usersList = useSelector((state: AppStateType) => state.usersPage.usersList)
   const pageSize = useSelector((state: AppStateType) => state.usersPage.pageSize)
   const currentPage = useSelector((state: AppStateType) => state.usersPage.currentPage)

   const dispatch = useDispatch()

   let usersElements = usersList.map((e: any) =>
      <UsersPage id2={e.id} key={e.id} name={e.name}
         status={e.status} img={e.photos.small} />)

   return (
      <>
         <div className="col2-app">
            <div className='big-title'>Пользователи</div>
            Общее количество: {totalUsersCount}<br /><br />

            <Paginator pageSize={pageSize}
               totalUsersCount={totalUsersCount} currentPage={currentPage}
               onPageChanged={onPageChanged} />
            <Indent10 />
            {usersElements}
            <Indent10 />
            <Paginator pageSize={pageSize}
               totalUsersCount={totalUsersCount} currentPage={currentPage}
               onPageChanged={onPageChanged} />
         </div>
      </>
   )
}

export default Users