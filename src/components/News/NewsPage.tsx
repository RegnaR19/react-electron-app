// основная страница новостей
import { Timeline, Text, Image } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit } from '@tabler/icons-react';
import Indent10 from '../Forms/Indent';

const NewsPage = () => {
   return (
      <>
         <h2>Новости</h2>
         <Timeline active={1} bulletSize={24} lineWidth={2}>
            <Timeline.Item bullet={<IconGitBranch size={12} />} title="Большое обновление">
               <Text color="dimmed" size="sm">Выпуск версии 1.0.4</Text>
               <Text size="xs" mt={4}>16 апреля 2023 г.</Text>
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
         <Indent10 />
         <Image src="/src/assets/dance.gif" />
      </>
   )
}

export default NewsPage;