import React, { useState } from 'react';

function FileUploadButton() {
    const [fileUrl, setFileUrl] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) {
            return;
        }
        setFileUrl(URL.createObjectURL(file));
    }

    return (
        <>
            <input type="file" onChange={handleFileChange} />
            {fileUrl && <a href={fileUrl} download>Download</a>}
        </>
    )
}

export default FileUploadButton;
