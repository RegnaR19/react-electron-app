
// информация о профиле
const ProfileInfo = (props: any) => {

   let ID = props.profile.userId
   let fullName = props.profile.fullName

   if (props.status === null) { props.status = "не указано" }

   return (
      <>
         <div>ID: {ID}</div>
         <div>Имя: {fullName}</div>
         <div>Статус: {props.status}</div>
      </>
   )
}

export default ProfileInfo;