import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/dashboardPage/dashboardPage';
import Layout from './layout/layout';
import NotFoundPage from './pages/notFoundPage/notFoundPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to={"/dashboard"}/>} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
