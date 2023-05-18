import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData, logout } from '@/redux/authReducer';
import { compose } from 'redux';
import Navigation from './Navigation';
import { notifications } from '@mantine/notifications';
import { IconCircleCheck } from '@tabler/icons-react';

type Props = {
   getAuthUserData: any
}

class NavigationContainer extends React.Component<Props> {

   componentDidMount() {
      this.props.getAuthUserData()
   }

   render() {
      return (
         <Navigation {...this.props} />
      )
   }
}

export const successExit = () => {
   return notifications.show({
      id: 'login',
      withCloseButton: false,
      autoClose: 5000,
      title: "50G за успешный выход из аккаунта!",
      message: 'Спасибо за тест данной функции.',
      color: 'blue',
      icon: <IconCircleCheck />,
      className: 'my-notification-class',
      loading: false,
      styles: (theme) => ({
         root: {
            backgroundColor: theme.colors.gray[4],
            '&::before': { backgroundColor: theme.white },
         },
         title: { color: theme.black },
         description: { color: theme.black },
      }),
   })
}

let mapStateToProps = (state: any) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
   }
}


export default compose(
   connect(mapStateToProps, { getAuthUserData, logout })
)
   (NavigationContainer)