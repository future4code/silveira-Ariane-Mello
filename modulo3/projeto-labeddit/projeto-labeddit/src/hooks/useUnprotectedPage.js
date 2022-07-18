import { useNavigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { goToFeed } from '../routes/coordinator';

const useUnprotectedPage = () => {

  const navigate = useNavigate();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      goToFeed(navigate)
    }
  }, [navigate])
};

export default useUnprotectedPage;