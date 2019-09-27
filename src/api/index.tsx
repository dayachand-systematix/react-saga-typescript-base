/** user key & URL of unsplash API */
const KEY =
    '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const URL = `https://api.unsplash.com/photos/`;
const TEMP_URL = `https://api.unsplash.com/collections`

/**
 * @method fetchImages
 * @param {page}
 * @description to fetch Images from Unsplash API.
 */
const fetchImages = async (page: number) => {
    const response = await fetch(`${URL}${KEY}&per_page=4&page=${page}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

/**
 * @method fetchContent
 * @param {page}
 * @description to fetch Content data from Unsplash API.
 */
const fetchContent = async (page: number) => {
    const response = await fetch(`${TEMP_URL}${KEY}&per_page=4&page=${page}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export { fetchImages, fetchContent };
