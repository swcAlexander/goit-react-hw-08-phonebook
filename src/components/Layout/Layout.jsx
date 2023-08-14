import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import styles from 'components/Layout/Layout.module.css';
import { ToastContainer } from 'react-toastify';
const Layout = () => {
  const auth = useSelector(state => state.auth.profile);
  return (
    <div className="container">
      <header className="header">
        <nav className={styles.layout_navigation}>
          {auth && <p>{auth.name}</p>}
          <NavLink to="/contacts" className={styles.homepage}>
            Phonebook
          </NavLink>
          <ul className={styles.layout_list}>
            <li className={styles.registration}>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className={styles.registration}>
              <NavLink to="/register">Registration page</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <ToastContainer autoClose={3000} />
      </main>
    </div>
  );
};
export default Layout;
