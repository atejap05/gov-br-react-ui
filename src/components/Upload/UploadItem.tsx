type UploadItemProps = {
  fileName: string;
  fileSize: number;
  onDelete: (fileName: string) => void;
};

const UploadItem = ({ fileName, fileSize, onDelete }: UploadItemProps) => {
  return (
    <div className="br-item d-flex">
      <div className="content text-primary-default mr-auto">{fileName}</div>
      <div className="name"></div>
      <div className="suport mr-n2">
        <span className="mr-1">{(fileSize / 1024).toFixed(2)} KB</span>
        <button
          className="br-button circle"
          type="button"
          aria-label={`apagar ${fileName}`}
        >
          <i className="fa fa-trash" onClick={() => onDelete(fileName)}></i>
        </button>
      </div>
    </div>
  );
};

UploadItem.displayName = "UploadItem";

export { UploadItem };
