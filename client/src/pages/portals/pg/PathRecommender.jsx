import { useNavigate } from 'react-router-dom';
import PsychometricTest from '../../../components/PsychometricTest';

const PathRecommender = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-4">
      <PsychometricTest onComplete={() => navigate('/portal/pg')} />
    </div>
  );
};

export default PathRecommender;
