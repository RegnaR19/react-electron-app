import { Field, Form } from "react-final-form";
import Indent10 from "../Forms/Indent";
import { Button, Checkbox, Input } from "@mantine/core";


const Login = () => {

   const onSubmit = () => {
      alert('gg')
   }

   type Employee = {
      message?: any
   }

   return (
      <>
         <h2>Страница входа</h2>

         <Form onSubmit={onSubmit}
            validate={(values: any) => {
               const errors: Employee = {}
               if (!values.email) {
                  errors.email = 'Необходимо заполнить поле'
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
                  <Field name='password' component="input" autoComplete="off">
                     {({ input, meta }) => (
                        <div>
                           <Input {...input} placeholder="Пароль" />
                           {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                     )}
                  </Field>
                  <Field name='rememberMe' component="input" type="checkbox">
                     {({ input, meta }) => (
                        <div>
                           <Checkbox {...input} /> Запомнить меня
                           {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                     )}
                  </Field>
                  <Indent10 />
                  <Button type="submit" disabled={submitting}>
                     Войти
                  </Button>
                  <pre>{JSON.stringify(values, null, 2)}</pre>
               </form>
            )}
         />
      </>
   );
}

export default Login;