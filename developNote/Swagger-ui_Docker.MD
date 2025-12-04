# Swgger-ui docker로 실행하기
- web 번들러 환경설정을 포기하고 docker로 시도
- npm, webpack main.js error 등 초기 수 많은 오류 발생.
- 위 플랫폼에 대한 지식이 없어 학습하면서 swagger-ui를 띄우려니 배보다 배꼽이 더 커지는 상황
- swagger yml 파일 작성에만 집중하고 싶어. 환경 설정없이 바로 실행 가능한지 docker로 시도해보기로 결정

# [Swagger Installation by Docker](https://swagger.io/docs/open-source-tools/swagger-ui/usage/installation/)

```
docker pull docker.swagger.io/swaggerapi/swagger-ui
docker run -p 80:8080 docker.swagger.io/swaggerapi/swagger-ui
```

위 명령어로 성공했지만 내가 배포하려는 파일에 대한 접근이 안된다.

```
docker run -p 80:8080 \ 
  -e SWAGGER_JSON=/foo/swagger.json  \ 
  -v /bar:/foo docker.swagger.io/swaggerapi/swagger-ui
```

```
docker run -p 80:8080 \
  -e SWAGGER_JSON=/foo/swagger.json \
  -v /Users/sarangyang/IdeaProjects/Torang/Torang-Swagger-UI/src:/foo \
  docker.swagger.io/swaggerapi/swagger-ui
```

```
docker pull docker.swagger.io/swaggerapi/swagger-editor

docker run -d -p 80:8080 docker.swagger.io/swaggerapi/swagger-editor
```