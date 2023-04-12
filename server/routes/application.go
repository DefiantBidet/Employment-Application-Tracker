package routes

import (
	"defiantbidet/job-tracker/controllers"

	"github.com/gin-gonic/gin"
)

func addApplicationRoutes(routerGroup *gin.RouterGroup) {
	application := routerGroup.Group("/application")

	application.GET("/", controllers.GetAllApplicationsController)

	application.POST("/", controllers.CreateApplicationController)

	application.GET("/:id", controllers.GetApplicationController)

	application.PUT("/:id", controllers.UpdateApplicationController)

	application.DELETE("/:id", controllers.DeleteApplicationController)
}

// r := gin.Default()

// v1 := r.Group("/v1")
// {
// 	v1.GET("todo", Controllers.GetTodos)
// 	v1.POST("todo", Controllers.CreateATodo)
// 	v1.GET("todo/:id", Controllers.GetATodo)
// 	v1.PUT("todo/:id", Controllers.UpdateATodo)
// 	v1.DELETE("todo/:id", Controllers.DeleteATodo)
// }
