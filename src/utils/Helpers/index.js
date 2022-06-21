export const snake_ify = (str) =>
    encodeURIComponent(
        String(str).trim().toLocaleLowerCase().replaceAll(" ", "_")
    );

export const getFeaturedImage = post => {
    const post_data = post._embedded &&
                        post._embedded['wp:featuredmedia'] &&
                        post._embedded['wp:featuredmedia'].length > 0 &&
                        post._embedded['wp:featuredmedia'][0];
    return {
        source: post_data['source_url'],
        alt: post_data['alt_text']
    }
}
