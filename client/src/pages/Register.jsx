// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // const Register = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     email: '',
// // //     password: '',
// // //     role: 'user',
// // //     team: '' // 🆕 Team field
// // //   });

// // //   const [teams, setTeams] = useState([]);
// // //   const [msg, setMsg] = useState('');

// // //   // 🆕 Fetch all teams when component loads
// // //   useEffect(() => {
// // //     const fetchTeams = async () => {
// // //       try {
// // //         const res = await axios.get('https://myokr-app.onrender.com');
// // //         setTeams(res.data);
// // //       } catch (err) {
// // //         console.error('Failed to load teams', err);
// // //       }
// // //     };

// // //     fetchTeams();
// // //   }, []);

// // //   const handleChange = (e) =>
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const res = await axios.post('https://myokr-app.onrender.com', formData);
// // //       setMsg(res.data.msg);
// // //     } catch (err) {
// // //       setMsg(err.response?.data?.msg || 'Something went wrong');
// // //     }
// // //   };

// // //   return (
// // //     <div className='form-card'>
// // //     <div className="container mt-5">
// // //       <h2 className="mb-4 text-center">Register</h2>
// // //       <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
// // //         <div className="mb-3">
// // //           <input type="text" name="name" className="form-control" placeholder="Name" required onChange={handleChange} />
// // //         </div>
// // //         <div className="mb-3">
// // //           <input type="email" name="email" className="form-control" placeholder="Email" required onChange={handleChange} />
// // //         </div>
// // //         <div className="mb-3">
// // //           <input type="password" name="password" className="form-control" placeholder="Password" required onChange={handleChange} />
// // //         </div>
// // //         <div className="mb-3">
// // //           <select name="role" className="form-select" onChange={handleChange} required>
// // //             <option value="user">User</option>
// // //             <option value="manager">Manager</option>
// // //             <option value="admin">Admin</option>
// // //           </select>
// // //         </div>

// // //         {/* 🆕 Team Selection Dropdown */}
// // //         <div className="mb-3">
// // //           <select name="team" className="form-select" onChange={handleChange} required>
// // //             <option value="">Select Team</option>
// // //             {teams.map(team => (
// // //               <option key={team._id} value={team._id}>
// // //                 {team.name}
// // //               </option>
// // //             ))}
// // //           </select>
// // //         </div>

// // //         <button type="submit" className="btn btn-primary w-100">Register</button>
// // //         {msg && <p className="mt-3 text-center text-success">{msg}</p>}
// // //         <p className="mt-3 text-center">
// // //           Already have an account? <a href="/login" className="text-decoration-none text-primary">Login here</a>
// // //         </p>
// // //       </form>
// // //     </div>
// // //     </div>
// // //   );
// // // };

// // // export default Register;
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const Register = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     role: 'user',
// //     team: ''
// //   });

// //   const [teams, setTeams] = useState([]);
// //   const [msg, setMsg] = useState('');

// //   // ✅ Fetch all teams when component loads
// //   useEffect(() => {
// //     const fetchTeams = async () => {
// //       try {
// //         const res = await axios.get('https://myokr-app.onrender.com/api/teams');
// //         setTeams(res.data);
// //       } catch (err) {
// //         console.error('Failed to load teams', err);
// //       }
// //     };

// //     fetchTeams();
// //   }, []);

// //   const handleChange = (e) =>
// //     setFormData({ ...formData, [e.target.name]: e.target.value });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axios.post('https://myokr-app.onrender.com/api/register', formData);
// //       setMsg(res.data.msg);
// //     } catch (err) {
// //       setMsg(err.response?.data?.msg || 'Something went wrong');
// //     }
// //   };

// //   return (
// //     <div className='form-card'>
// //       <div className="container mt-5">
// //         <h2 className="mb-4 text-center">Register</h2>
// //         <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
// //           <div className="mb-3">
// //             <input type="text" name="name" className="form-control" placeholder="Name" required onChange={handleChange} />
// //           </div>
// //           <div className="mb-3">
// //             <input type="email" name="email" className="form-control" placeholder="Email" required onChange={handleChange} />
// //           </div>
// //           <div className="mb-3">
// //             <input type="password" name="password" className="form-control" placeholder="Password" required onChange={handleChange} />
// //           </div>
// //           <div className="mb-3">
// //             <select name="role" className="form-select" onChange={handleChange} required>
// //               <option value="user">User</option>
// //               <option value="manager">Manager</option>
// //               <option value="admin">Admin</option>
// //             </select>
// //           </div>

// //           {/* ✅ Team Selection Dropdown */}
// //           <div className="mb-3">
// //             <select name="team" className="form-select" onChange={handleChange} required>
// //               <option value="">Select Team</option>
// //               {teams.map(team => (
// //                 <option key={team._id} value={team._id}>
// //                   {team.name}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>

// //           <button type="submit" className="btn btn-primary w-100">Register</button>
// //           {msg && <p className="mt-3 text-center text-success">{msg}</p>}
// //           <p className="mt-3 text-center">
// //             Already have an account? <a href="/login" className="text-decoration-none text-primary">Login here</a>
// //           </p>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'user',
//     team: ''
//   });

//   const [teams, setTeams] = useState([]);
//   const [msg, setMsg] = useState('');
//   const [loading, setLoading] = useState(false);

//   // ✅ Fetch teams on component load
//   useEffect(() => {
//     const fetchTeams = async () => {
//       try {
//         const res = await axios.get('https://myokr-app.onrender.com/api/teams');
//         setTeams(res.data);
//       } catch (err) {
//         console.error('Failed to load teams:', err);
//         setMsg('Unable to fetch teams');
//       }
//     };

//     fetchTeams();
//   }, []);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMsg('');
//     try {
//       const res = await axios.post('https://myokr-app.onrender.com/api/register', formData);
//       setMsg(res.data.msg || 'Registration successful');
//     } catch (err) {
//       setMsg(err.response?.data?.msg || 'Something went wrong');
//     }
//     setLoading(false);
//   };

//   return (
//     <div className='form-card'>
//       <div className="container mt-5">
//         <h2 className="mb-4 text-center">Register</h2>
//         <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
//           <div className="mb-3">
//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               placeholder="Name"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               placeholder="Email"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="password"
//               name="password"
//               className="form-control"
//               placeholder="Password"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <select name="role" className="form-select" onChange={handleChange} required>
//               <option value="user">User</option>
//               <option value="manager">Manager</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>

//           <div className="mb-3">
//             <select name="team" className="form-select" onChange={handleChange} required>
//               <option value="">Select Team</option>
//               {teams.map(team => (
//                 <option key={team._id} value={team._id}>
//                   {team.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//             {loading ? 'Registering...' : 'Register'}
//           </button>

//           {msg && (
//             <p className={`mt-3 text-center ${msg.includes('success') ? 'text-success' : 'text-danger'}`}>
//               {msg}
//             </p>
//           )}

//           <p className="mt-3 text-center">
//             Already have an account?{' '}
//             <a href="/login" className="text-decoration-none text-primary">Login here</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
// src/pages/Register.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
    team: ''
  });

  const [teams, setTeams] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await axios.get('https://myokr-app.onrender.com/api/teams');
        setTeams(res.data);
      } catch (err) {
        console.error('Failed to load teams', err);
      }
    };
    fetchTeams();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://myokr-app.onrender.com/api/auth/register', formData);
      setMsg(res.data.msg);
    } catch (err) {
      setMsg(err.response?.data?.msg || 'Something went wrong');
    }
  };

  return (
    <div className="form-card">
      <div className="container mt-5">
        <h2 className="mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
          <div className="mb-3">
            <input type="text" name="name" className="form-control" placeholder="Name" required onChange={handleChange} />
          </div>
          <div className="mb-3">
            <input type="email" name="email" className="form-control" placeholder="Email" required onChange={handleChange} />
          </div>
          <div className="mb-3">
            <input type="password" name="password" className="form-control" placeholder="Password" required onChange={handleChange} />
          </div>
          <div className="mb-3">
            <select name="role" className="form-select" onChange={handleChange} required>
              <option value="user">User</option>
              <option value="manager">Manager</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="mb-3">
            <select name="team" className="form-select" onChange={handleChange} required>
              <option value="">Select Team</option>
              {teams.map((team) => (
                <option key={team._id} value={team._id}>{team.name}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
          {msg && <p className="mt-3 text-center text-danger">{msg}</p>}
          <p className="mt-3 text-center">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
