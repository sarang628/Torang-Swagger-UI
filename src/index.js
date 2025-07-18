import _ from 'lodash';
import 'swagger-ui/dist/swagger-ui.css';
import SwaggerUI from 'swagger-ui'

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

function test() {
    SwaggerUI({
        dom_id: '#myDomId',
        url: 'https://petstore.swagger.io/v2/swagger.json'
    })
}

document.body.appendChild(component());
test()
// or use require if you prefer

