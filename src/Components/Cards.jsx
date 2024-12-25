import { FaFilePen } from "react-icons/fa6";
import { IoIosCloudDownload } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { motion } from "framer-motion"; // Corrected motion import

const Cards = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.05 }}
      dragElastic={0.2}
      className="w-64 h-80 rounded-lg relative overflow-hidden p-6 text-white bg-gray-900 shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105"
    >
      {/* Icon for editing or file-related action */}
      <FaFilePen
        size={28}
        className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
      />
      
      {/* Description text with subtle hover effect */}
      <p
        id="text"
        className="mt-4 leading-tight h-20 text-sm text-gray-300 hover:text-teal-400 transition-colors duration-300"
      >
        {data.desc}
      </p>
      
      {/* Bottom section with file info and action buttons */}
      <div className="absolute bottom-0 w-full p-4 left-0">
        <div className="flex justify-between items-center mb-2">
          {/* Displaying the file size with hover effect */}
          <span className="text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-300">
            {data.filesize}
          </span>
          
          {/* Action button (Download or Cancel) with subtle hover effect */}
          <span className="w-8 h-8 text-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300">
            {data.close ? <IoIosCloudDownload size={26} /> : <MdCancel size={26} />}
          </span>
        </div>
        
        {/* Conditional rendering based on the 'isOpen' property in the tag */}
        {data.tag.isOpen && (
          <>
            {/* Button for the tag action with smooth hover and background color change */}
            <button
              className={`w-full ${
                data.tag.tagTitle === "Download" ? "bg-green-600" : "bg-yellow-400 text-black"
              } text-white text-center py-2 rounded-md hover:scale-105 hover:bg-${data.tag.tagColor}-600 transition-all duration-300`}
            >
              <h3 className="text-sm font-medium">{data.tag.tagTitle}</h3>
            </button>

            {/* Progress bar for the "Downloading" state */}
            {data.tag.tagTitle === "Downloading" && (
              <div className="w-full bg-gray-700 rounded-full mt-2 h-2 overflow-hidden">
                <div
                  className="bg-yellow-400 h-full rounded-full transition-all"
                  style={{ width: `${data.tag.progress}%` }} // Dynamic width based on progress
                ></div>
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
