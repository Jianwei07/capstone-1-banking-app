import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NavigateToHome() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate('/capstone-1-banking-app');
  }, [navigate]);

  return null;
}

export default NavigateToHome;
