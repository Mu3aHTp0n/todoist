import { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import BoardsPage from '@pages/BoardsPage/BoardsPage';
import BoardPage from '@pages/BoardPage/BoardPage';
import Page401 from '@pages/Page401/Page401';
import Header from '@widgets/Header/Header';
import AuthForm from '@widgets/AuthForm/AuthForm';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    setIsLogged(localStorage.getItem('accessToken') ? true : false);
  }, []);

  return (
    <BrowserRouter>
      {isLogged ? <Header /> : ''}
      <Routes>
        <Route
          path='/'
          element={isLogged ? <Navigate to='/boards' replace /> : <AuthForm />}
        />
        <Route
          path='/boards'
          element={isLogged ? <BoardsPage /> : <Page401 />}
        />
        <Route
          path='/boards/:id'
          element={isLogged ? <BoardPage /> : <Page401 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
