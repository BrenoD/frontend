package models

import (
    "time"
)

type Mesa struct {
    ID        int       `json:"id"`
    NumeroMesa int      `json:"numero_mesa"`
    Status    bool      `json:"status"`
    CriadoEm  time.Time `json:"criado_em"`
}
