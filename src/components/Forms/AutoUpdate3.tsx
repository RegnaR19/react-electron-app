import { Button, Group, Image, List, Modal } from "@mantine/core";
import { useState } from 'react';
import Indent10 from "./Indent";
import rick from '../../assets/rick.jpg'
import chica from '../../assets/chika-fujiwara.gif'

const AutoUpdate3 = () => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <Modal size="auto"
                opened={opened}
                onClose={() => setOpened(false)}
                title="Подробности обновления программы до 1.0.3"
            >

                <Image src={chica} />
                <h3>Неделю работал над курсом, дошел до 65 урока.</h3>
                <h4>Что нового:</h4>
                <List>
                    <List.Item>Были добавлены тысячи пользователей на страницу Пользователи</List.Item>
                    <List.Item>Работает переход по страницам</List.Item>
                    <List.Item>Добавлена иконка к кнопке "Изменить размер"</List.Item>
                    <List.Item>Страница профиля была немного обновлена</List.Item>
                    <List.Item>В следующем обновлении будут открываться профили каждого из пользователей</List.Item>
                </List>
            </Modal>
            <Indent10 />
            <Group position="center">
                <Button onClick={() => setOpened(true)}
                    variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
                    Обновление 1.0.3</Button>
            </Group>
            <Indent10 />
        </>
    );
}

export default AutoUpdate3;