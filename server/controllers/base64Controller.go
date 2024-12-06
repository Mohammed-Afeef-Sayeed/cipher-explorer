package controllers

import (
	"encoding/base64"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func ConvertBase64ToText(c *fiber.Ctx) error {
	type Request struct {
		Base64 string `json:"base64"`
	}

	req := new(Request)
	if err := c.BodyParser(req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request body",
		})
	}

	if len(req.Base64) == 0 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Please Enter Base64 text",
		})
	}

	decoded, err := base64.StdEncoding.DecodeString(req.Base64)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid Base64 string",
		})
	}

	return c.JSON(fiber.Map{
		"text": string(decoded),
	})
}

func ConvertTextToBase64(c *fiber.Ctx) error {
	type Request struct {
		Text string `json:"text"`
	}

	req := new(Request)
	if err := c.BodyParser(req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request body",
		})
	}

	if len(req.Text) == 0 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Please enter text",
		})
	}

	encoded := base64.StdEncoding.EncodeToString([]byte(req.Text))
	return c.JSON(fiber.Map{
		"base64": encoded,
	})
}

func HashText(c *fiber.Ctx) error {
	type Request struct {
		Text string `json:"text"`
	}

	req := new(Request)
	if err := c.BodyParser(req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request body",
		})
	}

	if len(req.Text) == 0 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Please enter text",
		})
	}

	hashed, err := bcrypt.GenerateFromPassword([]byte(req.Text), bcrypt.DefaultCost)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to hash text",
		})
	}

	return c.JSON(fiber.Map{
		"hashed": string(hashed),
	})
}

func VerifyHash(c *fiber.Ctx) error {
	type Request struct {
		Text string `json:"text"`
		Hash string `json:"hash"`
	}

	req := new(Request)
	if err := c.BodyParser(req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request body",
		})
	}

	if len(req.Text) == 0 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Please enter text",
		})
	}

	if len(req.Hash) == 0 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Please enter Hash Value",
		})
	}

	err := bcrypt.CompareHashAndPassword([]byte(req.Hash), []byte(req.Text))
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"verified": false,
			"error":    "Text does not match the hash",
		})
	}

	return c.JSON(fiber.Map{
		"verified": true,
	})
}
