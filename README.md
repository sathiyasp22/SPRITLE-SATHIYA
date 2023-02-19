# Getting Started with Create React App
1.JWT tokens for the API 
2.Dockerized this application.

#### website Link    :          https://63f234286cb34a71b64bd5ef--fanciful-yeot-999c76.netlify.app/  <br>
#### API Link        :          https://spritleapi.onrender.com        <br>

#### Docker FrontEnd :          docker pull sathiyapriya22/spritle:tagname<br>
#### Docker BackEnd  :          docker pull sathiyapriya22/spritle_backend:tagname

# Getting Started with Docker

1.)Pull the FrontEnd from Dockerhub

###  docker pull sathiyapriya22/spritle:tagname<br>

2.)Pull the backend from Dockerhub

###  docker pull sathiyapriya22/spritle_backend:tagname

3.)Run the Front End Using

### docker run -d -p 3000:3000 --name spritle sathiyapriya22/spritle:tagname


4.)Run the Backend End Using

### docker run -d -p 3001:3001 --name spritle_backend sathiyapriya22/spritle_backend:tagname

# Getting Started with Nodejs

1.)Make the path of frontend in cmd.
### npm install
It will install all the packages of frontend
### npm start

http://localhost:3000

2.)Make the path of Backend in cmd.
### npm install
### node index.js

It will install all the packages of backend

http://localhost:3001
 ##### Make both are running simultaneosuly
