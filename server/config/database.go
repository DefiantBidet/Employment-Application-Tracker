package config

import (
	"fmt"
	"os"
	"strconv"

	"gorm.io/gorm"
)

// Reference to Gorm DB
var DB *gorm.DB

/**
 * PostgresConfig
 * Object containing DB Configuration data
 */
type PostgresConfig struct {
	Host     string
	Port     int
	User     string
	DBName   string
	Password string
}

/**
 * BuildPostgresConfig
 * Constructs a PostgresConfig object
 * based on environment variables
 *
 * returns a PostgresConfig pointer
 */
func BuildPostgresConfig() *PostgresConfig {
	var pgHost string = "db"
	var pgPort int = 5432

	environment := os.Getenv("ENVIRONMENT")
	if environment == "dev" {
		// development env -
		// connect to postgres via host and exposed port
		// as opposed to via the docker network
		pgHost = os.Getenv("POSTGRES_HOST")
		portString := os.Getenv("POSTGRES_PORT")
		if portString != "" {
			integerValue, err := strconv.Atoi(portString)
			if err == nil {
				pgPort = integerValue
			}
		}
	}

	databaseConfig := PostgresConfig{
		Host:     pgHost,
		Port:     pgPort,
		User:     os.Getenv("POSTGRES_USER"),
		DBName:   os.Getenv("POSTGRES_DB"),
		Password: os.Getenv("POSTGRES_PASSWORD"),
	}
	return &databaseConfig
}

/**
 * DbURL
 * returns a formatted string based on supplied PostgresConfig data
 * formatted in the form of a postgress connection url
 *    e.g. postgres://user:pass@host:port/database
 */
func DbURL(dbConfig *PostgresConfig) string {
	return fmt.Sprintf(
		"postgres://%s:%s@%s:%d/%s",
		dbConfig.User,
		dbConfig.Password,
		dbConfig.Host,
		dbConfig.Port,
		dbConfig.DBName,
	)
}
