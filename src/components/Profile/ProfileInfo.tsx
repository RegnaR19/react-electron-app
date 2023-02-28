// информация о профиле
const ProfileInfo = (props:any) => {
   return (
      <>
         <div>Имя: {props.name}</div>
         <div>Возраст: {props.age}</div>
         <div>Профессия: {props.professional}</div>
         <div>Место жительства: {props.city}</div>
      </>
   )
}

export default ProfileInfo;