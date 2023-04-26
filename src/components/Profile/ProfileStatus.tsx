import { Input } from "@mantine/core";
import { IconAt, IconBrandXbox } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

type Props = {
   status: any,
   updateStatus: any
}

const ProfileStatus: React.FC<Props> = (props) => {

   let propsStatus = props.status

   const [editMode, setEditMode] = useState(false)
   const [status, setStatus] = useState(propsStatus)

   useEffect(() => {
      setStatus(propsStatus)
   }, [propsStatus])


   let successForm = () => {
      notifications.show({
         withCloseButton: false,
         autoClose: 5000,
         title: "25G за изменение статуса!",
         message: `Новый статус: ${status}`,
         color: 'dark',
         icon: <IconBrandXbox />,
         className: 'my-notification-class',
         loading: false,
         styles: (theme) => ({
            root: {
               backgroundColor: theme.colors.blue[5],
               '&::before': { backgroundColor: theme.white },
            },
            title: { color: theme.white },
            description: { color: theme.white },
         }),
      })
   }

   const activateEditMode = () => {
      setEditMode(true)
   }

   const deactivateEditMode = () => {
      setEditMode(false)
      props.updateStatus(status)
      successForm()
   }

   const onStatusChange = (e: any) => {
      setStatus(e.currentTarget.value)
   }

   return (
      <>
         {!editMode &&
            <div onClick={activateEditMode}><b>{propsStatus || "статус не указан"}</b> (нажмите для изменения статуса)</div>
         }

         {editMode &&
            <div>
               <Input icon={<IconAt />} onChange={onStatusChange} onBlur={deactivateEditMode}
                  placeholder="Изменение статуса" autoFocus={true}
                  radius="md" size="sm" value={status}
               />
            </div>
         }

      </>
   );
}

export default ProfileStatus;