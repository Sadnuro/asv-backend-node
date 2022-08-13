const CityService = require('../CityService');


 

// module.exports = new CityServiceImpl();

class CitiServiceImpl extends CityService {
    constructor (){
        super();
        this.getAll();
    };
}

module.exports = new CityServiceImpl();