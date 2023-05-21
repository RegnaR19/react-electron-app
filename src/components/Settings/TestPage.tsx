// экспериментальная страница
import { useSpring, animated } from '@react-spring/web'
import { useEffect, useState } from 'react'

const TestPage = () => {

   const [count, setCount] = useState(0);

   useEffect(() => {
      document.title = `You clicked ${count} times`;
   }), [];

   return (
      <>
         <div className="col2-app">
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
               Click me
            </button>
         </div>
      </>
   )
}

export default TestPage