import Cards from "./WallCards";

type Props = {
   dialogsPage: any
}

const PostElements: React.FC<Props> = ({ ...props }) => {

   let postElements =
      [...props.dialogsPage.posts].reverse().map((p: any) =>
         <Cards id={p.id} key={p.id} header={p.post} message={p.message}
            likescount={p.likescount} img={p.img} />)

   return (
      <>
         <h3>Все записи</h3>
         {postElements}
      </>
   )
}

export default PostElements;
