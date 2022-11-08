
const IconStar: React.FC<{ color: string }> = ({ color }) => {
  return (
    <svg
      width='14'
      height='13'
      viewBox='0 0 14 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.3513 5.36548L9.36627 8.12842L10.5363 12.6185L6.66327 9.90649L2.54129 12.4745L4.13327 8.03442L0.415283 5.13452L5.27127 5.10242L7.09628 0.740479L8.50528 5.16052L13.3513 5.36548Z'
        fill={color}
      />
    </svg>
  );
};

export default IconStar