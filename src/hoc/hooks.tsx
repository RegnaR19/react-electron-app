import { notifications } from '@mantine/notifications'
import { useSpring, animated } from '@react-spring/web'
import { IconBrandXbox } from '@tabler/icons-react'

export const [springs, api] = useSpring(() => ({
    from: {
        x: 0,
        opacity: 0,
    },
    to: {
        x: 100,
        opacity: 1,
    },
}))

export const handleClick = () => {
    api.start({
        from: {
            x: 0,
            opacity: 0,
        },
        to: {
            x: 100,
            opacity: 1,
        },
    })
}

