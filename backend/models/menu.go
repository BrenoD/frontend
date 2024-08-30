package models

import (
    "time"
)

type MenuItem struct {
    ID        int       `json:"id"`
    Nome      string    `json:"nome"`
    Descricao string    `json:"descricao"`
    Preco     float64   `json:"preco"`
    CriadoEm  time.Time `json:"criado_em"`
}
