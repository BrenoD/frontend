package handlers

import (
    "encoding/json"
    "net/http"
    "backend/database"
    "backend/models"
)

func CreateOrder(w http.ResponseWriter, r *http.Request) {
    var order models.Order
    if err := json.NewDecoder(r.Body).Decode(&order); err != nil {
        http.Error(w, "Erro ao decodificar pedido", http.StatusBadRequest)
        return
    }

    for _, item := range order.Items {
        _, err := database.DB.Exec(
            "INSERT INTO orders (mesa_id, item_id, quantidade) VALUES ($1, (SELECT id FROM menu_items WHERE nome = $2), $3)",
            order.MesaID, item.Nome, 1)  // A quantidade está fixa em 1 para simplificação
        if err != nil {
            http.Error(w, "Erro ao criar pedido", http.StatusInternalServerError)
            return
        }
    }

    w.WriteHeader(http.StatusCreated)
} 
