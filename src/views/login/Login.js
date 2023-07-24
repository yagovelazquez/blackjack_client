import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../shared/components/button/Button';
import Headings from '../../shared/components/texts/Heading';
import Paragraph from '../../shared/components/texts/Paragraph';
import Small from '../../shared/components/texts/Small';
import LoginForm from './components/LoginForm';

function Login(params) {
  const navigate = useNavigate();

  const createAccountHandler = useCallback(() => {
    navigate('/register');
  }, [navigate]);

  return (
    <div className="mb-[200px] flex flex-col w-[300px]">
      <Headings variant="h3" className="text-gray900 font-[500]">
        Welcome to the blackjack game
      </Headings>
      <Paragraph className="mt-2">
        Game was made using a rest-api with node on the backend
      </Paragraph>
      <Paragraph className="mt-5 mb-10">Sign in to see in action</Paragraph>
      <LoginForm />
      <Small className="mt-5">Forgot password?</Small>
      <Small className="mb-5 mt-1 text-gray900">Do not have account?</Small>
      <Button
        onClick={createAccountHandler}
        className="bg-white text-gray900 border-white border hover:border hover:border-gray900 hover:bg-white"
      >
        Create account
      </Button>
    </div>
  );
}
export default Login;
