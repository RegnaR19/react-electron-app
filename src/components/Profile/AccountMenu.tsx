import { forwardRef } from 'react';
import { IconChevronRight, IconExternalLink } from '@tabler/icons-react';
import { Group, Avatar, Text, Menu, UnstyledButton } from '@mantine/core';
import avatar from "./../../assets/avatar.jpg";

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
   image: string;
   name: string;
   email: string;
   icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
   ({ image, name, email, icon, ...others }: UserButtonProps, ref) => (
      <UnstyledButton
         ref={ref}
         sx={(theme) => ({
            display: 'block',
            width: '100%',
            padding: theme.spacing.md,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

            '&:hover': {
               backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
         })}
         {...others}
      >
         <Group>
            <Avatar src={image} radius="xl" />

            <div style={{ flex: 1 }}>
               <Text size="sm" weight={500}>
                  {name}
               </Text>

               <Text color="dimmed" size="xs">
                  {email}
               </Text>
            </div>

            {icon || <IconChevronRight />}
         </Group>
      </UnstyledButton>
   )
);

const AccountMenu = () => {
   return (
      <Group position="center">
         <Menu withArrow>
            <Menu.Target>
               <UserButton
                  image={avatar}
                  name="Vadim Khakimyanov"
                  email="nar200@yandex.ru"
               />
            </Menu.Target>
         </Menu>
      </Group>
   );
}

export default AccountMenu;