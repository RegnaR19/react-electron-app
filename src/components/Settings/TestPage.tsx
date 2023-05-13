// экспериментальная страница
import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react'

const TestPage = () => {

   const [open, setOpen] = useState(true)

   const [springs, api] = useSpring(() => ({
      from: {
         x: 0,
         opacity: 0.1
      },
      to: {
         x: 100,
         opacity: 1
      },
      config: { duration: 1000, mass: 100, tension: 100, friction: 100 },
      loop: {
         reverse: true,
      },
      trans: [0, 1, 2],
   }))

   const handleClick = () => {
      api.start({
         opacity: 1 ? 1 : 1,
         loop: {
            reverse: true,
         },
      })
   }

   return (
      <>
         <div className="col2-app">
            <animated.div
               onClick={handleClick}
               style={{
                  width: 180,
                  height: 180,
                  background: '#ddd',
                  borderRadius: 10,
                  ...springs,
               }}
            />
         </div>
      </>
   )
}

export default TestPage