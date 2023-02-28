// страница новостей
type Props = {
   height?: string,
   width?: string,
   children?: string
}

const NewsCard: React.FC<Props> = ({ height, width, children }) => {
   return (
      <>
         <div style={{ width, height, background: 'green' }}>
            {children}
         </div>
      </>
   );
}

export default NewsCard;