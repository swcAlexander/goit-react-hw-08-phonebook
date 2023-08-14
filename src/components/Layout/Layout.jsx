import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense } from 'react';
import styles from 'components/Layout/Layout.module.css';
import { ToastContainer } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { selectUserData, selectUserToken } from 'redux/selectors';
import { logOutUserThunk } from 'redux/operations';
const Layout = () => {
  const auth = useSelector(selectUserData);
  const dispatch = useDispatch();
  const isAuth = useSelector(selectUserToken);
  const handleLogout = () => {
    dispatch(logOutUserThunk());
  };

  return (
    <div className="container">
      <header className="header">
        <nav className={styles.layout_navigation}>
          <NavLink to="/contacts" className={styles.homepage}>
            Phonebook
          </NavLink>
          {auth && <p>Welcome {auth.name}</p>}
          <ul className={styles.layout_list}>
            {isAuth ? (
              <li className={styles.registration}>
                <NavLink to="/login" type="button" onClick={handleLogout}>
                  LogOut
                </NavLink>
              </li>
            ) : (
              <li className={styles.registration}>
                <NavLink to="/login">LogIn</NavLink>
              </li>
            )}
            <li className={styles.registration}>
              <NavLink to="/register">Registration page</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer autoClose={3000} />
      </main>
    </div>
  );
};
export default Layout;
