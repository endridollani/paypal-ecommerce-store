import { useNavigate } from 'react-router-dom';

type IProps = {
  allowed: boolean;
};

function ProtectedRoute({ allowed }: IProps) {
  const navigate = useNavigate();
  if (!allowed) {
    navigate('/login');
  }
}

export default ProtectedRoute;
