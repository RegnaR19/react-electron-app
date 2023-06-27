import { useAppDispatch } from '@/hoc/hooks';
import { achievementSlice } from '@/redux/achievementReducer';
import { FileInput, rem } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconMoodSad, IconUpload } from '@tabler/icons-react';

const UploadPhotoPost = () => {

  const dispatch = useAppDispatch()
  const { attachAchievement } = achievementSlice.actions
  const { totalAchievement } = achievementSlice.actions
  const addNewForAttach = () => {
    dispatch(attachAchievement(100))
  }

  const ohh = () => {
    notifications.show({
      withCloseButton: false,
      autoClose: 5000,
      title: "50G за прикрепление!",
      message: 'Но прикрепление временно не работает.',
      color: 'dark',
      icon: <IconMoodSad />,
      className: 'my-notification-class',
      loading: false,
      styles: (theme) => ({
        root: {
          backgroundColor: theme.colors.red[9],
          '&::before': { backgroundColor: theme.white },
        },
        title: { color: theme.white },
        description: { color: theme.white },
      }),
    })
  }

  return (
    <>
      <FileInput placeholder="Прикрепить изображение" icon={<IconUpload size={rem(14)} />} onClick={() => { ohh(); addNewForAttach(); }} />
    </>
  )
}

export default UploadPhotoPost