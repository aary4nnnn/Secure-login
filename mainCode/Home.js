import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@quantum.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@secure.com' }
  ]);

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <h1 className={styles.pageHeading}>Contact Manager</h1>
        
        <div className={styles.controls}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search by Contact Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        <table className={styles.usersTable}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Contact Name</th>
              <th>Email</th>
              
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <div className={styles.actionButtons}>
                    <button 
                      onClick={() => navigate(`/update/${user.id}`)}
                      className={`${styles.actionButton} ${styles.updateButton}`}
                    >
                      Update
                    </button>
                    <button 
                      onClick={() => handleDelete(user.id)}
                      className={`${styles.actionButton} ${styles.deleteButton}`}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.createButtonContainer}>
          <button 
            onClick={() => navigate('/create')}
            className={styles.createButton}
          >
            Create
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
