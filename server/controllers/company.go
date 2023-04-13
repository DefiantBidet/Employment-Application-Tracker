package controllers

import (
	"net/http"

	"defiantbidet/job-tracker/models"

	"github.com/gin-gonic/gin"
)

/**
 * GetAllCompaniesController
 * GET / handler
 */
func GetAllCompaniesController(context *gin.Context) {
	var companies []models.Company
	err := models.GetAllCompanies(&companies)
	if err != nil {
		context.AbortWithStatus(http.StatusNotFound)
	} else {
		context.JSON(http.StatusOK, companies)
	}
}

/**
 * CreateCompanyController
 * POST / handler
 */
func CreateCompanyController(context *gin.Context) {
	var company models.Company
	context.BindJSON(&company)
	err := models.CreateCompany(&company)
	if err != nil {
		context.AbortWithStatus(http.StatusNotFound)
	} else {
		context.JSON(http.StatusOK, company)
	}
}

/**
 * GetCompanyController
 * GET /:id handler
 */
func GetCompanyController(context *gin.Context) {
	id := context.Params.ByName("id")
	var company models.Company
	err := models.GetCompany(&company, id)
	if err != nil {
		context.AbortWithStatus(http.StatusNotFound)
	} else {
		context.JSON(http.StatusOK, company)
	}
}

/**
 * UpdateCompanyController
 * PUT /:id handler
 */
func UpdateCompanyController(context *gin.Context) {
	var company models.Company
	id := context.Params.ByName("id")
	err := models.GetCompany(&company, id)
	if err != nil {
		context.JSON(http.StatusNotFound, company)
	}
	context.BindJSON(&company)
	err = models.UpdateCompany(&company, id)
	if err != nil {
		context.AbortWithStatus(http.StatusNotFound)
	} else {
		context.JSON(http.StatusOK, company)
	}
}

/**
 * DeleteCompanyController
 * DELETE /:id handler
 */
func DeleteCompanyController(context *gin.Context) {
	var company models.Company
	id := context.Params.ByName("id")
	err := models.DeleteCompany(&company, id)
	if err != nil {
		context.AbortWithStatus(http.StatusNotFound)
	} else {
		context.JSON(http.StatusOK, gin.H{"deletedId": id})
	}
}
