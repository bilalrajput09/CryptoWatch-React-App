import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  const backtoHomeHandler = () => {
    navigate('/');
  };
  return (
    <div className="error">
      <h1>Something went wrong!</h1>
      <button type="button" onClick={backtoHomeHandler}>
        Back Home
      </button>
    </div>
  );
};

export default Error;
