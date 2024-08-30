package models

import (
    "time"
)

type Order struct {
    ID       int       `json:"id"`
    MesaID   int       `json:"mesa_id"`
    ItemID   int       `json:"item_id"`
    Quantidade int     `json:"quantidade"`
    CriadoEm time.Time `json:"criado_em"`
}
