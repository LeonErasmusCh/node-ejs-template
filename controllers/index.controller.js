

const home = (request, response) => {
    response.render('index');
}

const about = (request, response) => {
    response.render('about')
}

const contact = (request, response) => {
    response.render('contact')
}

const pricing = (request, response) => {
    response.render('pricing')
}

const faq = (request, response) => {
    response.render('faq')
}

const blogHome = (request, response) => {
    response.render('blog-home')
}

const blogPost = (request, response) => {
    response.render('blog-post')
}

const portfolioOverview = (request, response) => {
    response.render('portfolio-overview')
}

const portfolioItem = (request, response) => {
    response.render('portfolio-item')
}

module.exports = { home, about, contact, pricing, faq, blogHome, blogPost, portfolioOverview, portfolioItem}