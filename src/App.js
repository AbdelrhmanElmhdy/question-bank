import './App.css';
import Navbar from './Navbar';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Navbar />

    <Router>      
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
    </> 
  );
}

export default App;