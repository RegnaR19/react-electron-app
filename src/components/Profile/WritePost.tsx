// страница написания постов
import { Button, Textarea } from "@mantine/core";
import { IconPencilPlus } from "@tabler/icons";

type Props = {
   newPostText?: any,
   addPost?: any,
   updateNewPostText?: any
}

const WritePost: React.FC<Props> = ({ ...props }) => {

   let newPostText = props.newPostText

   let onPostChange = (e: any) => {
      let text = e.target.value
      props.updateNewPostText(text)
   }

   let addPost = () => {
      props.addPost()
   }

   return (
      <>
         <b>Опубликовать новую запись</b>
         <div style={{ marginBottom: 10 }} />
         <Textarea
            placeholder="Дуров, верни стену!"
            autosize size="md"
            minRows={2}
            onChange={onPostChange}
            value={newPostText}
         />
         <div style={{ marginBottom: 10 }} />

         <Button onClick={addPost} variant="gradient"
            leftIcon={<IconPencilPlus />}
            gradient={{ from: 'indigo', to: 'cyan' }}>
            Опубликовать
         </Button>
         <div style={{ marginBottom: 10 }} />
      </>
   )
}

export default WritePost;