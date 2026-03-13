import _ from 'lodash';
import 'swagger-ui/dist/swagger-ui.css';
import SwaggerUI from 'swagger-ui';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // Swagger UI가 그려질 컨테이너를 생성하고 ID를 부여합니다.
    const swaggerContainer = document.createElement('div');
    swaggerContainer.id = 'myDomId';

    const wrapper = document.createElement('div');
    wrapper.appendChild(element);
    wrapper.appendChild(swaggerContainer);

    return wrapper;
}

function loadSwagger() {
    // DOM에 요소가 추가된 후 호출되어야 합니다.
    SwaggerUI({
        dom_id: '#myDomId',
        url: './torang.yml' // 경로가 정확한지 확인이 필요합니다.
    });
}

// 1. 먼저 요소를 DOM에 추가
document.body.appendChild(component());

// 2. 그 다음 SwaggerUI 실행
loadSwagger();