import { Button, Group, Modal } from "@mantine/core";
import { useState } from 'react';
import Indent10 from "../Forms/Indent";
import s from '../../App.module.css'

const AutoUpdate = () => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <Modal size="auto"
                opened={opened}
                onClose={() => setOpened(false)}
                title="Автообновление (будет в будущем)"
            >
                <img src="electron-vite.svg" className={s.logo} />
                Обновление программы до версии 1.х.х
            </Modal>
            <Indent10 />
            <Group position="center">
                <Button onClick={() => setOpened(true)}
                    variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
                    Автообновление</Button>
            </Group>
            <Indent10 />
        </>
    );
}

export default AutoUpdate;