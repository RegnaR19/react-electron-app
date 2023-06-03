// страница основного меню
import { NavLink } from 'react-router-dom';
import { NavLink as NavMantine } from '@mantine/core';
import {
   IconSettings,
   IconAt, IconActivity, IconCircleOff, IconBadge4k, IconUsers, IconAddressBook, IconNews, IconLogout
} from '@tabler/icons-react';
import s from './Navigation.module.css'
import { successExit } from './NavigationContainer';

const Navigation = (props: any) => {

   return (
      <>
         <div className={s.link}>
            <NavLink to="profile">
               <NavMantine
                  icon={<IconAddressBook size={18} stroke={1.5} />}
                  description='Стена' label="Профиль" />
            </NavLink>
            <NavLink to="messages">
               <NavMantine
                  icon={<IconAt size={18} stroke={1.5} />}
                  description='' label="Сообщения" />
            </NavLink>
            <NavLink to="news">
               <NavMantine
                  icon={<IconNews size={18} stroke={1.5} />}
                  description='' label="Новости" />
            </NavLink>
            <NavLink to="users">
               <NavMantine
                  icon={<IconUsers size={18} stroke={1.5} />}
                  description='' label="Пользователи" />
            </NavLink>
            <NavLink to="music">
               <NavMantine
                  icon={<IconActivity size={18} stroke={1.5} />}
                  description='' label="Музыка" />
            </NavLink>
            <NavLink to="video">
               <NavMantine
                  icon={<IconBadge4k size={18} stroke={1.5} />}
                  description='' label="Видео" />
            </NavLink>
            <NavLink to="settings">
               <NavMantine
                  icon={<IconSettings size={18} stroke={1.5} />}
                  description='' label="Настройки" />
            </NavLink>
            <NavLink to="test">
               <NavMantine
                  icon={<IconCircleOff size={18} stroke={1.5} />}
                  description='Эксперименты' label="Тестовая" />
            </NavLink>

            {props.isAuth ? <NavLink to='' onClick={successExit} onClickCapture={props.logout}>
               <NavMantine
                  icon={<IconLogout size={18} stroke={1.5} />}
                  description='' label="Выход" />
            </NavLink> :
               <NavLink to="login">
                  <NavMantine
                     icon={<IconCircleOff size={18} stroke={1.5} />}
                     description='' label="Вход" />
               </NavLink>
            }
         </div >
      </>
   );
}

export default Navigation;