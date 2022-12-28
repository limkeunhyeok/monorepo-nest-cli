# MONOREPO using nest-cli

> nest-cli가 깔려있어야됨

## start

```bash
# 1. project 생성
# 일단은 npm으로, 추후 yarn으로도 해볼예정
nest new my-app

# 2. sub-app? 생성 -> /apps/other-app 생기고, 자동으로 monorepo 모드로 변경
nest generate app other-app

# 3. lib 생성 -> /libs/lib가 생김
# 나는 기본 alias?로 @common이라고 지음
nest generate lib lib

# 여까지 하면 nest-cli.json이 알아서 변경되있음
```

## docker

- root에 docker file 생성

```dockerfile
FROM node as builder

WORKDIR /build
COPY package*.json ./
RUN npm ci

COPY . .
RUN  npm run build:other-app

EXPOSE 3000

CMD [ "npm", "run", "start:other-app"]
```

- package.json 스크립트 추가

```json
{
  ...
  "build:other-app": "nest build other-app",
  "start:other-app": "node dist/apps/other-app/main.js"
}
```

## TODO

- 각 app에서 작업할거 같은데, root 경로가 아니면 당연히 npm run 안먹음
  - package.json이 없으니...
  - 이 부분 yarn으로 될 수도?
- 모양새가 package를 전역적으로 관리하는데, 이게 좋은 지는 모르겠음
  - webpack을 잘 몰라서... 상관없으려나?
  - appA와 appB가 사용하는 package가 다르다면 다르게 npm install 해야되지 않나? 라는 생각(규모가 커지면)
  - 나중에 더 알아볼 것
- client도 추가되면 좋을 거 같음
