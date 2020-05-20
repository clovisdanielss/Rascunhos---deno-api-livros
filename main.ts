import { Application, Router } from "./dependeces.ts";
import { Book } from "./product.ts";

var database : Array<Book> = []
database.push(new Book({name: "Teste", desc: "Outro teste", id: 5, price:100}))

const app = new Application()

app.use((context,next)=>{
    console.log("Recebido sinal:", context.request.method , context.request.url.pathname)
    let header = new Headers()
    header.set("Content-Type","application/json")
    context.response.headers = header
    return next()
})

const router = new Router()
router.get("/",context=>{
    context.response.body = {
        message:"Esta é minha primeira API em DENO"
    }
}).get("/books", context=>{
    context.response.body = database
}).get("/books/:id", context=>{
    database.map(data=>{
        if(context.params && data.getId().toString() === context.params.id){
            context.response.body = data
        }
    })
}).post("/books", async context=>{
    let max = 0
    database.map(data=>{
        if(data.getId() > max){
            max = data.getId()
        }
    })
    let id = max + 1
    let json = await context.request.body()
    json.value.id = id
    database.push(new Book(json.value))
})

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({port:8080})
