package main

import (
	"log"

	"defiantbidet/job-tracker/config"
	"defiantbidet/job-tracker/models"
	"defiantbidet/job-tracker/routes"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var err error

func main() {
	// load environment variables
	err := godotenv.Load("../.env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	config.DB, err = gorm.Open(postgres.Open(config.DbURL(config.BuildPostgresConfig())), &gorm.Config{})
	if err != nil {
		log.Fatalln(err)
	}

	sqlDB, _ := config.DB.DB()
	defer sqlDB.Close()

	config.DB.AutoMigrate(&models.Application{}, &models.Company{}, &models.Contact{}, &models.History{})

	router := routes.SetupRouter()
	router.Run()
}
