import { twMerge } from 'tailwind-merge';

const Button = ({
  children,
  className = '',
  iconBefore,
  iconAfter,
  ...rest
}) => {

  const defaultStyles =
  'bg-primary text-white font-[400] text-[13px] flex justify-center items-center py-[7px] px-[12px] hover:bg-primary700';

  const buttonStyles = twMerge(`${defaultStyles} ${className}`)
 
  return (
    <button className={buttonStyles} {...rest}>
      {iconBefore && (
        <span className="w-[1.5rem] h-[1.5rem] flex items-center justify-center">{iconBefore}</span>
      )}
      <span>{children}</span>
      {iconAfter && <span className="w-[1.5rem] h-[1.5rem] flex items-center justify-center">{iconAfter}</span>}
    </button>
  );
};

export default Button;
