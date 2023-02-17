import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Checkout from '../containers/Checkout'
import Home from '../containers/Home'
import Information from '../containers/Information'
import NotFound from '../containers/NotFound'
import Payment from '../containers/Payment'
import Success from '../containers/Success'
import { AppProvider } from "../context/AppContext";

const Ap = () => {
    return (
      <AppProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}/>      
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/checkout/information' element={<Information />} />
              <Route path='/checkout/payment' element={<Payment />} />
              <Route path='/checkout/success' element={<Success />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>  
        </BrowserRouter>
      </AppProvider>    
    );
  };
  
  export default Ap;