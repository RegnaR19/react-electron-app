
// информация о профиле
const ProfileInfo = (props: any) => {

   let ID = props.profile.userId
   let fullName = props.profile.fullName
   let status = props.status

   if (status === null) {
      status = "не указано"
   }

   return (
      <>
         <div><b>ID:</b> {ID}</div>
         <div><b>Имя:</b> {fullName}</div>
         <div><b>Статус:</b> {props.status}</div>
      </>
   )
}

export default ProfileInfo;