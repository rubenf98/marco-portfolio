import React, { useRef } from "react";

const FileUploader = ({ onFileSelectError, onFileSelectSuccess }) => {
    const fileInput = useRef(null);

    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files[0];

        onFileSelectSuccess(file);
    };

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput}></input>
        </div>
    );
};

export default FileUploader;
