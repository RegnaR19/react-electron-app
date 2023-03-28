import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import s from './Post.module.css'

type Props = {
    id: number,
    header: string,
    message: string,
    likescount: number,
    img: string
}

const Cards: React.FC<Props> = ({ id, header, message, likescount, img }) => {
    return (
        <>
            <Card shadow="sm" p="lg" radius="md" withBorder className={s.item}>
                <Card.Section className={s.item}>
                    <Image className={s.item} src={img} />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{header}</Text>
                    <Badge color="pink" variant="light">
                        {likescount} лайков
                    </Badge>
                </Group>

                <Text size="xl">
                    {message}
                </Text>

                <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                    Номер поста: {id}
                </Button>
            </Card>
            <br />
        </>
    );
}

export default Cards