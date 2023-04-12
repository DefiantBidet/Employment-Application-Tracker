package controllers

import (
	"net/http"

	"defiantbidet/job-tracker/models"

	"github.com/gin-gonic/gin"
)

/**
 * GetAllApplicationsController
 * GET / handler
 */
func GetAllApplicationsController(context *gin.Context) {
	var applications []models.Application
	err := models.GetAllApplications(&applications)
	if err != nil {
		context.AbortWithStatus(http.StatusNotFound)
	} else {
		context.JSON(http.StatusOK, applications)
	}
}

/**
 * CreateApplicationController
 * POST / handler
 */
func CreateApplicationController(context *gin.Context) {
	var application models.Application
	context.BindJSON(&application)
	err := models.CreateApplication(&application)
	if err != nil {
		context.AbortWithStatus(http.StatusNotFound)
	} else {
		context.JSON(http.StatusOK, application)
	}
}

/**
 * GetApplicationController
 * GET /:id handler
 */
func GetApplicationController(context *gin.Context) {
	id := context.Params.ByName("id")
	var application models.Application
	err := models.GetApplication(&application, id)
	if err != nil {
		context.AbortWithStatus(http.StatusNotFound)
	} else {
		context.JSON(http.StatusOK, application)
	}
}

/**
 * UpdateApplicationController
 * PUT /:id handler
 */
func UpdateApplicationController(context *gin.Context) {
	var application models.Application
	id := context.Params.ByName("id")
	err := models.GetApplication(&application, id)
	if err != nil {
		context.JSON(http.StatusNotFound, application)
	}
	context.BindJSON(&application)
	err = models.UpdateApplication(&application, id)
	if err != nil {
		context.AbortWithStatus(http.StatusNotFound)
	} else {
		context.JSON(http.StatusOK, application)
	}
}

/**
 * DeleteApplicationController
 * DELETE /:id handler
 */
func DeleteApplicationController(context *gin.Context) {
	var application models.Application
	id := context.Params.ByName("id")
	err := models.DeleteApplication(&application, id)
	if err != nil {
		context.AbortWithStatus(http.StatusNotFound)
	} else {
		context.JSON(http.StatusOK, gin.H{"id:" + id: "deleted"})
	}
}
