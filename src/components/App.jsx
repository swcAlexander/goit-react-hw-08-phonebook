import { Routes, Route, Navigate } from 'react-router-dom';
import React, { lazy } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Layout from 'components/Layout/Layout';

const LazyPhonebook = lazy(() => import('pages/Phonebook'));
const LazyRegisterPage = lazy(() => import('pages/RegisterPage'));
const LazyLoginPage = lazy(() => import('pages/LoginPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/contacts"
          element={<LazyPhonebook redirectTo="/contacts" />}
        />
        <Route
          path="/register"
          element={<LazyRegisterPage redirectTo="/register" />}
        />
        <Route path="/login" element={<LazyLoginPage redirectTo="/login" />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
