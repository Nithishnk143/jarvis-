import { useNavigate } from 'react-router-dom';
import PsychometricTest from '../../../components/PsychometricTest';

const DegreeQuiz = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-4">
      <PsychometricTest onComplete={() => navigate('/portal/twelfth')} />
    </div>
  );
};

export default DegreeQuiz;
