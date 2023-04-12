import { notifications } from "@mantine/notifications"
import { IconX } from "@tabler/icons-react"

const errorField = () => {
   notifications.show({
      id: 'hello-there',
      withCloseButton: true,
      onClose: () => console.log('unmounted'),
      onOpen: () => console.log('mounted'),
      autoClose: 3000,
      title: "Надо заполнить это поле!",
      message: 'Вы не заполнили поле.',
      color: 'green',
      icon: <IconX />,
      className: 'my-notification-class',
      loading: true,
      styles: (theme) => ({
         root: {
            backgroundColor: theme.colors.dark[5],
            '&::before': { backgroundColor: theme.white },
         }
      }),
   })
}

export const required = (value: any) => {
   if (value) return undefined
   return errorField
}

export const maxLengthCreator = (maxLength: any) => (value: any) => {
   if (value.length > maxLength) return errorField
   return undefined
}