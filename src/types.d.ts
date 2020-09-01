
/**
 * 
 * HTTP type definitions
 * 
 */

type Pagination = {
    total_count: number;
    count: number;
    offset;
}

type GiphyImages = {
    preview_gif: {
        url: string;
    }
}
type GiphyDataObject = {
    title: string;
    images: GiphyImages
}

type HTTPResponse<T> = {
    pagination: Pagination;
    data: T;
    error?: Error;
}
