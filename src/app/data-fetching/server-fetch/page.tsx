interface Products{
  id: number,
  title: string,
  price: number,
  category: string
}  
interface ProductResponse{
    products: Products[],
    total: number
}
async function getProducts() : Promise<ProductResponse>{
    const response  = await fetch('https://dummyjson.com/products')
    if(!response.ok){
        throw new Error("there is some error")
    }
    return response.json()
}

async function ServerFetch() {
    const products  = await getProducts()

  return (
    <div>
      <h1>Server side data fetching</h1>
      <h3>{products?.total} no of products</h3>
      <div className="flex flex-col gap-2">
        {products?.products?.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServerFetch;