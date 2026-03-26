import { useNavigate } from 'react-router-dom';
import PsychometricTest from '../../../components/PsychometricTest';

const CareerSwitch = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-4">
      <PsychometricTest onComplete={() => navigate('/portal/professional')} />
    </div>
  );
};

export default CareerSwitch;
