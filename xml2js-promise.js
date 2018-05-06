const xml2js = require('xml2js');
const util = require('util');
module.exports = (xmlString, options) => {
    return util.promisify(xml2js.parseString)(xmlString, options);
};


