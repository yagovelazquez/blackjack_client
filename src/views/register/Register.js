import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../shared/components/button/Button';
import Headings from '../../shared/components/texts/Heading';
import Paragraph from '../../shared/components/texts/Paragraph';
import Small from '../../shared/components/texts/Small';
import RegisterForm from './components/RegisterForm';

function Register(params) {
  const navigate = useNavigate();

  const changeToSignInHandler = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  return (
    <div className="mb-[200px] flex flex-col w-[300px]">
      <Headings variant="h3" className="text-gray900 font-[500]">
        Welcome to the blackjack game
      </Headings>
      <Paragraph className="mt-2">
        Game was made using a rest-api with node on the backend
      </Paragraph>
      <Paragraph className="mt-5 mb-10">Register to see in action</Paragraph>
      <RegisterForm />
      <Small className="my-5">Already have account?</Small>
      <Button
        onClick={changeToSignInHandler}
        className="bg-white text-gray900 border-white border hover:border hover:border-gray900 hover:bg-white"
      >
        Sign in
      </Button>
    </div>
  );
}
export default Register;
