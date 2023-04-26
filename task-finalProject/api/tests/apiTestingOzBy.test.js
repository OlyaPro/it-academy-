const axios = require('axios');
const validator = require('jsonschema');
const productAddCartSchema = require('../data/productAddCartSchema.v1.json');

describe(`API tests Oz.by`, function () {
    let response;
    beforeAll(async () => {
        response = await axios.get('https://oz.by/goods/ajax/html_box.php', {
            params: { idGoods: '101221195', type: 'html' },
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
    });

    test('status code should be 200', async () => {
        expect(response.status).toEqual(200)
    });

    test('json schema should be valid', async () => {
        const result = await validator.validate(response.data, productAddCartSchema);
        expect(result.valid).toEqual(true)
    });

    test('response.data should have necessary properties of correct type', () => {
        expect(typeof response.data.status).toBe('boolean');
        expect(typeof response.data.message).toBe('string');
        expect(typeof response.data.id_goods).toBe('number');
        expect(typeof response.data.in_cart).toBe('number');
        expect(typeof response.data.sgfs_in_cart).toBe('boolean');
        expect(typeof response.data.type).toBe('string');
        expect(typeof response.data.orderCashback).toBe('string');
    });

})