import { Button, Input } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import React from "react";
import Indent10 from "../Forms/Indent";

type Props = {
   status: any
}



class ProfileStatus extends React.Component<Props> {

   state = {
      editMode: false
   }

   activateEditMode = () => {
      this.setState({ editMode: !this.state.editMode })
   }

   render() {
      return (
         <>
            {!this.state.editMode &&
               <div onClick={this.activateEditMode}><b>{this.props.status}</b></div>
            }

            {this.state.editMode &&
               <div>
                  <Input icon={<IconAt />} onBlur={this.activateEditMode}
                     placeholder="Напишите ваш статус" autoFocus={true}
                     radius="md" size="sm" value={this.props.status} />
                  <Indent10 />
                  <Button color="pink">
                     Сохранить статус
                  </Button>
               </div>
            }
         </>
      );
   }
}

export default ProfileStatus;