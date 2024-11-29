package main

import (
	"goauth/database"
	"goauth/routes"
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {

	database.Connect()
	app := fiber.New()
	routes.Setup(app)
	if err := app.Listen(":8080"); err != nil {
		log.Fatalf("Error starting server: %v", err)
	}
}
