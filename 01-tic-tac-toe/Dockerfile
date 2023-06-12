FROM node:14-alpine

WORKDIR /app

# Copia los archivos de configuración y los archivos del proyecto
COPY package.json .
COPY package-lock.json .
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto 3000 
EXPOSE 3000

# Ejecuta el comando para iniciar el servidor de desarrollo
CMD ["npm", "run", "dev"]
