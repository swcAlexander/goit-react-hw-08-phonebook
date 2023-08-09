import { Routes, Route, Navigate } from 'react-router-dom';
import React, {  lazy } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Layout from 'components/Layout/Layout';



const LazyPhonebook = lazy(() => import('pages/Phonebook'));
const LazyRegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LazyLogin = lazy(() => import('pages/Login'));



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LazyPhonebook />} />
        <Route path='/pages/RegistrationPage' element={<LazyRegistrationPage to="/pages/RegistrationPage" />} />
        <Route path='/pages/Login' element={<LazyLogin to="/pages/Login" />}/>

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;