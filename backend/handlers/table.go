package handlers

import (
    "encoding/json"
    "net/http"
    // "strconv"
    "backend/database"
    "backend/models"
)

func GetTables(w http.ResponseWriter, r *http.Request) {
    rows, err := database.DB.Query("SELECT id, numero_mesa, status FROM mesas WHERE status = true")
    if err != nil {
        http.Error(w, "Erro ao buscar mesas", http.StatusInternalServerError)
        return
    }
    defer rows.Close()

    var tables []models.Mesa
    for rows.Next() {
        var table models.Mesa
        if err := rows.Scan(&table.ID, &table.NumeroMesa, &table.Status); err != nil {
            http.Error(w, "Erro ao ler mesas", http.StatusInternalServerError)
            return
        }
        tables = append(tables, table)
    }

    json.NewEncoder(w).Encode(tables)
}
