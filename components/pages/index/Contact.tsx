import DividerX from "@/components/DividerX";

const Contact = () => {
  return (
    <div id="contact" className="px-5 md:px-0">
      <h1 className="font-semibold antialiased text-lg">
        Let&apos;s connected
      </h1>
      <DividerX className="mt-3 mb-8" />
      <ul className="flex flex-col space-y-2">
        <li className="flex items-center space-x-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />{" "}
            </svg>
          </div>
          <p>hayferdian@gmail.com</p>
        </li>
        <li className="flex items-center space-x-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />{" "}
            </svg>
          </div>
          <p>+62 878-8991-4778</p>
        </li>
        <li className="flex items-center space-x-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />{" "}
            </svg>
          </div>
          <a href="https://ahmadferdian.netlify.app" target="_blank">
            ahmadferdian.netlify.app
          </a>
        </li>
        <li className="flex items-center space-x-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />{" "}
            </svg>
          </div>
          <a href="https://www.linkedin.com/in/ahmadferdian/" target="_blank">
            linkedin : Ahmad Ferdian
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
