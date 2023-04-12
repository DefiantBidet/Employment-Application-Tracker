package routes

import (
	"net/http"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	var router = gin.Default()
	router.SetTrustedProxies(nil)

	// Serve frontend static files
	router.Use(
		static.Serve("/", static.LocalFile("../client/dist", true)),
	)

	// Setup route group for the API
	api := router.Group("/api")
	{
		api.GET("/", func(context *gin.Context) {
			context.JSON(http.StatusOK, gin.H{
				"version": "v1",
			})
		})
	}

	addApplicationRoutes(api)
	addCompanyRoutes(api)
	addContactRoutes(api)

	return router
}

func Run(router *gin.Engine) {
	// Start and run the server
	router.Run()
}
