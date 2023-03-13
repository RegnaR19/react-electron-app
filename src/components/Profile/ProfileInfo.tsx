
// информация о профиле
const ProfileInfo = (props: any) => {

   let ID = props.profile.userId
   let fullName = props.profile.fullName
   let looking = props.profile.lookingForAJobDescription
   let status = props.profile.aboutMe

   if (looking === null) { looking = "не указано" }

   if (status === null) { status = "не указан" }

   return (
      <>
            <div>ID: {ID}</div>
            <div>Имя: {fullName}</div>
            <div>Профессия: {looking}</div>
            <div>Статус: {status}</div>
      </>
   )
}

export default ProfileInfo;