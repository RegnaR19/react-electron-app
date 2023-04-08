import { Button, Checkbox, Input, PasswordInput } from "@mantine/core";
import { IconAt, IconCircleKey } from "@tabler/icons-react";
import Indent10 from "../Forms/Indent";
import { Field, reduxForm } from "redux-form";

const LoginForm = () => {
   return (
      <>
         <form>
            <Field component={"input"} placeholder="Email" />
            <Indent10 />
            <PasswordInput icon={<IconCircleKey />} placeholder="Пароль" autoComplete="off" />
            <Indent10 />
            <Checkbox label="Запомнить меня" />
            <Indent10 />
            <Button variant="outline">Войти</Button>
         </form>
      </>
   )
}

const ReduxLoginForm = reduxForm({
   form: 'login'
})(LoginForm)

const Login = () => {
   return (
      <>
         <h2>Страница входа</h2>
         <ReduxLoginForm />
      </>
   );
}

export default Login;