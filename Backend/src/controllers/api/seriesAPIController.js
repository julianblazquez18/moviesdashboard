const db = require('../../database/models');

const seriesAPIController = {
    'list': (req, res) => {
        db.Serie.findAll({
            include: ['genre']
        })
        .then(series => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: series.length,
                    url: 'api/series'
                },
                data: series
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.Serie.findByPk(req.params.id,
            {
                include : ['genre']
            })
            .then(serie => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/serie/:id'
                    },
                    data: serie
                }
                res.json(respuesta);
            });
    }
}

module.exports = seriesAPIController;