package routes

import (
    "github.com/gorilla/mux"
    "backend/handlers"
)

func RegisterRoutes(r *mux.Router) {
    r.HandleFunc("/menu", handlers.GetMenuItems).Methods("GET")
    r.HandleFunc("/order", handlers.CreateOrder).Methods("POST")
    r.HandleFunc("/tables", handlers.GetTables).Methods("GET")
}
