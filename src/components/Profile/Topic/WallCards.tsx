import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core';
import s from './Post.module.css'
import Indent10 from '@/components/Forms/Indent';
import { useSpring, animated } from '@react-spring/web'

type Props = {
   id: number,
   header: string,
   message: string,
   likescount: number,
   img: string
}

const Cards: React.FC<Props> = ({ id, header, message, likescount, img }) => {

   const [springs] = useSpring(() => ({
      from: {
         opacity: 0,
         scale: 1,
      },
      to: {
         opacity: 1,
         scale: 1,
      },
      delay: 500,
      config: { duration: 1500, mass: 10, tension: 10, friction: 10 },
   }))

   return (
      <>
         <animated.div style={{
            ...springs
         }}>
            <Card shadow="sm" p="lg" radius="md" withBorder className={s.item}>
               <Group position="apart" mb="xs">
                  <Text weight={500} size="xl">{header}</Text>
                  <Grid justify="center" align="center">
                     <Grid.Col span="auto">
                        <Badge color="pink" variant="light">
                           {likescount} лайков
                        </Badge>
                     </Grid.Col>
                     <Grid.Col span="auto">
                        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                           # {id}
                        </Button>
                     </Grid.Col>
                  </Grid>
               </Group>

               <Text>
                  {message}
               </Text>
               <br />
               <Card.Section className={s.item}>
                  <Image className={s.item} src={img} />
               </Card.Section>
            </Card>
            <Indent10 />
         </animated.div>
      </>
   );
}

export default Cards