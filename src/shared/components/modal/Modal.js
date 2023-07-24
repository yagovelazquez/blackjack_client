import { Fragment } from 'react';
import { createPortal } from 'react-dom';

const classVariations = {
  middleCentered: 'flex items-center',
};

function Modal(props) {
  const { isModal, classVariant = 'middleCentered' } = props;

  if (!isModal) return null;

  return (
    <Fragment>
      {createPortal(
        <Fragment>
          <div
            className={
              'bg-black animate-fadeIn  bg-opacity-30 backdrop-blur-sm  fixed top-0 left-0 bottom-0 right-0 z-10'
            }
          />
          <div
            className={`z-20 p-5 h-full top-0 animate-fadeIn fixed left-1/2 translate-x-[-50%]  ${classVariations[classVariant]}`}
          >
            <div>{props.children}</div>
          </div>
        </Fragment>,
        document.getElementById('modal')
      )}
    </Fragment>
  );
}

export default Modal;
