// основная страница новостей
import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit } from '@tabler/icons-react';
import Indent10 from '../Forms/Indent';
import PostElementsContainer from '../Profile/Topic/PostElementsContainer';
import { useParams } from 'react-router-dom';

const NewsPage = () => {


   const { parampampam } = useParams()

   console.log({ parampampam })

   return (
      <>
         <div className='col2-app'>
            <div className='big-title'>Новостная лента</div>
            <Timeline active={1} bulletSize={24} lineWidth={2}>

               <Timeline.Item bullet={<IconGitBranch size={12} />} title="Спустя месяц отдыха и домашней работы">
                  <Text color="dimmed" size="sm">Выпуск версии 1.0.5</Text>
                  <Text size="xs" mt={4}>14 мая 2023 г.</Text>
               </Timeline.Item>
               <Timeline.Item bullet={<IconGitCommit size={12} />} title="Большое обновление">
                  <Text color="dimmed" size="sm">Выпуск версии 1.0.4</Text>
                  <Text size="xs" mt={4}>17 апреля 2023 г.</Text>
               </Timeline.Item>
               <Timeline.Item bullet={<IconGitBranch size={12} />} title="Новая версия">
                  <Text color="dimmed" size="sm">Выпуск версии 1.0.3</Text>
                  <Text size="xs" mt={4}>26 марта 2023 г.</Text>
               </Timeline.Item>
               <Timeline.Item bullet={<IconGitBranch size={12} />} title="Новая версия">
                  <Text color="dimmed" size="sm">Выпуск версии 1.0.2</Text>
                  <Text size="xs" mt={4}>12 марта 2023 г.</Text>
               </Timeline.Item>

               <Timeline.Item bullet={<IconGitCommit size={12} />} title="Новая версия">
                  <Text color="dimmed" size="sm">Выпуск версии 1.0.1 со включенным автообновлением</Text>
                  <Text size="xs" mt={4}>6 марта 2023 г.</Text>
               </Timeline.Item>

               <Timeline.Item title="Новая версия" bullet={<IconGitPullRequest size={12} />} lineVariant="dashed">
                  <Text color="dimmed" size="sm">Релиз 1.0.0</Text>
                  <Text size="xs" mt={4}>6 марта 2023 г.</Text>
               </Timeline.Item>
            </Timeline>
            <Indent10 /><br />
            <PostElementsContainer />
         </div>
      </>
   )
}

export default NewsPage;