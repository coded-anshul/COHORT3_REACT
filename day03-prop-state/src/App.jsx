// import React from 'react'
// import Contact from './Contact';
// import Something, {four, one,two} from "./test";


// const App = () => {
//   Something();

//   one();

//   two();

//   four();

//   return (
//     <div>
//       <h1>hey i am react</h1>
//       <Contact/>
//     </div>
//   );
// };


// export default App

// import Navbar from './Navbar'
// import Hero from './components/Hero'
// import Footer from './components/Footer'


import React, { useState } from 'react'

const App = () => {

  let [count, setCount] = useState(0);
  
  


  return (
    <div>
      <h1>Count is - {count}</h1>
      <button onClick={() => {
        
        setCount(count+1);
      }}>Increment</button>
    </div>
  )
}

export default App

