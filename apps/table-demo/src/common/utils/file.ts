import Resizer from "react-image-file-resizer";

export const getExtension = (filename: string) => {
    if (!filename) return;
    const parts = filename.split(".");
    return parts[parts.length - 1];
};

export const isImage = (filename: string) => {
    const ext = getExtension(filename);
    if (!ext) return;

    switch (ext.toLowerCase()) {
        case "jpg":
        case "jpeg":
        case "gif":
        case "bmp":
        case "png":
        case "webp":
            //etc
            return true;
    }
    return false;
};

export const isVideo = (filename: string) => {
    const ext = getExtension(filename);
    if (!ext) return;

    switch (ext.toLowerCase()) {
        case "m4v":
        case "avi":
        case "mpg":
        case "mp4":
        case "mov":
        case "quicktime":
            // etc
            return true;
    }
    return false;
};

export const isDocumentFile = (filename: string) => {
    const ext = getExtension(filename);
    if (!ext) return;

    switch (ext.toLowerCase()) {
        case "pdf":
            // etc
            return true;
    }
    return false;
};

export const isSoundFile = (filename: string) => {
    const ext = getExtension(filename);
    if (!ext) return;

    switch (ext.toLowerCase()) {
        case "mp3":
            // etc
            return true;
    }
    return false;
};

export const resizeFile = (file: any) =>
    new Promise<any>(resolve => {
        Resizer.imageFileResizer(
            file,
            1440,
            1440,
            "JPEG",
            90,
            0,
            uri => {
                resolve(uri);
            },
            "blob"
        );
    });

export const humanFileSize = (bytes: any) => {
    if (bytes === 0) {
        return "0.00 B";
    }
    const e = Math.floor(Math.log(bytes) / Math.log(1024));
    return (
        (bytes / Math.pow(1024, e)).toFixed(2) + " " + " KMGTP".charAt(e) + "B"
    );
};
