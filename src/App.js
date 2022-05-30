import './app.css'
import Header from "./components/Header/Header.component";
import Home from './components/Home/Home.component';
import Checkout from './components/Checkout/Checkout.component';
import { Route, Routes } from 'react-router-dom';
const App = () => {

  return (

    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={
          <>

            <Home />
          </>} />

        <Route path='/checkout' element={<Checkout />} />
      </Routes>


    </div>

  );
}

export default App;
