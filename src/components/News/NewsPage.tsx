// основная страница новостей
import NewsCard from './NewsCard';
import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';
import Indent10 from '../Forms/Indent';

const NewsPage = () => {
   return (
      <>
         Страница новостей
         <NewsCard width='200px' height='200px'>
            Ну типа привет
         </NewsCard>
         <Indent10 />
         <Alert icon={<IconAlertCircle size={16} />} title="Bummer!" color="red">
            Здесь я прокинул пропсы из другого файла по одному видеуроку,
            поэтому тут ничего нет.
         </Alert>
      </>
   );
}

export default NewsPage;