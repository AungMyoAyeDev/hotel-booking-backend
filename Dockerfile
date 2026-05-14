From node:22-alpine

WORKDIR  /app

COPY packge.json pnpm-lock.yaml ./

RUN pnpm install 

COPY . .

EXPOSE 8000

CMD ["pnpm","start"]

