import { Fragment, useCallback, useContext, useEffect } from 'react';
import { Form } from '../../../shared/components/form/Form';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { userClient } from '../../../client/user/userClient';
import LoadingSpinnerModal from '../../../shared/components/loading/LoadingSpinnerModal';
import { UserContext } from '../../../contexts/userContext';
import useLocalStorage from '../../../shared/hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

const inputList = [
  {
    name: 'name',
    placeholder: 'Name',
    inputContainerClass: '',
  },
  {
    name: 'username',
    placeholder: 'Username',
    inputContainerClass: '',
  },
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
  {
    name: 'balance',
    placeholder: 'Balance',
    inputContainerClass: '',
    type: 'number',
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
  name: '',
  username: '',
  balance: '',
};

function RegisterForm() {
  const { setUser, user } = useContext(UserContext);
  const { setItem } = useLocalStorage();
  const navigate = useNavigate();
  const { mutateAsync: mutateAsyncRegister, isLoading: isLoadingRegister } =
    useMutation(userClient.register, {
      onSuccess: (bodyData) => {
        setItem({ key: 'user', data: bodyData.data });
        setUser(bodyData.data);
      },
    });

  const submitHandler = useCallback(
    (userData) => {
      mutateAsyncRegister(userData);
    },
    [mutateAsyncRegister]
  );

  useEffect(() => {
    if (user) {
      navigate('/game/blackjack');
    }
  }, [navigate, user]);

  return (
    <Fragment>
      <LoadingSpinnerModal isLoading={isLoadingRegister} />
      <Form
        onSubmit={submitHandler}
        inputList={inputList}
        validationSchema={validationSchema}
        initialValues={initialValues}
        classes={classes}
        buttonLabel={'Create account'}
      />
    </Fragment>
  );
}

export default RegisterForm;
