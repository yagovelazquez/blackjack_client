import { twMerge } from 'tailwind-merge';

const Headings = ({ className, variant, children, ...rest }) => {
  const classNames = twMerge(
    variant === 'h2' && 'text-xl',
    variant === 'h1' && 'text-[30px] leading-[36px]',
    variant === 'h3' && 'text-[16px] leading-[19.2px]',
    variant === 'h3' && 'text-[18px] leading-[21.6px]',
    variant === 'h5' && 'text-[14px] leading-[16.8px]',
    className
  );

  const HeadingComponent = variant;

  return (
    <HeadingComponent className={classNames} {...rest}>
      {children}
    </HeadingComponent>
  );
};

export default Headings;
