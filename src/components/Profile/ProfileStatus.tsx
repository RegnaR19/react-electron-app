import { Button, Input } from "@mantine/core";
import { IconAt, IconBrandXbox } from "@tabler/icons-react";
import React from "react";
import Indent10 from "../Forms/Indent";
import { notifications } from "@mantine/notifications";

type Props = {
   status: any,
   updateStatus: any
}

class ProfileStatus extends React.Component<Props> {

   state = {
      editMode: false,
      status: this.props.status
   }

   successForm = () => {
      notifications.show({
         id: 'login',
         withCloseButton: false,
         autoClose: 5000,
         title: "5G за изменение статуса!",
         message: 'Функция заработает, когда будет произведен вход в аккаунт.',
         color: 'gray',
         icon: <IconBrandXbox />,
         className: 'my-notification-class',
         loading: false,
         styles: (theme) => ({
            root: {
               backgroundColor: theme.colors.dark[5],
               '&::before': { backgroundColor: theme.white },
            }
         }),
      })
   }

   activateEditMode = () => {
      this.setState({ editMode: !this.state.editMode })
      this.successForm()
      this.props.updateStatus(this.state.status)
   }

   onStatusChange = (e: any) => {
      this.setState({
         status: e.currentTarget.value
      })
   }

   render() {
      return (
         <>
            {!this.state.editMode &&
               <div onClick={this.activateEditMode}><b>{this.props.status || "Привет"}</b> (нажмите для изменения статуса)</div>
            }

            {this.state.editMode &&
               <div>
                  <Input icon={<IconAt />} onChange={this.onStatusChange} onBlur={this.activateEditMode}
                     placeholder="Изменение статуса" autoFocus={true}
                     radius="md" size="sm" value={this.state.status}
                  />

               </div>
            }

         </>
      );
   }
}

export default ProfileStatus;