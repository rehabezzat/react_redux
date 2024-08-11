import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store/store';
import ThemeContext from './context/ThemeContext';
import LanguageContext from './context/LanguageContext';

// const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const ProductItem = lazy(() => import('./components/ProductItem/ProductItem'));
const ProductList = lazy(() => import('./components/Products/Products'));
const CartPage = lazy(() => import('./components/cartPage/cartPage'));
const NotfoundPage = lazy(() => import('./pages/NotfoundPage'));
const HomepageLayout = lazy(() => import('./components/Layouts/HomePageLayout'));




const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <BrowserRouter>
            <Suspense fallback={<div>Loading Navbar...</div>}>
              {/* <Navbar /> */}
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomepageLayout />}>
                  <Route index element={<Home />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/products" element={<ProductList />} />
                  <Route path="/product/:id" element={<ProductItem />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="*" element={<NotfoundPage />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </Provider>
  );
};

export default App;
