import { Fragment, useCallback, useContext } from 'react';
import { Form } from '../../../shared/components/form/Form';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { userClient } from '../../../client/user/userClient';
import { UserContext } from '../../../contexts/userContext';
import useLocalStorage from '../../../shared/hooks/useLocalStorage';
import LoadingSpinnerModal from '../../../shared/components/loading/LoadingSpinnerModal';
import { useNavigate } from 'react-router-dom';

const inputList = [
  {
    name: 'email',
    placeholder: 'Email',
    inputContainerClass: '',
    type: 'email',
  },
  {
    name: 'password',
    placeholder: 'Password',
    inputContainerClass: '',
    type: 'password',
  },
];

const classes = {
  buttonContainer: 'w-full',
  button: 'w-full',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required('This field is required'),
  password: Yup.string().required('This field is required'),
});

const initialValues = {
  password: '',
  email: '',
};

function LoginForm() {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext);
  const { setItem } = useLocalStorage();
  const { mutateAsync: mutateAsyncLogin, isLoading: isLoadingLogin } =
    useMutation(userClient.signIn, {
      onSuccess: (bodyData) => {
        setUser(bodyData.data);
        setItem({ key: 'user', data: bodyData.data });
        navigate('/game/blackjack')
      },
    });

  const submitHandler = useCallback(
    (userData) => {
      mutateAsyncLogin(userData);
    },
    [mutateAsyncLogin]
  );

  return (
    <Fragment>
      <LoadingSpinnerModal isLoading={isLoadingLogin} />
      <Form
        onSubmit={submitHandler}
        inputList={inputList}
        validationSchema={validationSchema}
        initialValues={initialValues}
        classes={classes}
        buttonLabel="Sign in"
      />
    </Fragment>
  );
}

export default LoginForm;
