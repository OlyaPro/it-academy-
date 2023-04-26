const axios = require('axios');
const validator = require('jsonschema');
const productAddCartSchema = require('../data/productAddCartSchema.v1.json');

describe(`API tests for Oz.by`, function () {
    describe('GET request for product data', function () {
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

    test('GET request for Oz.by product details - status code should be 200', async () => {
        expect(response.status).toEqual(200)
    });

    test('GET request for Oz.by product details - JSON schema should be valid', async () => {
        const result = await validator.validate(response.data, productAddCartSchema);
        expect(result.valid).toEqual(true)
    });

    test('GET request for Oz.by product details - response time should not exceed 230ms', async () => {
        const start = new Date().getTime();
        await axios.get('https://oz.by/goods/ajax/html_box.php', {
          params: { idGoods: '101221195', type: 'html' },
          headers: {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'X-Requested-With': 'XMLHttpRequest'
          }
        });
        const end = new Date().getTime();
        const responseTime = end - start;
        expect(responseTime).toBeLessThanOrEqual(230);
      });

      describe('POST request for reviews data', function () {
        test('Test POST request for Oz.by reviews - status code should be 200', async () => {
          const response = await axios.post('https://oz.by/bowls/more10457032.html', {
            data: { action: 'moreReview', ajax: '1' },
            headers: {
              'Accept': 'application/json, text/javascript, */*; q=0.01',
              'X-Requested-With': 'XMLHttpRequest'
            }
          });
          expect(response.status).toEqual(200);
        });
      });
    });
})
