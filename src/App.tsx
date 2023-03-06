import { ThemeProvider } from "./ThemeProvider";
import { Route, Routes } from "react-router-dom";
import FooterOne from "./components/Navbar/Footer";
import Navigation from "./components/Navbar/Navigation";
import NewsPage from "./components/News/NewsPage";
import MusicPage from "./components/Music/MusicPage";
import SettingsPage from "./components/Settings/SettingsPage";
import TestPage from "./components/Settings/TestPage";
import Sidebar from "./components/Navbar/Sidebar";
import VideoPage from "./components/Video/VideoPage";
import AccountMenu from "./components/Profile/AccountMenu";
import MainProfile from "./components/Profile/MainProfile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { useState } from "react";
import { Button } from "@mantine/core";
import s from "./App.module.css"

const App = () => {
   const [style, setStyle] = useState(s.layout)
   const changeStyle = () => {
      setStyle(s.layout1)
   }

   const [style2, setStyle2] = useState(s.col2)
   const changeStyle2 = () => {
      setStyle2(s.col2_wide)
   }

   return (
      <ThemeProvider>
         <div className={style}>
            <div className={s.col1_noborder}>
               <img src="./electron-vite.svg" className={s.logo} />
            </div>
            <div className={s.col3_noborder}>
               <Button variant="outline" size="sm"
                  onClick={() => { changeStyle(); changeStyle2() }}>
                  Изменить размер
               </Button>
            </div>
            <div className={style2}>
               <AccountMenu />
            </div>
         </div>
         <div className={style}>
            <div className={s.col1}>
               <Navigation /> ЙОУ
            </div>
            <div className={s.col3}><Sidebar /></div>
            <div className={style2}>
               <Routes>
                  <Route path="/" element={<MainProfile />} />
                  <Route path="profile" element={<MainProfile />} />
                  <Route path="messages" element={<DialogsContainer />} />
                  <Route path="users" element={<UsersContainer />} />
                  <Route path="news" element={<NewsPage />} />
                  <Route path="music" element={<MusicPage />} />
                  <Route path="settings" element={<SettingsPage />} />
                  <Route path="test" element={<TestPage />} />
                  <Route path="video" element={<VideoPage />} />
               </Routes>
            </div>
         </div>
         <div className={style}>
            <div className={s.col1_noborder}></div>
            <div className={s.col3_noborder}></div>
            <div className={style2}>
               <div className={s.header}><FooterOne /></div>
            </div>
         </div>
      </ThemeProvider>
   );
}

export default App