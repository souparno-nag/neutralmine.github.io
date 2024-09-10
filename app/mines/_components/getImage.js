const axios = require('axios');

async function getWikipediaImage(query) {
    try {
        // Step 1: Search Wikipedia for the query
        const searchResponse = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action: 'query',
                format: 'json',
                list: 'search',
                srsearch: query,
                utf8: 1
            }
        });

        const pageId = searchResponse.data.query.search[0].pageid;

        // Step 2: Get the page details including images
        const imageResponse = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action: 'query',
                format: 'json',
                prop: 'images',
                pageids: pageId,
                utf8: 1
            }
        });

        const images = imageResponse.data.query.pages[pageId].images;

        // Step 3: Get the URL of the first image (if any)
        const imageTitle = images && images.length ? images[0].title : null;

        if (imageTitle) {
            // Step 4: Get the image URL
            const imageInfoResponse = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    format: 'json',
                    prop: 'imageinfo',
                    titles: imageTitle,
                    iiprop: 'url',
                    utf8: 1
                }
            });

            const pages = imageInfoResponse.data.query.pages;
            const imageUrl = pages[Object.keys(pages)[0]].imageinfo[0].url;
            return imageUrl;
        } else {
            return 'No image found';
        }
    } catch (error) {
        console.error('Error fetching image:', error);
        return null;
    }
}

// Example usage
getWikipediaImage('narendra modi').then(imageUrl => {
    console.log('Image URL:', imageUrl);
});
