const app = require("./app")
const port = 8080

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`)
})