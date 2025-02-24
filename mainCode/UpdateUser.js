import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateUser.css'; // ✅ Import new styles

const UpdateUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    id: userId,
    name: 'John Doe',
    email: 'john@quantum.com',
    phone: '123-456-7890'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="update-container">
      <div className="update-box">
        <h2 className="update-title">Update User Details</h2>
        <form className="update-form" onSubmit={handleSubmit}>
          <label className="update-label">Full Name:</label>
          <input 
            className="update-input"
            type="text" 
            required 
            value={userData.name}
            onChange={(e) => setUserData({...userData, name: e.target.value})}
          />

          <label className="update-label">Email:</label>
          <input 
            className="update-input"
            type="email" 
            required 
            value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
          />

          <label className="update-label">Phone Number:</label>
          <input 
            className="update-input"
            type="tel" 
            required 
            value={userData.phone}
            onChange={(e) => setUserData({...userData, phone: e.target.value})}
          />

          <button type="submit" className="update-button">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
