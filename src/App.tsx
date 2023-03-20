import { ThemeProvider } from "./ThemeProvider";
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
import { useState } from "react";
import { Button, MantineProvider } from "@mantine/core";
import s from "./App.module.css"
import { IconArrowsMaximize } from "@tabler/icons-react";
import MainProfileContainer from "./components/Profile/MainProfileContainer";
import SidebarContainer from "./components/Navbar/SidebarContainer";

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
      <MantineProvider>
         <ThemeProvider>
            <div className={style}>
               <div className={s.col1_noborder}>
                  <img src="./electron-vite.svg" className={s.logo} />
               </div>
               <div className={s.col3_noborder}>
                  <Button variant="outline" size="sm" leftIcon={<IconArrowsMaximize size="1rem" />}
                     onClick={() => { changeStyle(); changeStyle2() }}>
                     Изменить размер
                  </Button>
               </div>
            </div>
            <div className={style}>
               <div className={s.col1}>
                  <Navigation />
               </div>
               <div className={s.col3}><SidebarContainer /></div>
               <div className={style2}>
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
      </MantineProvider>
   );
}

export default App