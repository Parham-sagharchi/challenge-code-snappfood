Snappfood Code Challenge
---

This project was built with NextJs, RTK, and Styled Components.

***Getting Started:***
   - Prerequisites :

      To run this project, you need to have Node.js and yarn installed on your machine.
   - Clone This Repo :

```sh
cd ~/
mkdir workspace && cd workspace
git clone https://github.com/Parham-sagharchi/challenge-code-snappfood.git && cd challenge-code-snappfood
```

***Installing and Build Project:***

   - Without Docker :

```sh
yarn install
yarn build
```
   - This will generate a `dist` directory containing the compiled and minified files.

***Running:***

   - Without Docker :

```sh
yarn serve
```
   - This will start a development server at `http://localhost:3000` or `http://:3000` i.e in my case it is `http://192.168.100.126:3000`

   - Hint: you can easily change `API ENDPOINT` via `.env`.

   - Build with `Docker` :

I tested this project with this docker version and no have problem:

   - Docker-compose : `docker-compose version 1.28.5, build c4eb3a1f`

   - Docker : `Docker version 20.10.5, build 55c4c88`

   - Run command `sudo docker-compose up`

   - Above command will start container

   - Now we must find the container id

        ```sh
        docker ps -a # get "CONTAINER ID" of worker.
        ```
  - After that, you can find docker ip using docker network inspect network_name.

      ```sh
      docker inspect --format='{{.Name}} {{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $(docker ps -q)
      ```
  - Hint 1: Go to `http://container` and view project.
  
  - Hint 2: You can deploy this project on your machine or give permission on vercel like me ``.


***Caution:***

   - this will delete all your containers, images and networks:

        ```sh
           docker stop $(docker ps -aq)
           docker rm $(docker ps -aq)
           docker network prune -f
           docker rmi -f $(docker images --filter dangling=true -qa)
           docker volume rm $(docker volume ls --filter dangling=true -q)
        ```

***This Porject Built With:***

   - ReactJs - The JavaScript library used
   - NextJs - The web development framework used
   - Redux Toolkit - The state management library used
   - Styled Components - The CSS-in-JS tool used
   - Zod - The schema validator used
   - Cypress - The E2E Test used