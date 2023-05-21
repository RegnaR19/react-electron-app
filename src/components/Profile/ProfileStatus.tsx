import { Input } from "@mantine/core";
import { IconAt, IconBrandXbox } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";
import { useInView, useSpring, animated } from '@react-spring/web'

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
         color: 'black',
         icon: <IconBrandXbox />,
         className: 'my-notification-class',
         loading: false,
         styles: (theme) => ({
            root: {
               backgroundColor: theme.colors.gray[1],
               '&::before': { backgroundColor: theme.black },
            },
            title: { color: theme.black },
            description: { color: theme.black },
         }),
      })
   }

   const [springs] = useSpring(() => ({
      from: {
         opacity: 0.4,
         scale: 1,
      },
      to: {
         opacity: 1,
         scale: 1,
      },
      config: { duration: 1000, mass: 100, tension: 100, friction: 100 },
      loop: {
         reverse: true
      }
   }))

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
         <animated.div style={springs}>{!editMode &&
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
         </animated.div>
      </>
   );
}

export default ProfileStatus;