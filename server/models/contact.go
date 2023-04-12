package models

import (
	"defiantbidet/job-tracker/config"
	"fmt"
)

type Contact struct {
	ID        uint   `json:"id" gorm:"primaryKey"`
	CompanyID uint   `json:"company_id"`
	Name      string `json:"name"`
	Email     string `json:"email"`
	Notes     string `json:"notes"`
}

func (contact *Contact) TableName() string {
	return "contact"
}

func GetAllContacts(contact *[]Contact) (err error) {
	if err = config.DB.Find(contact).Error; err != nil {
		return err
	}
	return nil
}

func CreateContact(contact *Contact) (err error) {
	if err = config.DB.Create(contact).Error; err != nil {
		return err
	}
	return nil
}

func GetContact(contact *Contact, id string) (err error) {
	if err := config.DB.Where("id = ?", id).First(contact).Error; err != nil {
		return err
	}
	return nil
}

func UpdateContact(contact *Contact, id string) (err error) {
	fmt.Println(contact)
	config.DB.Save(contact)
	return nil
}

func DeleteContact(contact *Contact, id string) (err error) {
	config.DB.Where("id = ?", id).Delete(contact)
	return nil
}
