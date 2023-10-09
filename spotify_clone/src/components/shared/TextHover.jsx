const TextHover = ({  displayText, active }) => {
    return (
      <div className="text-white flex items-center justify-start cursor-pointer">
        {/* Text white if active else gray */}
        <div
          className={`${
            active ? "text-white" : "text-gray-500"
          } font-medium text-lg hover:text-white`}
        >
          {displayText}
        </div>
      </div>
    );
  };
  
  export default TextHover;