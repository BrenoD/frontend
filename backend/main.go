package main

import (
	"backend/database"
	"backend/middlewares"
	"backend/routes"
	"log"
	"net/http"
	
	"github.com/gorilla/mux"
)

func main() {
	database.Connect()

	r := mux.NewRouter()
	routes.RegisterRoutes(r)
	
	r.Use(middlewares.ApplyCORS)

	log.Println("Servidor rodando na porta 8080...")
	log.Fatal(http.ListenAndServe(":8080", r))
}
