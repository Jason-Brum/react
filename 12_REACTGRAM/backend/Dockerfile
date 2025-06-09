# Use uma imagem oficial do Node.js como base. A versão Alpine é mais leve.
FROM node:18-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o contêiner
# Isso aproveita o cache do Docker. Se esses arquivos não mudarem, o 'npm install' não será executado novamente.
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie o resto dos arquivos do seu projeto para o diretório de trabalho no contêiner
COPY . .

# Exponha a porta que sua aplicação usa (conforme seu .env, a porta é 5000)
EXPOSE 5000

# O comando para iniciar sua aplicação quando o contêiner for executado
CMD [ "npm", "run", "server" ]