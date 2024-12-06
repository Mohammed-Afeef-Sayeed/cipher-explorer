package routes

import (
	"goauth/controllers"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Post("/api/register", controllers.Register)
	app.Post("/api/login", controllers.Login)
	app.Get("/api/user", controllers.User)
	app.Post("/api/logout", controllers.Logout)
	app.Post("/api/convertBase64ToText", controllers.ConvertBase64ToText)
	app.Post("/api/convertTextToBase64", controllers.ConvertTextToBase64)
	app.Post("/api/hash", controllers.HashText)
	app.Post("/api/verifyHash", controllers.VerifyHash)
}
