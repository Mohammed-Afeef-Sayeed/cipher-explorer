package controllers

import (
	"goauth/database"
	"goauth/models"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func Register(c *fiber.Ctx) error {

	var req models.User

	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Failed to parse request body",
		})
	}

	// var data map[string]string

	// if err := c.BodyParser(&data); err != nil {
	// 	return err
	// }

	if req.UserName == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "UserName is required",
		})
	}

	if req.Email == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Email is required",
		})
	}

	if req.Password == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Password is required",
		})
	}
	password, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)

	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to Hash password",
		})
	}

	user := models.User{
		UserName: req.UserName,
		Email:    req.Email,
		Password: string(password),
	}

	database.DB.Create(&user)

	successResponse := models.UserResponse{
		Id:       user.Id,
		UserName: user.UserName,
		Email:    user.Email,
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "User registered successfully",
		"user":    successResponse,
		"check":   user,
	})
}
