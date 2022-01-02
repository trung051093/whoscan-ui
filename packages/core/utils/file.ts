import Resizer from "react-image-file-resizer";

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

export const readFile = (file: File): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => resolve(reader.result), false);
        reader.readAsDataURL(file);
    });
}