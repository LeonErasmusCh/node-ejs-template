const express = require('express');
const router = express.Router();
const { home, about, contact, pricing, faq, blogHome, blogPost, portfolioOverview, portfolioItem } = require('../controllers/index.controller')

router.get('/', home);
router.get('/about', about)
router.get('/contact', contact)
router.get('/pricing', pricing)
router.get('/faq', faq)
router.get('/blog-home', blogHome)
router.get('/blog-post', blogPost)
router.get('/portfolio-overview', portfolioOverview)
router.get('/portfolio-item', portfolioItem)

module.exports = router;