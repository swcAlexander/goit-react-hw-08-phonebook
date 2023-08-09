import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styles from 'components/Layout/Layout.module.css';
import { ToastContainer } from 'react-toastify';
const Layout = () => {
  return (
    <div className="container">
      <header className="header">
        <nav>
          <ul className={styles.layout_list}>
            <li>
              <NavLink to="/" end className="home_movies">
                Phonebook
              </NavLink>
            </li>
            <li>
              <NavLink to="/pages/RegistrationPage">Registration page</NavLink>
            </li>
            <li>
              <NavLink to="/pages/Login">Login</NavLink>
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