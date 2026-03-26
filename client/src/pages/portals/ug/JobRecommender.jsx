import { useNavigate } from 'react-router-dom';
import PsychometricTest from '../../../components/PsychometricTest';

const JobRecommender = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-4">
      <PsychometricTest onComplete={() => navigate('/portal/ug')} />
    </div>
  );
};

export default JobRecommender;
