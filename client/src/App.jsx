// // src/App.jsx
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Register from './pages/Register';

// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import ProtectedRoute from './components/ProtectedRoute';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Default route shows Register */}
//         <Route path="/" element={<Register />} />
        
//         {/* Login route */}
//         <Route path="/login" element={<Login />} />
        
//         {/* Protected dashboard route */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="/" element={<Home />} />

//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // ✅ this path must be correct
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* ✅ Home route */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
