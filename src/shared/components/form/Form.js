import { Formik, Form as FormikForm } from 'formik';
import { Field } from './Field';
import FormButton from './FormButton';

export const Form = ({
  inputList,
  validationSchema,
  initialValues,
  title,
  onSubmit,
  classes,
  buttonProps,
  submitComponent,
  buttonLabel,
}) => {
  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      {({ handleSubmit }) => (
        <FormikForm onSubmit={handleSubmit} className={classes?.formContainer}>
          <div className={`${classes?.form}`}>
            <div
              className={`col-span-2 text-center text-xl font-semibold mb-4 ${classes?.formTitle}`}
            >
              {title}
            </div>
            {inputList.map((input) => (
              <Field key={input.name} {...input} />
            ))}
          </div>
          <FormButton
            classes={classes}
            buttonProps={buttonProps}
            submitComponent={submitComponent}
          >{buttonLabel}</FormButton>
        </FormikForm>
      )}
    </Formik>
  );
};
