package main

import (
    "backend/database"
    "backend/routes"
    "log"
    "net/http"
)

func main() {
    database.Connect()
    routes.RegisterRoutes()

    log.Println("Servidor rodando na porta 8080...")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
