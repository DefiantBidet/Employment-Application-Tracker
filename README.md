# Job Tracker

track employment applications
generate data viz
inspired by the app-tracker (https://github.com/Oscar6/app-tracker)

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

_Webserver Port: The client leverages Webpack Dev Server which uses port 3000.
If you want to develop on both the client and the server, locally, use a web server port other than 3000. The client is set to use a proxy in `package.json`._

_Contact the individual who gave you access to this repo for credentials._

_Environment variable files are excluded from git._

### Stuff
 - todo ...

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
 - todo ...
