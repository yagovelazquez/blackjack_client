import { ErrorMessage, Field as FormikField } from 'formik';

export const Field = ({
  name,
  inputContainerClass,
  type = 'text',
  options,
  as = 'text',
  componentBefore,
  validation = true,
  ...rest
}) => {
  return (
      <div className={`flex flex-col`}>
        <label htmlFor={name}>{rest.label}</label>
        {as === 'text' && (
          <FormikField
            type={type}
            name={name}
            className="text-black px-2 py-[3px] placeholder:text-[14px] rounded border border-gray focus:outline-none focus-visible:border focus-visible:border-primary"
            {...rest}
          />
        )}
        {validation && (
          <p className="text-rose-400 text-xs italic my-1 min-h-[1rem]">
            <ErrorMessage name={name} />
          </p>
        )}
      </div>
  );
};
