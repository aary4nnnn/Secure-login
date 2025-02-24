import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateUser.css';

export default function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate a user creation process with a delay
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Randomly resolve or reject for simulation purposes
          Math.random() > 0.1 ? resolve() : reject('Error creating user');
        }, 1500);
      });
      // On success, navigate to a success page or dashboard
      navigate('/success');
    } catch (err) {
      setError(err || 'User creation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page-container2">
      <div className="auth-container2">
        <h2 className="auth-heading2">Create User</h2>
        <form onSubmit={handleSubmit} className="auth-form2">
          <div className="form-group2">
            <label className="form-label2">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input2"
              disabled={loading}
            />
          </div>

          <div className="form-group2">
            <label className="form-label2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input2"
              disabled={loading}
            />
          </div>

          <div className="form-group2">
            <label className="form-label2">Phone Number:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="form-input2"
              disabled={loading}
            />
          </div>

          {error && <div className="error-message2">{error}</div>}

          <button 
            type="submit" 
            className="auth-button2"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading-spinner2"></span>
                Creating...
              </>
            ) : 'Create'}
          </button>
        </form>
      </div>
    </div>
  );
}
