import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import LanguageContext from '../../context/LanguageContext';

function HomepageLayout() {
  const { language } = useContext(LanguageContext);

  return (
    <div dir={language === "en" ? "ltr" : "rtl"}>
      <Navbar NavbarTitle={"EcommerceApp"} />
      <Outlet />
    </div>
  );
}

export default HomepageLayout;
