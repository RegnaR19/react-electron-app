import { Field, Form } from "react-final-form";
import Indent10 from "../Forms/Indent";
import { Button, Checkbox, Input } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconBrandXbox } from "@tabler/icons-react";
import { connect } from "react-redux";
import { login, logout } from "@/redux/authReducer";
import { Navigate } from "react-router-dom";

const Login = (props: any) => {

   const successForm = () => {
      notifications.show({
         id: 'login',
         withCloseButton: false,
         autoClose: 5000,
         title: "20G за нажатие кнопки!",
         message: 'Но данная функция пока что не работает.',
         color: 'red',
         icon: <IconBrandXbox />,
         className: 'my-notification-class',
         loading: true,
         styles: (theme) => ({
            root: {
               backgroundColor: theme.colors.dark[5],
               '&::before': { backgroundColor: theme.white },
            }
         }),
      })
   }

   type Employee = {
      email?: any
      password?: any
   }

   const onSubmit = (formData: any) => {
      props.login(formData.email, formData.password, formData.rememberMe)
      if (props.isAuth) {
         <Navigate to="/profile" />
      }
      successForm()
   }

   return (
      <>
         <h2>Страница входа</h2>
         <Form onSubmit={onSubmit}
            validate={(values: any) => {
               const errors: Employee = {}
               if (!values.email) {
                  errors.email = 'Необходимо заполнить Email'
               }
               if (!values.password) {
                  errors.password = 'Необходимо заполнить пароль'
               }
               return errors
            }}
            render={({ handleSubmit, values, submitting }) => (
               <form onSubmit={handleSubmit}>
                  <Field name='email' component="input">
                     {({ input, meta }) => (
                        <div>
                           <Input {...input} placeholder="Email" />
                           {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                     )}
                  </Field>
                  <Indent10 />
                  <Field name='password' component="input" autoComplete="off">
                     {({ input, meta }) => (
                        <div>
                           <Input {...input} placeholder="Пароль" />
                           {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                     )}
                  </Field>
                  <Indent10 />
                  <Field name='rememberMe' component="input" type="checkbox">
                     {({ input, meta }) => (
                        <div>
                           <Checkbox {...input} label="Запомнить меня" />
                           {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                     )}
                  </Field>
                  <Indent10 />
                  <Button type="submit" disabled={submitting}>
                     Войти
                  </Button>
                  <pre>{JSON.stringify(values, undefined, 2)}</pre>
               </form>
            )}
         />
      </>
   );
}

let mapStateToProps = (state: any) => {
   return {
      isAuth: state.auth.isAuth
   }
}

export default connect(mapStateToProps, { login, logout })(Login);