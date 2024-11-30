package models

type User struct {
	Id       uint   `json:"id" gorm:"primaryKey"`
	UserName string `json:"userName" gorm:"type:varchar(255);not null"`
	Email    string `json:"email" gorm:"type:varchar(191);unique;not null"`
	Password string `json:"password" gorm:"type:varchar(255);not null"`
}

type UserResponse struct {
	Id       uint   `json:"id"`
	UserName string `json:"userName"`
	Email    string `json:"email"`
}
