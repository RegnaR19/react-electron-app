import { Input } from "@mantine/core";
import { IconAt, IconBrandXbox } from "@tabler/icons-react";
import React from "react";
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
         withCloseButton: false,
         autoClose: 5000,
         title: "25G за изменение статуса!",
         message: 'Статус успешно изменен.',
         color: 'dark',
         icon: <IconBrandXbox />,
         className: 'my-notification-class',
         loading: false,
         styles: (theme) => ({
            root: {
               backgroundColor: theme.colors.blue[5],
               '&::before': { backgroundColor: theme.white },
            },
            title: { color: theme.white },
            description: { color: theme.white },
         }),
      })
   }

   activateEditMode = () => {
      this.setState(
         { editMode: !this.state.editMode }
      )
      this.props.updateStatus(this.state.status)
      if (this.state.editMode) {
         this.successForm()
      }
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
               <div onClick={this.activateEditMode}><b>{this.props.status || "статус не указан"}</b> (нажмите для изменения статуса)</div>
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