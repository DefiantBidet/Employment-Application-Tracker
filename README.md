# ⚠️ This repo is a Work In Progress ⚠️

# Job Tracker

track employment applications
generate data viz
inspired by the app-tracker (https://github.com/Oscar6/app-tracker)

## Run all applications
From the root directory run:
```bash
docker-compose up
```
This will run the Database server, Golang API, and build the client.

## Development

### Environment
Create a file name `.env`
Enter the following in the file:
```bash
# Application
# environment: dev|prod|test
ENVIRONMENT=dev

# Gin
# gin mode: release|debug
GIN_MODE=debug
HOST=[webserver host e.g: localhost]
PORT=[webserver port e.g: 3000]

# Database
POSTGRES_HOST=[postgres host]
POSTGRES_PORT=[postgres port]
POSTGRES_DB=[postgres db name]
POSTGRES_USER=[postgres user]
POSTGRES_PASSWORD=[postgres password]
```

__NOTE:__
_Contact the individual who gave you access to this repo for credentials._
_Environment variable files are excluded from git._

### Front End
Running the client locally can be done by running the `start` script (yarn or npm) in the `client` directory.

```bash
# change directory into the client directory
cd client

# yarn - start dev server
yarn start

# npm - start dev server
npm start
```

### Back End
Running the backend locally can be done by starting running the `go` command on the application entry point in the `server` directory.

```bash
# change directory into the server directory
cd server

# run server
go run main.go
```

Locally, the environment variables will be loaded from the parent directory. In production/Docker the environment variables are supplied via the compose file.

Once changes are finalized build the container image:
```bash
# from ./server

# Docker CLI (Moby/dockerd engines)
docker build -t application_tracker_go:v1 .

# Rancher / nerdctl (containerd engines)
nerdctl build -t application_tracker_go:v1 .
```

##### Running the image

This isn't common as the docker-compose file handles this, but should you want to run the backend image:
```bash
# Docker CLI (Moby/dockerd engines)
docker run -i -t -e ENVIRONMENT=development POSTGRES_PORT=0000 POSTGRES_HOST=hostname POSTGRES_USER=username POSTGRES_DB=dbname POSTGRES_PASSWORD=hunter2 application_tracker_go:v1

# Rancher / nerdctl (containerd engines)
nerdctl run -i -t -e ENVIRONMENT=development POSTGRES_PORT=0000 POSTGRES_HOST=hostname POSTGRES_USER=username POSTGRES_DB=dbname POSTGRES_PASSWORD=hunter2 application_tracker_go:v1
```


### Database
The database is a local instance of postgres. In the future using a deployed db will be implemented.

```bash
# from ./db

# Docker CLI (Moby/dockerd engines)
docker build -t application_tracker_db:v1 .

# Rancher / nerdctl (containerd engines)
nerdctl build -t application_tracker_db:v1 .
```

### Testing

#### Server
Run all test files:
```bash
go test -v ./...
```

Generate a coverage profile and open in browser:
```bash
go test -coverprofile coverage.out ./...
go tool cover -html=coverage.out
```


#### Client
Run all test files in a single run:
```bash
# yarn - call jest for single test run
yarn test

# npm - call jest for single test run
npm test
```

Run all test files, watching for file changes to re-run tests:
```bash
# yarn - call jest in watch mode
yarn test:watch

# npm - call jest in watch mode
npm run test:watch
```
