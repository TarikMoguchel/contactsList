import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AuthPage } from './pages/AuthPage/organoids/AuthPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ContactsPage } from './pages/ContactsPage/organoids/ContactsPage';
import { BrowserRouter,Navigate,Route, Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
			<Routes>
      <Route path="/" element={<Navigate to="/contacts" replace />} />
				<Route path="/contacts" element={<ContactsPage/>}/>
				<Route path="/auth" element={<AuthPage/>}/>
			</Routes>
      <ToastContainer/>
		</BrowserRouter>
    </div>
  );
}

export default App;
