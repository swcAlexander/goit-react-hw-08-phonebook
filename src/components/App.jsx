import { Routes, Route, Navigate } from 'react-router-dom';
import React, { lazy, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Layout from 'components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserToken } from 'redux/selectors';
import { refreshUserThunk } from 'redux/operations';
import RequereAuth from 'hoc/RequereAuth';

const LazyPhonebook = lazy(() => import('pages/Contacts'));
const LazyRegisterPage = lazy(() => import('pages/RegisterPage'));
const LazyLoginPage = lazy(() => import('pages/LoginPage'));

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);
  useEffect(() => {
    if (!token) return;
    dispatch(refreshUserThunk());
  }, [token, dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
          <RequereAuth>
            <LazyPhonebook redirectTo="/contacts" />
          </RequereAuth>}
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
