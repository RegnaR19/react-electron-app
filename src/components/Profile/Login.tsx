import { Field, Form } from "react-final-form";
import Indent10 from "../Forms/Indent";
import { Button, Checkbox, Input } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCircleCheck } from "@tabler/icons-react";
import { connect } from "react-redux";
import { login } from "@/redux/authReducer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type Props = {
   isAuth: any
}

const Login: React.FC<Props> = (props: any) => {

   const navigate = useNavigate();

   const successForm = () => {
      navigate("/profile")
      notifications.show({
         id: 'login',
         withCloseButton: false,
         autoClose: 5000,
         title: "50G за успешный вход!",
         message: 'Спасибо за тест данной функции.',
         color: 'green',
         icon: <IconCircleCheck />,
         className: 'my-notification-class',
         loading: false,
         styles: (theme) => ({
            root: {
               backgroundColor: theme.colors.gray[4],
               '&::before': { backgroundColor: theme.white },
            },
            title: { color: theme.black },
            description: { color: theme.black },
         }),
      })
   }

   type Employee = {
      email?: any
      password?: any
   }

   const onSubmit = (formData: any) => {
      props.login(formData.email, formData.password, formData.rememberMe)
   }

   useEffect(() => {
      { props.isAuth ? successForm() : '' }
   }, [props.isAuth]);

   return (
      <>
         <div className="col2-app">
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
                     <Field name='password' component="input" autoComplete="off" type="password">
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
                     <Button type="submit" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} disabled={submitting}>
                        Войти
                     </Button>
                     <pre>{JSON.stringify(values, undefined, 2)}</pre>
                  </form>
               )}
            />
         </div>
      </>
   );
}

export default connect(null, { login })(Login);