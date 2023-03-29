import { Button, Input } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import React from "react";
import Indent10 from "../Forms/Indent";

type Props = {
   status: any,
   updateStatus: any
}

class ProfileStatus extends React.Component<Props> {

   state = {
      editMode: false,
      status: this.props.status
   }

   activateEditMode = () => {
      this.setState({ editMode: !this.state.editMode })
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
               <div onClick={this.activateEditMode}><b>{this.props.status || "Привет"}</b></div>
            }

            {this.state.editMode &&
               <div>
                  <Input icon={<IconAt />} onChange={this.onStatusChange} onBlur={this.activateEditMode}
                     placeholder="Напишите ваш статус" autoFocus={true}
                     radius="md" size="sm" value={this.state.status}
                     />
               </div>
            }
         </>
      );
   }
}

export default ProfileStatus;