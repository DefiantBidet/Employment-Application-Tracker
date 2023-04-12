package models

import (
	"defiantbidet/job-tracker/config"
	"fmt"
)

type History struct {
	ID            uint   `json:"id" gorm:"primaryKey"`
	ApplicationID uint   `json:"application_id"`
	CompanyID     uint   `json:"company_id"`
	Status        string `json:"status"`
}

func (history *History) TableName() string {
	return "status_history"
}

func GetAllHistories(history *[]History) (err error) {
	if err = config.DB.Find(history).Error; err != nil {
		return err
	}
	return nil
}

func CreateHistory(history *History) (err error) {
	if err = config.DB.Create(history).Error; err != nil {
		return err
	}
	return nil
}

func GetHistory(history *History, id string) (err error) {
	if err := config.DB.Where("id = ?", id).First(history).Error; err != nil {
		return err
	}
	return nil
}

func UpdateHistory(history *History, id string) (err error) {
	fmt.Println(history)
	config.DB.Save(history)
	return nil
}

func DeleteHistory(history *History, id string) (err error) {
	config.DB.Where("id = ?", id).Delete(history)
	return nil
}
