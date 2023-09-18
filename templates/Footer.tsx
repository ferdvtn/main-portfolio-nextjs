const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-gray-300 mt-40 md:mt-60 py-3 md:py-6 px-3 text-xs text-center">
      <p className="leading-loose">
        Copyright &copy; {new Date().getFullYear()}, Ahmad Ferdian
        <br />
        All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
