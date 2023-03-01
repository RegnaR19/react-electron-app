import UsersPage from "./UsersPage";
import React from "react";
import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';

type Props = {
   users?: any,
   setUsers?: any
}

let Users: React.FC<Props> = ({ ...props }) => {

   let usersElements = props.users.map((e: any) => <UsersPage id2={e.id} key={e.id} name={e.name}
      status={e.status} city={e.city} img={e.img} />)

   return (
      <>
         {usersElements}
         <Alert icon={<IconAlertCircle size={16} />} title="Bummer!" color="red">
            На данной странице я остановился в курсе на 54 уроке,
            дальше будет здесь нумерация страниц.
         </Alert>
      </>
   )
}

export default Users;