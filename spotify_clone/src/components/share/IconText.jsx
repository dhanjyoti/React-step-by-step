const IconText = ({iconName, displayText, active}) => {
    return (
      <div className="text-white flex items-center justify-start cursor-pointer">
          {/* Icon white if active else gray */}
          <div className="px-5 py-2">{iconName}</div>
          {/* Text white if active else gray */}
          <div className={`${active ? "text-white" : "text-gray-400"} text-xl font-medium hover:text-white`}>{displayText}</div>
      </div>
    )
  }
  
  export default IconText