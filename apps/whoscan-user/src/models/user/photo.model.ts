export interface Photo {
    id?: string;
    fieldname?: string;
    originalname?: string;
    encoding?: string;
    mimetype?: string;
    size?: number;
    file_src?: string;
    url?: string;
    file_name?: string;
}

export interface PhotoUpload extends Photo {
    uid?: string;
    name?: string;
    type?: string;
    url?: string;
    percent?: number;
    size?: number;
    status?: string;
}