# Estágio de build com Bun
FROM oven/bun:1-alpine AS build

# Ensure production mode during build
ENV NODE_ENV=production

WORKDIR /app

# Copia package.json e lockfile
COPY package*.json bun.lockb* ./

# Instala dependências com Bun
RUN bun install

# Copia o resto do código
COPY . .

# Roda o build com Bun
RUN bun run build

# Estágio de produção com Nginx
FROM nginx:stable-alpine AS production

# Ensure runtime environment is production
ENV NODE_ENV=production

# Copia os assets buildados para o Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia a config custom do Nginx (para SPA fallback no React Router)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
