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

    _, err := database.DB.Exec("INSERT INTO orders (mesa_id, item_id, quantidade) VALUES ($1, $2, $3)", order.MesaID, order.ItemID, order.Quantidade)
    if err != nil {
        http.Error(w, "Erro ao criar pedido", http.StatusInternalServerError)
        return
    }

    w.WriteHeader(http.StatusCreated)
}
