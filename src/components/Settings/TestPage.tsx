// экспериментальная страница
import { useSpring, animated } from '@react-spring/web'

const TestPage = () => {

   const [springs, api] = useSpring(() => ({
      from: {
         x: 0,
         opacity: 0,
      },
      to: {
         x: 100,
         opacity: 1,
      },
   }))

   const handleClick = () => {
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

   return (
      <>
         <div className="col2-app">
            <h3>Тестовая страница</h3>
            <animated.div
               onClick={handleClick}
               style={{
                  width: 180,
                  height: 180,
                  background: '#ff6d6d',
                  ...springs,
               }}
            />rdtegdfgdsfg
         </div>
      </>
   )
}

export default TestPage