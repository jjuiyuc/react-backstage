import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileDropzone = ({ onChange, accept, maxSize }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length === 1) {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = (e) => onChange(e.target.result, file);
        reader.readAsDataURL(file);
        return;
      }
    },
    [onChange]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxSize: maxSize * 1048576, // mb to bytes
  });
  return (
    <div {...getRootProps()}>
      <input className="upload-wrapper" {...getInputProps()} />
      {isDragActive ? (
        <p className="upload-files">拖曳檔案至此</p>
      ) : (
        <p className="upload-files">拖曳檔案至此，或點擊此選擇檔案</p>
      )}
      <div>檔案大小須小於{maxSize}MB</div>
    </div>
  );
};

export default FileDropzone;
