import { Button, Checkbox, Input, PasswordInput } from "@mantine/core";
import Indent10 from "../Forms/Indent";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props: any) => {
   return (
      <>
         <form onSubmit={props.handleSubmit}>
            <Field placeholder="Email" name="email" component={"input"} />
            <Indent10 />
            <Field placeholder="Пароль" name="password" component={"input"} autoComplete="off" />
            <Indent10 />
            <Field name="rememberMe" component={"input"} type="checkbox" /> Запомнить меня
            <Indent10 />
            <button>Войти</button>
         </form>
      </>
   )
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

const onSubmit = (formData: any) => {
   console.log(formData)
}

const Login = () => {
   return (
      <>
         <h2>Страница входа</h2>
         <ReduxLoginForm onSubmit={onSubmit} />
      </>
   );
}

export default Login;