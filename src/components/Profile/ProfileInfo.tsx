import { Image } from "@mantine/core";

// информация о профиле
const ProfileInfo = (props: any) => {
   return (
      <>
         <div>ID: {props.profile.userId}</div>
         <div>Имя: {props.profile.fullName}</div>
         <div>Профессия: {props.profile.lookingForAJobDescription}</div>
         <div>Статус: {props.profile.aboutMe}</div>
      </>
   )
}

export default ProfileInfo;