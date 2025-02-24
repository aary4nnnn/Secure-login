import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', phone_No: '9899333333', email: 'john@quantum.com' },
    { id: 2, name: 'Jane Smith', phone_No: '9899333334', email: 'jane@secure.com' }
  ]);

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <main className="mainContent">
        <h1 className="pageHeading">Contact Manager</h1>
        
        <div className="controls">
          <div className="searchContainer">
            <input
              type="text"
              placeholder="Search by Contact Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="searchInput"
            />
          </div>
        </div>

        <table className="usersTable">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Contact Name</th>
              <th>Phone No</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.phone_No}</td>
                <td>{user.email}</td>
                <td>
                  <div className="actionButtons">
                    {/* ✅ Navigate to the update page with user ID */}
                    <button 
                      onClick={() => navigate(`/update/${user.id}`)}
                      className="actionButton updateButton"
                    >
                      Update
                    </button>
                    <button 
                      onClick={() => handleDelete(user.id)}
                      className="actionButton deleteButton"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="createButtonContainer">
          <button 
            onClick={() => navigate('/create')}
            className="createButton"
          >
            Create
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
