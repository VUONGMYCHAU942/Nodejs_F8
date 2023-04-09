class NewsController {
    //[GET] / news

    index(req, res) {
        res.render('news');
    }
    //[GET] /news/:slug
    show(req, res) {
        res.send('New Detail!!!@@@');
    }
}
module.exports = new NewsController();
//const newController = require ('./NewController'); cais nayf connecting cai tren
