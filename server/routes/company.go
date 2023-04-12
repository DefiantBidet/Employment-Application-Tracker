package routes

import (
	"defiantbidet/job-tracker/controllers"

	"github.com/gin-gonic/gin"
)

func addCompanyRoutes(routerGroup *gin.RouterGroup) {
	company := routerGroup.Group("/company")

	company.GET("/", controllers.GetAllCompaniesController)

	company.POST("/", controllers.CreateCompanyController)

	company.GET("/:id", controllers.GetCompanyController)

	company.PUT("/:id", controllers.UpdateCompanyController)

	company.DELETE("/:id", controllers.DeleteCompanyController)
}
