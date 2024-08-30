package handlers

import (
    "encoding/json"
    "net/http"
    // "strconv"
    "backend/database"
    "backend/models"
)

func GetMenuItems(w http.ResponseWriter, r *http.Request) {
    rows, err := database.DB.Query("SELECT id, nome, descricao, preco FROM menu_items")
    if err != nil {
        http.Error(w, "Erro ao buscar itens do menu", http.StatusInternalServerError)
        return
    }
    defer rows.Close()

    var items []models.MenuItem
    for rows.Next() {
        var item models.MenuItem
        if err := rows.Scan(&item.ID, &item.Nome, &item.Descricao, &item.Preco); err != nil {
            http.Error(w, "Erro ao ler itens do menu", http.StatusInternalServerError)
            return
        }
        items = append(items, item)
    }

    json.NewEncoder(w).Encode(items)
}
