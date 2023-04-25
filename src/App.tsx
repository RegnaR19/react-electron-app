import { Route, Routes } from "react-router-dom";
import FooterOne from "./components/Navbar/Footer";
import Navigation from "./components/Navbar/Navigation";
import NewsPage from "./components/News/NewsPage";
import MusicPage from "./components/Music/MusicPage";
import SettingsPage from "./components/Settings/SettingsPage";
import TestPage from "./components/Settings/TestPage";
import VideoPage from "./components/Video/VideoPage";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { useEffect, useState } from "react";
import { Button, MantineProvider } from "@mantine/core";
import { Notifications, notifications } from "@mantine/notifications";
import s from "./App.module.css"
import { IconAdFilled, IconArrowsMaximize, IconX } from "@tabler/icons-react";
import MainProfileContainer from "./components/Profile/MainProfileContainer";
import SidebarContainer from "./components/Navbar/SidebarContainer";
import './App.scss'
import LoginContainer from "./components/Profile/LoginContainer";
import HeaderTwoContainer from "./components/Navbar/HeaderTwoContainer";
import Indent10 from "./components/Forms/Indent";
import { connect } from "react-redux";
import { initApp } from "./redux/appReducer";

const App = (props: any) => {

   useEffect(() => {
      props.initApp()
   }, [props.initApp()])

   return (
      <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
         <Notifications position="bottom-center" containerWidth={350} />
         <Indent10 />
         <header className={s.layout}>  
            <div className={s.col1_noborder}>
               {/* <HeaderOne /> */}
            </div> 
            <div className={s.col3}>
               тут ничего нет
            </div>
            <div className={s.col2}>
               <HeaderTwoContainer />
            </div>
         </header>
         <div className={s.layout}>
            <nav className={s.col1}> <Navigation /> </nav>
            <aside className={s.col3}><SidebarContainer /></aside>
            <main className={s.col2}>
               <Routes>
                  <Route path="/" element={<NewsPage />} />
                  <Route path="profile/:userId?" element={<MainProfileContainer />} />
                  <Route path="messages" element={<DialogsContainer />} />
                  <Route path="users" element={<UsersContainer />} />
                  <Route path="news" element={<NewsPage />} />
                  <Route path="music" element={<MusicPage />} />
                  <Route path="settings" element={<SettingsPage />} />
                  <Route path="test" element={<TestPage />} />
                  <Route path="video" element={<VideoPage />} />
                  <Route path="login" element={<LoginContainer />} />
               </Routes>
            </main>
         </div>
         <footer className={s.layout}>
            <div className={s.col1_noborder}></div>
            <div className={s.col3_noborder}></div>
            <div className={s.col2}>
               <div className={s.header}><FooterOne /></div>
            </div>
         </footer>
      </MantineProvider>
   );
}

let mapStateToProps = (state: any) => {
   return {
      init: state.app.init,
   }
}

export default connect(mapStateToProps, { initApp })(App)