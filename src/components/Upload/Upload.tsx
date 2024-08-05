import "../../style.css";
import { useCallback, useRef, useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useDropzone } from "react-dropzone";
import { cva } from "class-variance-authority";
import { UploadItem } from "./UploadItem";

const uploadVariants = cva("br-upload", {
  variants: {
    draging: {
      true: "draging",
      false: "",
    },
  },
});

export type UploadProps = {
  className?: string;
  multiple?: boolean;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  helperText?: string;
  error?: boolean;
  onChange?: (files: FileList) => void;
};

type FileList = File[];

const Upload = ({
  label,
  placeholder,
  helperText,
  className,
  error,
  onChange,
  multiple = false,
  disabled = false,
}: UploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FileList>([]);
  const classes = uploadVariants({ className });
  const inputID = nanoid();
  const id = multiple ? `multiple-file-${inputID}` : `single-file-${inputID}`;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      const uniqueFiles = newFiles.filter(file => {
        return !files.some(
          existingFile =>
            existingFile.name === file.name && existingFile.size === file.size
        );
      });
      if (multiple) {
        setFiles([...files, ...uniqueFiles]);
      } else {
        setFiles(uniqueFiles);
      }
    }
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach(file => {
        const isUnique = !files.some(
          existingFile =>
            existingFile.name === file.name && existingFile.size === file.size
        );
        if (isUnique) {
          if (multiple) {
            setFiles(prevFiles => [...prevFiles, file]);
          } else {
            setFiles([file]);
          }
        }
      });
    },
    [files, multiple]
  );

  useEffect(() => {
    if (onChange) {
      onChange(files);
    }
  }, [files, onChange]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="col-md-6">
      <div
        // @ts-expect-error expected error
        disabled={disabled}
        data-danger={error ? "data-danger" : null}
        className={classes}
        {...getRootProps()}
      >
        <label className="upload-label" htmlFor={id}>
          {label && <span>{label}</span>}
        </label>
        <input
          ref={inputRef}
          className="upload-input"
          id={id}
          type="file"
          aria-hidden={false}
          aria-label="enviar arquivo"
          multiple={multiple}
          onChange={onChangeHandler}
          {...getInputProps()}
        />
        <button
          className="upload-button"
          type="button"
          aria-hidden={true}
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          <i className="fas fa-upload" aria-hidden={true}></i>
          <span>{placeholder}</span>
        </button>
        <div className="upload-list">
          {files.map(file => (
            <UploadItem
              key={file.name + file.size.toString()}
              fileName={file.name}
              fileSize={file.size}
              onDelete={fileName => {
                setFiles(files.filter(file => file.name !== fileName));
              }}
            />
          ))}
        </div>
      </div>
      {helperText && files.length == 0 && (
        <p className="text-base mt-1">{helperText}</p>
      )}
    </div>
  );
};

Upload.displayName = "Upload";

export { Upload };
