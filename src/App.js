import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './Style.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import NotFound from './components/NotFound';
import React, { Suspense, useLayoutEffect } from 'react';
import Loading from './components/Loading';
const Home = React.lazy(() => import('./components/Home'));
const Aboutus = React.lazy(() => import('./components/Aboutus'));
const Blogs = React.lazy(() => import('./components/Blogs'));
const BLogDetail = React.lazy(() => import('./components/BLogDetail'));

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Wrapper>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blog_detail' element={<BLogDetail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Wrapper>
      </Suspense>
    </div>
  );
}

export default App;
