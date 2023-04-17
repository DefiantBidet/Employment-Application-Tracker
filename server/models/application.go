package models

import (
	"defiantbidet/job-tracker/config"
	"fmt"
)

type Application struct {
	ID          uint    `json:"id" gorm:"primaryKey"`
	CompanyID   uint    `json:"company_id"`
	CompanyName string  `json:"company_name"`
	Role        string  `json:"role"`
	Status      string  `json:"status"`
	Salary      float64 `json:"salary"`
	AppliedDate string  `json:"applied_date"`
	Notes       string  `json:"notes"`
	RedFlag     bool    `json:"red_flag"`
}

func (application *Application) TableName() string {
	return "employment"
}

func GetAllApplications(application *[]Application) (err error) {
	if err = config.DB.Find(application).Error; err != nil {
		return err
	}
	return nil
}

func CreateApplication(application *Application) (err error) {
	if err = config.DB.Create(application).Error; err != nil {
		return err
	}
	return nil
}

func GetApplication(application *Application, id string) (err error) {
	if err := config.DB.Where("id = ?", id).First(application).Error; err != nil {
		return err
	}
	return nil
}

func UpdateApplication(application *Application, id string) (err error) {
	fmt.Println(application)
	config.DB.Save(application)
	return nil
}

func DeleteApplication(application *Application, id string) (err error) {
	config.DB.Where("id = ?", id).Delete(application)
	return nil
}
