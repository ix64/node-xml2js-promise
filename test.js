const xml2js_promise = require('./xml2js-promise.js');
const should = require('should');
const valid_xml = "<?xml version=\"1.0\" encoding=\"utf-8\" ?><xml>is valid</xml>";
const invalid_xml = "<?xml version=\"1.0\" encoding=\"utf-8\" ?><xml>is</invalid>";

describe("parse xml", () => {
        it("valid xml", async () => {
            let result = await  xml2js_promise(valid_xml);
            result.xml.should.equal('is valid');
        });
        it("invalid xml", async () => {
            let result = await  xml2js_promise(invalid_xml);
            result.should.Error();
        });
    }
);
