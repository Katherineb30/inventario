const getCategorias = (req, res) => {
    res.json({"Categoria":"Electrodomesticos"})
}

export const methodHTTP = {
    /* La llave tiene el mismo nombre del metododo */
    getCategorias
}