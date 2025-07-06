# Usa a imagem oficial do Node.js
FROM node:18.20.5

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia apenas os arquivos de dependência primeiro (para cache eficiente)
COPY app/package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante da aplicação
COPY app/ .

# Expõe a porta 3000 (onde seu app Node deve rodar)
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
