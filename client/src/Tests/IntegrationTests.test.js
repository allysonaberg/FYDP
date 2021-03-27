// Test whether we can communicate with the backend
var exec = require('child_process').exec;
const axios = require("axios");
const dir = __dirname;

// in order for this test to pass, the backend server must be running on localhost:5000
 describe('Integration with Back-End', () => {
    it('should receive a 200 status', () => {
        backend();
        return axios.get("localhost:5000/status").then(promise => {
            expect(promise.status).toBe(200);
          });
    })
});