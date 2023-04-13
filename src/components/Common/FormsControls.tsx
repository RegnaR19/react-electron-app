import s from "./FormsControls.module.css"

export const titleInput = ({ input, meta, ...props }) => {
   return (
      <input {...input} {...props} className={s.form} />
   )
}