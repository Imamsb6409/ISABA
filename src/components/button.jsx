const Button = ({ title, href, target, className }) => {
  return (
    <>
      <a
        className={`cursor-pointer px-8 py-3 bg shadow-sm bg-bgButton hover:bg-gray-800 text-white rounded-2xl ${className}`}
        href={href}
        target={target}
      >
        {title}
      </a>
    </>
  );
};

export default Button;
