import { Fragment } from 'react';
import Button from '../button/Button';

const FormButton = ({ classes, buttonProps, submitComponent, children }) => {
  return (
    <Fragment>
      {submitComponent ? (
        submitComponent
      ) : (
        <div className={`${classes?.buttonContainer}`}>
          <Button className={classes?.button} type="submit" {...buttonProps}>
            {children}
          </Button>
        </div>
      )}
    </Fragment>
  );
};

export default FormButton;
