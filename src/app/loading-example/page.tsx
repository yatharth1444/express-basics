async function getData() {
 await new Promise((resolve )=> setTimeout(resolve, 2200) )   
 return {
    stats:{
        users: 2000,
    },

}}

export default async function Loadingexmple() {
    const data = await getData()
    return (
        <div className="p-4">
              Loading example
              <p className="font-bold text-sm">{data.stats.users}</p>
        </div>
    )
}