import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Layout from './pages/Layout';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import { AppContext, Provider } from './contexts/userContext';
import Courses from './pages/Courses';
import AddCourseForm from './pages/AddCourseForm';
import EditCourseForm from './pages/EditCourseForm';
import EditProfile from './pages/EditProfile';
import { useContext } from 'react';
import Homepage from './pages/Homepage';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { currentUser } = useContext(AppContext);
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      {props.children}
    </>
  );
};

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Provider>
          <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="" element={<Homepage/>}/>
                <Route path="login" element={<LoginForm/>}/>
                <Route path="register" element={<RegisterForm/>}/>
                <Route path="edit-profile" element={
                <ProtectedRoute>
                  <EditProfile/>
                </ProtectedRoute>}/>
                <Route path="courses" element={
                <ProtectedRoute>
                  <Courses/>
                </ProtectedRoute>}/>
                <Route path="add-course" element={
                <ProtectedRoute>
                  <AddCourseForm/>
                </ProtectedRoute>}/>
                <Route path="edit-course/:id" element={
                <ProtectedRoute>
                  <EditCourseForm/>
                </ProtectedRoute>}/>
              <Route path="*" element={<h1>Not Found</h1>}/>
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
