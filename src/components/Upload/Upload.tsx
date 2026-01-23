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

/**
 * Props do componente Upload
 */
export type UploadProps = {
  /** Classe CSS adicional */
  className?: string;
  /** Se permite seleção múltipla de arquivos */
  multiple?: boolean;
  /** Label do campo de upload */
  label?: string;
  /** Texto placeholder do botão de upload */
  placeholder?: string;
  /** Se o upload está desabilitado */
  disabled?: boolean;
  /** Texto de ajuda exibido abaixo do campo */
  helperText?: string;
  /** Se o campo está em estado de erro */
  error?: boolean;
  /** Callback chamado quando arquivos são selecionados */
  onChange?: (files: FileList) => void;
};

type FileList = File[];

/**
 * Componente Upload do Design System Gov.br
 * 
 * Campo de upload de arquivos com suporte a drag-and-drop e seleção múltipla.
 * 
 * @example
 * ```tsx
 * <Upload
 *   label="Enviar arquivo"
 *   placeholder="Clique ou arraste arquivos aqui"
 *   onChange={(files) => console.log(files)}
 * />
 * ```
 */
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
  const onChangeRef = useRef(onChange);
  const [files, setFiles] = useState<FileList>([]);
  const classes = uploadVariants({ className });
  const inputID = nanoid();
  const id = multiple ? `multiple-file-${inputID}` : `single-file-${inputID}`;

  // Atualiza a referência do onChange sempre que mudar
  onChangeRef.current = onChange;

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
    onChangeRef.current?.(files);
  }, [files]);

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
