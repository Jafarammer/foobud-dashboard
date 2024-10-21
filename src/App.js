import React from 'react'
// react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// redux
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {persistor,store} from './store'
// css
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
// routes
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
// theme
import Theme from './Theme';
// layout
import MainLayout from './layouts/MainLayout';
// pages
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Theme>
          <Router>
            <Routes>
              <Route 
                path="/login"
                element={
                  <PublicRoutes>
                    <Login/>
                  </PublicRoutes>
                }
              />
              <Route 
                path="/register"
                element={
                  <PublicRoutes>
                    <Register/>
                  </PublicRoutes>
                }
              />
              <Route
                path='/'
                element={
                  <PrivateRoutes>
                    <MainLayout/>
                  </PrivateRoutes>
                }
              >
                <Route path='/' element={<Home/>} />
                <Route path='/profile' element={<Profile/>} />
              </Route>
            </Routes>
          </Router>
        </Theme>
      </PersistGate>
    </Provider>
  )
}

export default App