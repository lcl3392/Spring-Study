import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <div className="App">
      {/* 브라우저에서 라우팅을 활성화, 앱의 전체 라우팅은 이 컴포넌트로 감싸진다. */}
      <BrowserRouter>   
      {/* 네비게이션 메뉴 */}
      <nav>  
        <Link to="/">Home</Link>{' '}
        <Link to="/contact">Contact</Link>{' '}
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
