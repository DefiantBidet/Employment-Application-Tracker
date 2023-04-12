package controllers

import (
	"net/http"

	"defiantbidet/job-tracker/models"

	"github.com/gin-gonic/gin"
)

/**
 * GetAllContactsController
 * GET / handler
 */
func GetAllContactsController(context *gin.Context) {
	var contacts []models.Contact
	err := models.GetAllContacts(&contacts)
	if err != nil {
		context.AbortWithStatus(http.StatusNotFound)
	} else {
		context.JSON(http.StatusOK, contacts)
	}
}

/**
 * CreateContactController
 * POST / handler
 */
func CreateContactController(context *gin.Context) {
	var contact models.Contact
	context.BindJSON(&contact)
	err := models.CreateContact(&contact)
	if err != nil {
		context.AbortWithStatus(http.StatusNotFound)
	} else {
		context.JSON(http.StatusOK, contact)
	}
}

/**
 * GetContactController
 * GET /:id handler
 */
func GetContactController(context *gin.Context) {
	id := context.Params.ByName("id")
	var contact models.Contact
	err := models.GetContact(&contact, id)
	if err != nil {
		context.AbortWithStatus(http.StatusNotFound)
	} else {
		context.JSON(http.StatusOK, contact)
	}
}

/**
 * UpdateContactController
 * PUT /:id handler
 */
func UpdateContactController(context *gin.Context) {
	var contact models.Contact
	id := context.Params.ByName("id")
	err := models.GetContact(&contact, id)
	if err != nil {
		context.JSON(http.StatusNotFound, contact)
	}
	context.BindJSON(&contact)
	err = models.UpdateContact(&contact, id)
	if err != nil {
		context.AbortWithStatus(http.StatusNotFound)
	} else {
		context.JSON(http.StatusOK, contact)
	}
}

/**
 * DeleteContactController
 * DELETE /:id handler
 */
func DeleteContactController(context *gin.Context) {
	var contact models.Contact
	id := context.Params.ByName("id")
	err := models.DeleteContact(&contact, id)
	if err != nil {
		context.AbortWithStatus(http.StatusNotFound)
	} else {
		context.JSON(http.StatusOK, gin.H{"id:" + id: "deleted"})
	}
}
