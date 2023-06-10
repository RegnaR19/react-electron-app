import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect, useMemo } from 'react'
import FooterOne from "./components/Navbar/Footer";
import NewsPage from "./components/News/NewsPage";
import MusicPage from "./components/Music/MusicPage";
import SettingsPage from "./components/Settings/SettingsPage";
import TestPage from "./components/Settings/TestPage";
import VideoPage from "./components/Video/VideoPage";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const LoginContainer = lazy(() => import('./components/Profile/LoginContainer'));
const MainProfileContainer = lazy(() => import('./components/Profile/MainProfileContainer'));
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import s from "./App.module.css"
import './App.scss'
import HeaderTwoContainer from "./components/Navbar/HeaderTwoContainer";
import { connect } from "react-redux";
import { initApp } from "./redux/appReducer";
import Sidebar2 from "./components/Navbar/Sidebar2";
import NavigationContainer from "./components/Navbar/NavigationContainer";
import SidebarContainer from "./components/Navbar/SidebarContainer";

const App = (props: any) => {

   useMemo(() => {
      props.initApp()
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
               <div className={s.sidebar}><Sidebar2 /></div>
               <div className={s.sidebar}><SidebarContainer /></div>
            </aside>
            <main>
               <Routes>
                  <Route path="/" element={<MainProfileContainer />} />
                  <Route path="profile" element={
                     <Suspense fallback={' '}>
                        <MainProfileContainer />
                     </Suspense>
                  } />
                  <Route path="profile/:userId" element={<MainProfileContainer />} />
                  <Route path="messages" element={<DialogsContainer />} />
                  <Route path="users" element={
                     <Suspense fallback={' '}>
                        <UsersContainer />
                     </Suspense>} />
                  <Route path="news" element={<NewsPage />} />
                  <Route path="music" element={<MusicPage />} />
                  <Route path="settings" element={<SettingsPage />} />
                  <Route path="test" element={<TestPage />} />
                  <Route path="video" element={<VideoPage />} />
                  <Route path="login" element={
                     <Suspense fallback={' '}>
                        <LoginContainer />
                     </Suspense>} />
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

export default connect(null, { initApp })(App)