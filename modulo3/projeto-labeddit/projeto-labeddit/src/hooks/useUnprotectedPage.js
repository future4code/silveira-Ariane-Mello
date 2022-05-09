import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { goToFeed } from '../routes/coordinator';

const useUnprotectedPage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      goToFeed(navigate);
    }
  }, [navigate]);
};

export default useUnprotectedPage;