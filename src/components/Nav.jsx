const Nav = ({ nav, path }) => {
    return (
      <>
        {nav.map((item, index) => (
          <a
            className="font-medium text-gray-500 transition hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 md:py-4"
            href={item.link}
            key={index}
          >
            <span
            //   className={
            //     path.startsWith(item.link)
            //       ? 'font-bold text-gray-600 dark:text-gray-300'
            //       : ''
            //   }
            >
              {item.name}
            </span>
          </a>
        ))}
      </>
    );
  };
  
  export default Nav;
  