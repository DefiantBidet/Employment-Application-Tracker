package routes

import (
	"defiantbidet/job-tracker/controllers"

	"github.com/gin-gonic/gin"
)

func addContactRoutes(routerGroup *gin.RouterGroup) {
	contact := routerGroup.Group("/contact")

	contact.GET("", controllers.GetAllContactsController)
	contact.GET("/", controllers.GetAllContactsController)

	contact.POST("", controllers.CreateContactController)
	contact.POST("/", controllers.CreateContactController)

	contact.GET("/:id", controllers.GetContactController)
	contact.GET("/:id/", controllers.GetContactController)

	contact.PUT("/:id", controllers.UpdateContactController)
	contact.PUT("/:id/", controllers.UpdateContactController)

	contact.DELETE("/:id", controllers.DeleteContactController)
	contact.DELETE("/:id/", controllers.DeleteContactController)
}
