import { useState } from 'react';

interface CollapseProps {
    title: string;
    children: React.ReactNode;
}

const Collapse = ({ title, children }: CollapseProps) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="my-4 border border-gray-200 rounded">
        <button
          className="flex items-center justify-between w-full px-4 py-2 rounded-t focus:outline-none"
          onClick={handleToggle}
        >
          <span className="flex items-center">
            <span
              className={`transform ${
                isOpen ? 'rotate-90' : ''
              }`}
            >
              {/* Small Triangle Icon */}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                //   d="M19 9l-7 7-7-7"
                  d="M12 0 l -10 -10"
                />
              </svg> */}
                ►
            </span>
            &nbsp;&nbsp;{title}
          </span>
        </button>
        {isOpen && (
          <div className="p-4 overflow-auto">
            {/* Content */}
            {children}
          </div>
        )}
      </div>
    );
  };

export default Collapse;