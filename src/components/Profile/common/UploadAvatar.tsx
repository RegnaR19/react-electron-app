import { achievementSound, useAppDispatch } from '@/hoc/hooks'
import { newPhotoAchievementAction } from '@/redux/achievementReducer'
import { profileSlice } from '@/redux/profileReducer'
import { notifications } from '@mantine/notifications'
import { IconBrandXbox } from '@tabler/icons-react'
import { useState } from 'react'

const UploadAvatar = () => {

   const [success, setSuccess] = useState(false)
   const dispatch = useAppDispatch()
   const { savePhotoSuccess } = profileSlice.actions

   const successForm = () => {
      notifications.show({
         withCloseButton: true,
         autoClose: 10000,
         title: "Достижение разблокировано",
         message: '100G | Вы попытались изменить аватар, но у вас ничего не вышло',
         color: 'green',
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

   const onMainPhotoSelected = (e: any) => {
      let partName = e.target.files[0];
      if (e.target.files.length) {
         savePhotoSuccess(partName)
         dispatch(newPhotoAchievementAction())
         if (!success) {
            successForm()
            achievementSound()
         }
         setSuccess(true)
      }
   }




   return (
      <>
         <input type="file" onChange={onMainPhotoSelected} />
      </>
   );
}

export default UploadAvatar