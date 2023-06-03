// экспериментальная страница
import { useEffect, useState } from 'react'

const TestPage = () => {

   const [count, setCount] = useState(0);

   useEffect(() => {
      document.title = `You clicked ${count} times`;
   }), [];

   return (
      <>
         <div className="col2-app">
            <p>Вы кликнули {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
               Кликни
            </button>
         </div>
      </>
   )
}

export default TestPage