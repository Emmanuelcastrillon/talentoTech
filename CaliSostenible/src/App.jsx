
import Header from './components/Header';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom';
import Home from './routes/Home';




function App() {
  

  return (
   <div>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>


    </Routes>

    <Footer/>
   </div>
  )
}

export default App
