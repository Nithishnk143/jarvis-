import { useNavigate } from 'react-router-dom';
import PsychometricTest from '../../../components/PsychometricTest';

const StreamQuiz = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-4">
      <PsychometricTest onComplete={() => navigate('/portal/tenth')} />
    </div>
  );
};

export default StreamQuiz;
