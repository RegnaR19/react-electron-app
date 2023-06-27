// информация о профиле
const ProfileInfo = ({profile, auth}) => {

   let ID = profile.userId
   let email = auth.email

   return (
      <>
         <div><b>ID:</b> {ID}</div>
         <div><b>Email:</b> {email}</div>
      </>
   )
}

export default ProfileInfo;