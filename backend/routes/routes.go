package routes

import (
    "net/http"
    "backend/handlers"
)

func RegisterRoutes() {
    http.HandleFunc("/menu", handlers.GetMenuItems)
    http.HandleFunc("/order", handlers.CreateOrder)
    http.HandleFunc("/tables", handlers.GetTables)
}
