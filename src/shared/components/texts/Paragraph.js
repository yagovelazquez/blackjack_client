import { twMerge } from 'tailwind-merge';


const Paragraph = ({ className, children, ...rest }) => {
  const classNames = twMerge('text-gray900 text-[13px] leading-[19px]', className);
  return (
    <p className={classNames} {...rest}>
      {children}
    </p>
  );
};

export default Paragraph;
