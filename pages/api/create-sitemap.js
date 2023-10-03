const { SitemapStream, streamToPromise } = require( 'sitemap' )
const { Readable } = require( 'stream' )

export default async function handler(request, response) {
    // An array with your links
    const links = [{ url: '/page-1/',  changefreq: 'daily', priority: 0.3  }]

    // Create a stream to write to
    const stream = new SitemapStream( { hostname: 'https://...' } )

    // Return a promise that resolves with your XML string
    const result = streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
        data.toString()
    )

    return response.status(200).json({ result });
}
