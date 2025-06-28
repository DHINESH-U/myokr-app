import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Confetti from 'react-confetti';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [okrs, setOkrs] = useState([]);
  const [newOKR, setNewOKR] = useState({ title: '', description: '', progress: 0 });
  const [editingId, setEditingId] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const getOKRs = async () => {
    const res = await axios.get('http://localhost:5000/api/okrs');
    setOkrs(res.data);
  };

  useEffect(() => {
    getOKRs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Number(newOKR.progress) === 100) {
      toast.success('🎯 Goal Achieved!');
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    }

    if (editingId) {
      await axios.put(`http://localhost:5000/api/okrs/${editingId}`, newOKR);
    } else {
      await axios.post('http://localhost:5000/api/okrs', newOKR);
    }
    setNewOKR({ title: '', description: '', progress: 0 });
    setEditingId(null);
    getOKRs();
  };

  const handleEdit = (okr) => {
    setNewOKR({ title: okr.title, description: okr.description, progress: okr.progress });
    setEditingId(okr._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/okrs/${id}`);
    getOKRs();
  };

  const getProgressBarColor = (progress) => {
    if (progress >= 80) return 'bg-success';
    if (progress >= 50) return 'bg-info';
    if (progress >= 20) return 'bg-warning';
    return 'bg-danger';
  };

  return (
    <div className="container mt-4">
      {showConfetti && <Confetti />}
      <ToastContainer position="top-center" autoClose={3000} />

      <div className="mb-3 d-flex justify-content-between align-items-center">
        <h2>{editingId ? 'Edit OKR' : 'Add New OKR'}</h2>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('user');
            window.location.href = '/login';
          }}
        >
          Logout
        </button>
      </div>
      <div className="mb-3 d-flex justify-content-center">
  <input
    className="form-control w-50"
    placeholder="Search OKRs..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>



      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="mb-2 form-control"
          placeholder="Title"
          value={newOKR.title}
          onChange={(e) => setNewOKR({ ...newOKR, title: e.target.value })}
          required
        />
        <input
          className="mb-2 form-control"
          placeholder="Description"
          value={newOKR.description}
          onChange={(e) => setNewOKR({ ...newOKR, description: e.target.value })}
          required
        />
        <input
          className="mb-2 form-control"
          type="number"
          placeholder="Progress %"
          value={newOKR.progress}
          onChange={(e) => setNewOKR({ ...newOKR, progress: e.target.value })}
          required
        />
       <div className="d-flex justify-content-center">
  <button className="px-4 btn btn-primary">
    {editingId ? 'Update OKR' : 'Add OKR'}
  </button>
</div>

      </form>

     {okrs
  .filter((okr) =>
    okr.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    okr.description.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .map((okr) => (
    <div key={okr._id} className="p-3 mb-3 shadow-sm card">
      <h5>{okr.title}</h5>
      <p>{okr.description}</p>

     <div className="mb-3 d-flex align-items-center">
  <div className="me-3" style={{ width: 60, height: 60 }}>
    <CircularProgressbar
      value={okr.progress}
      text={`${okr.progress}%`}
      styles={buildStyles({
        pathColor: `rgba(62, 152, 199, ${okr.progress / 100})`,
        textColor: '#333',
        trailColor: '#eee'
      })}
    />
  </div>
  <div>
    <label className="mb-0 form-label"><strong>Progress</strong></label>
  </div>
</div>


      {okr.owner && <small>Owner: {okr.owner.name}</small>}
      <div className="mt-2">
        <button onClick={() => handleEdit(okr)} className="btn btn-sm btn-warning me-2">
          Edit
        </button>
        <button onClick={() => handleDelete(okr._id)} className="btn btn-sm btn-danger">
          Delete
        </button>
      </div>
    </div>
))}

    </div>
  );
};

export default Dashboard;
