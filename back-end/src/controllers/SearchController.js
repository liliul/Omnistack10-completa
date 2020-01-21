const Dev = require('../model/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;
        console.log(request.query)

        const techsArray = parseStringAsArray(techs);
        console.log('kkkkkkkkkkkkkkkkkk', techsArray)

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry:{
                    type: 'Point',
                    coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json({ devs })
    }
}
