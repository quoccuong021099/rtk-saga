import Button from '@mui/material/Button';
import { useAppDispatch } from 'app/hooks';
import { NotFound, PrivateRoute } from 'component/Common';
import { AdminLayout } from 'component/Layout';
import { authAction } from 'features/auth/authSlice';
import LoginPage from 'features/auth/pages/LoginPage';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(authAction.logout())
  }
  return (
    <>
      <Button color="secondary" onClick={handleLogout}>Logout</Button>
      <Routes>
        <Route path="/" element={<>a</>} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
