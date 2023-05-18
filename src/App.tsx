import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react'
import FooterOne from "./components/Navbar/Footer";
import NewsPage from "./components/News/NewsPage";
import MusicPage from "./components/Music/MusicPage";
import SettingsPage from "./components/Settings/SettingsPage";
import TestPage from "./components/Settings/TestPage";
import VideoPage from "./components/Video/VideoPage";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
import { useEffect } from "react";
import { Grid, Image, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import s from "./App.module.css"
import MainProfileContainer from "./components/Profile/MainProfileContainer";
import SidebarContainer from "./components/Navbar/SidebarContainer";
import './App.scss'
import LoginContainer from "./components/Profile/LoginContainer";
import HeaderTwoContainer from "./components/Navbar/HeaderTwoContainer";
import { connect } from "react-redux";
import { initApp } from "./redux/appReducer";
import Sidebar2 from "./components/Navbar/Sidebar2";
import UnderNav from "./components/Forms/UnderNav";
import NavigationContainer from "./components/Navbar/NavigationContainer";

const App = (props: any) => {

   useEffect(() => {
      props.initApp
   }, [])

   return (
      <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
         <Notifications position="bottom-right" containerWidth={350} />
         <header className={s.layout2}>
            <HeaderTwoContainer />
         </header>
         <div className={s.layout}>
            <nav className={s.col1}> <NavigationContainer /> </nav>
            <aside className={s.col3}>
               <div className={s.sidebar}><SidebarContainer /></div>
               <div className={s.sidebar}><Sidebar2 /></div>
            </aside>
            <main>
               <Routes>
                  <Route path="/" element={<MainProfileContainer />} />
                  <Route path="profile/:userId?" element={<MainProfileContainer />} />
                  <Route path="messages" element={<DialogsContainer />} />
                  <Route path="users" element={
                     <Suspense fallback={<UnderNav />}>
                        <UsersContainer />
                     </Suspense>} />
                  <Route path="news" element={<NewsPage />} />
                  <Route path="music" element={<MusicPage />} />
                  <Route path="settings" element={<SettingsPage />} />
                  <Route path="test" element={<TestPage />} />
                  <Route path="video" element={<VideoPage />} />
                  <Route path="login" element={<LoginContainer />} />
               </Routes>
            </main>
         </div >
         <footer className={s.layout}>
            <div className={s.col1_noborder}></div>
            <div className={s.col3_noborder}></div>
            <div>
               <div className={s.header}><FooterOne /></div>
            </div>
         </footer>
      </MantineProvider >
   );
}

let mapStateToProps = (state: any) => {
   return {
      init: state.app.init,
   }
}

export default connect(mapStateToProps, { initApp })(App)