##
스웨거 자바 annotation을 사용해 이용하고 있는데 

코드와 함께 있으니 가독성이 떨어지는 것 같기도하고

인터넷에 검색해보면 annotation으로 하는 방식은 잘 사용 안하는 것 같아 보인다.

그래서 공식 문서에 있는 내용을 따라해 보고자 한다.


https://swagger.io/docs/open-source-tools/swagger-ui/usage/installation/

3개의 모듈을 배포했다. swagger-ui, swagger-ui-dist and swagger-ui-react

swagger-ui는 Webpack, Browserify, and Rollup와 같은 모듈러를 포함하는 자바스크립트 프로젝트에서 소비 된다. 


Webpack은 웹 애플리케이션을 구성하는 다양한 자원(HTML, CSS, JavaScript, 이미지 등)을 모듈 단위로 묶어 하나의 파일로 만드는 **모듈 번들러(Module Bundler)**
Browserify는 Node.js에서 사용하는 CommonJS 모듈 방식을 브라우저 환경에서도 사용할 수 있도록 해주는 도구입니다.
Rollup
-> 번들러 라고 불림


메인 파일은 swagger UI의 메인 함수를 export 한다. 모듈은 또한 css를 포함.

# Installation

npm으로 설치 가능

```
$ npm install swagger-ui
```

```
$ npm install swagger-ui-react
```

```
$ npm install swagger-ui-dist
```

```
import SwaggerUI from 'swagger-ui'
// or use require if you prefer
const SwaggerUI = require('swagger-ui')

SwaggerUI({
  dom_id: '#myDomId'
})
```

예제 코드는 위와 같이 되어있다. 하지만 어떻게 실행하라는거지?

샘플코드 링크가 있는데 404 에러나 난다.
See the Webpack Getting Started sample for details.
https://swagger.io/docs/open-source-tools/swagger-ui/usage/samples/webpack-getting-started/


위에 css나 webpack라는 단어를 보면 웹으로 띄워야 한다는 걸 알 수 있다.

웹팩을 찾아서 사이트를 들어가보았다.
https://webpack.js.org/

```
npm init -y
npm install webpack webpack-cli --save-dev
```

