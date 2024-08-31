package models

import "time"

type Order struct {
    ID       int       `json:"id"`
    MesaID   int       `json:"mesa_id"`
    Items    []OrderItem `json:"items"`  // Novo campo para itens do pedido
    CriadoEm time.Time `json:"criado_em"`
}

type OrderItem struct {
    Nome   string  `json:"nome"`
    Preco  float64 `json:"preco"`
}
