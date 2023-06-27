import { AppDispatch, RootState } from '@/redux/redux-store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import achievement from '../sounds/Xbox 360 Achievment.mp3'
import startup from '../sounds/startup.mp3'
import { Howl } from 'howler'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const achievementSound = () => {
    new Audio(achievement).play()
}

export const startUp = () => new Howl({
    src: [startup],
    format: ['mp3'],
    autoplay: true
})
