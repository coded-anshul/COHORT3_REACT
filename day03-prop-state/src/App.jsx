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

import React from 'react'
import Navbar from './Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App

