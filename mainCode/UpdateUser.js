import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <p className="p-4 bg-green-200 text-gray-800 rounded-lg shadow-md mb-6 text-center">
        Keeping your information up to date ensures smooth communication and access to all features.
      </p>
      <div className="donation-container">
        <h2 className="donation-title">Update User Details</h2>
        <form className="donation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name:</label>
            <input 
              className="form-input"
              type="text" 
              required 
              value={userData.name}
              onChange={(e) => setUserData({...userData, name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email:</label>
            <input 
              className="form-input"
              type="email" 
              required 
              value={userData.email}
              onChange={(e) => setUserData({...userData, email: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number:</label>
            <input 
              className="form-input"
              type="tel" 
              required 
              value={userData.phone}
              onChange={(e) => setUserData({...userData, phone: e.target.value})}
            />
          </div>
          <button 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-20 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          type="submit">
          Update
          </button>

        </form>
      </div>
     
    </div>
  );
};

export default UpdateUser;