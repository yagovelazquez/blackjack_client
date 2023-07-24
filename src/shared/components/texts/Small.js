import { twMerge } from 'tailwind-merge';



const Small= ({ className, children, ...rest }) => {
  const classNames = twMerge('text-primary text-[10.4px] leading-[15.6px]', className);
  return (
    <small className={classNames} {...rest}>
      {children}
    </small>
  );
};

export default Small;
