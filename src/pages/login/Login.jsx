import { Wrapper } from './LoginStyles';
import frmImg from '../../assets/frmImg.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <Wrapper>
      <div className="overlay"></div>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="img">
            <img src={frmImg} alt="Form header Image" />
          </div>

          <label htmlFor="username">user name</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Login;