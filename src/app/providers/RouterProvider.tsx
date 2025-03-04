import { Routes, Route, Navigate } from 'react-router-dom';

import BoardsPage from '@pages/BoardsPage/BoardsPage';
import BoardPage from '@pages/BoardPage/BoardPage';
import Page401 from '@pages/Page401/Page401';
import Header from '@widgets/Header/Header';
import AuthPage from '@pages/AuthPage/AuthPage';

export default function RouterProvider() {
  const isLogged = !!localStorage.getItem('accessToken');

  return (
    <>
      {isLogged && <Header />}
      <Routes>
        <Route
          path='/'
          element={isLogged ? <Navigate to='/boards' replace /> : <AuthPage />}
        />
        {isLogged ? (
          <>
            <Route path='/boards' element={<BoardsPage />} />
            <Route path='/boards/:id' element={<BoardPage />} />
          </>
        ) : (
          <Page401 />
        )}
      </Routes>
    </>
  );
}
