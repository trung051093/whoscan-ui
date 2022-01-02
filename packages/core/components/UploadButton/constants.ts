export enum STATE_UPLOAD {
    Loading = 'Loading',
    Idle = 'Idle',
    Loaded = 'Loaded',
    Failed = 'Failed'
}

export const TEST_URL = "http://localhost:5000/photo/test";

export const DEFAULT_HEADER = {
    "content-type": "multipart/form-data",
};

export const DEFAULT_ACCEPT = "image/*";

export const DEFAULT_FIELD_NAME = "file";

export const DEFAULT_SIZE = 40;