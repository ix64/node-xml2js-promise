const xml2js = require('xml2js');

module.exports = (xmlString, options) => {
    return new Promise((resolve, reject) => {
        xml2js.parseString(xmlString, options, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    }).catch((err) => {
        throw err;
    });
};


