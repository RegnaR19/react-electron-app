// основная страница новостей
import NewsCard from './NewsCard';
import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import Indent10 from '../Forms/Indent';

const NewsPage = () => {
   return (
      <>
         Страница новостей
         <NewsCard width='200px' height='200px'>
            Ну типа привет
         </NewsCard>
      </>
   );
}

export default NewsPage;