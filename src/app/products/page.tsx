import Link from "next/link";
function Products() {
    const products = [
        {
            id: 1,
            name: "mobile",
            price: 25
        },
        {
            id: 2,
            name: "headphone",
            price: 55
        },
        {
            id: 3,
            name: "pc",
            price: 45
        },
    ]
    return ( 
         <h1 className="text-2xl font-bold mb-4">
           <div className="grid gap-4">
            {
                products.map(item=>( 
                    <div key={item.id} className="border p-4 rounded-2xl">
                       <h2> {item.name}</h2>
                       <p>{item.price}</p>
                       <Link href={`/products/${item.id}`}>view details </Link>
                    </div>
                ))
            }
           </div>
         </h1>
     );
}

export default Products;