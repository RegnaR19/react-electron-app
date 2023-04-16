import { Button, Group, Image, List, Modal } from "@mantine/core";
import { useState } from 'react';
import Indent10 from "./Indent";
import chica from '../../assets/chika-fujiwara.gif'
import tobe from '../../assets/to-be-continued.jpg'
import { notifications } from "@mantine/notifications";
import { IconBrandXbox } from "@tabler/icons-react";

const AutoUpdate3 = () => {
    const [opened, setOpened] = useState(false);

    const successForm = () => {
        notifications.show({
            withCloseButton: false,
            autoClose: 5000,
            title: "100G за просмотр ченджлога!",
            message: 'Спасибо за просмотр.',
            color: 'lime',
            icon: <IconBrandXbox />,
            className: 'my-notification-class',
            loading: false,
            styles: (theme) => ({
                root: {
                    backgroundColor: theme.colors.gray[4],
                    '&::before': { backgroundColor: theme.white },
                },
                title: { color: theme.black },
                description: { color: theme.black },
            }),
        })
    }

    return (
        <>
            <Modal size="auto"
                opened={opened}
                onClose={() => setOpened(false)}
                title="Подробности обновления программы до версии 1.0.4"
            >
                <Image src={chica} mx="auto" radius="md" />
                <List>
                    <h4>Общие изменения:</h4>
                    <List.Item>Добавлена иконка к кнопке "Изменить размер"<br />
                        (теперь программа открывается сразу в большом размере,<br /> так что эта кнопка только для разработчика)</List.Item>
                    <List.Item>По умолчанию главной установлена страница "Новости"</List.Item>
                </List>
                <List>
                    <h4>Страница "Пользователи":</h4>
                    <List.Item>Были добавлены аватары с сервера к пользователям, которые их добавили</List.Item>
                    <List.Item>Работает переход по страницам</List.Item>
                    <List.Item>Страница профиля была немного обновлена</List.Item>
                    <List.Item>Открывается профиль каждого из пользователей</List.Item>
                </List>
                <List>
                    <h4>Страница "Профиль":</h4>
                    <List.Item>Страница профиля была обновлена</List.Item>
                </List>
                <Indent10 />
            </Modal>
            <Indent10 />
            <Group position="center">
                <Button onClick={() => setOpened(true)} onClickCapture={successForm}
                    variant="gradient" gradient={{ from: 'teal', to: 'magenta', deg: 60 }}>
                    ✅ 1.0.4</Button>
            </Group>
            <Indent10 />
        </>
    );
}

export default AutoUpdate3;