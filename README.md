# Learning-Docker

Docker Tutorial with NodeJs (Typecscript)

### 🔮 Commands 

- Build the docker image with this command

You can specify another `--tag` if you want

```sh
    docker build --tag node-docker .
```

- To Run the docker image as a container

```sh
    docker run --publish 4040:4040  node-docker
```

