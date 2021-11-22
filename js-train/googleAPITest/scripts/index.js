$('.btn').on('click', () => {
    let query = $('.search').val()
    console.log(query)

    const google = new Scraper({
        puppeteer: {
            headless: false,
        },
    });

    const results = google.scrape(query, 1)
    console.log(results)
})