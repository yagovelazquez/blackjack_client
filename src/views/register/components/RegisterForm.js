import { Fragment, useCallback, useContext } from 'react';
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
  const { setUser } = useContext(UserContext);
  const { setItem } = useLocalStorage();
  const navigate = useNavigate()
  const { mutateAsync: mutateAsyncRegister, isLoading: isLoadingRegister } =
    useMutation(userClient.register, {
      onSuccess: (bodyData) => {
        setUser(bodyData.data);
        setItem({ key: 'user', data: bodyData.data });
        navigate('/game/blackack')
      },
    });

  const submitHandler = useCallback(
    (userData) => {
      mutateAsyncRegister(userData);
    },
    [mutateAsyncRegister]
  );

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
