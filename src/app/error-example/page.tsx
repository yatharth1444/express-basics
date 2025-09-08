async function getProducts() {
    const errorChance = Math.random()> 0.5
    if(errorChance){
        throw new Error ("failed to fetch data")
    }
    const products = [ 
        {
            id: 1,
            name: "one"
        },
        {
            id: 2,
            name: "two"
        },
        {
            id: 3,
            name: "three"
        },
    ]
    return (
        products
    )
}

async function ErrorExample() {
    const result = await getProducts()
    return (  
        <div className="p-4">
           <h1>Products list </h1>
           <div className="grid gap-4">{
            result.map((item)=>(
                <p key={item.id}>{item.name}</p>
            ))}</div>
        </div>
    );
}


export default ErrorExample;