package models

import (
	"defiantbidet/job-tracker/config"
	"fmt"
)

type Company struct {
	ID    uint   `json:"id" gorm:"primaryKey"`
	Name  string `json:"name"`
	Notes string `json:"notes"`
}

func (company *Company) TableName() string {
	return "company"
}

func GetAllCompanies(company *[]Company) (err error) {
	if err = config.DB.Find(company).Error; err != nil {
		return err
	}
	return nil
}

func CreateCompany(company *Company) (err error) {
	if err = config.DB.Create(company).Error; err != nil {
		return err
	}
	return nil
}

func GetCompany(company *Company, id string) (err error) {
	if err := config.DB.Where("id = ?", id).First(company).Error; err != nil {
		return err
	}
	return nil
}

func UpdateCompany(company *Company, id string) (err error) {
	fmt.Println(company)
	config.DB.Save(company)
	return nil
}

func DeleteCompany(company *Company, id string) (err error) {
	config.DB.Where("id = ?", id).Delete(company)
	return nil
}
