import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuthUserData, logout } from '@/redux/authReducer';
import { compose } from 'redux';
import Navigation from './Navigation';
import { notifications } from '@mantine/notifications';
import { IconCircleCheck } from '@tabler/icons-react';
import { AppStateType } from '@/redux/redux-store';

const NavigationContainer = (props: any) => {

   return (
      <Navigation {...props} />
   )
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

let mapStateToProps = (state: AppStateType) => {
   return {
      isAuth: state.auth.isAuth,
      logout: state.auth.logout
   }
}

export default compose(connect(mapStateToProps, { logout }))(NavigationContainer)