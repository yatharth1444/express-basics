"use client"
import useSWR from "swr";
interface Comments{
    id: number,
    body: string
}
const fetcher = (url: string) => fetch(url).then(res => res.json())

function SWRExample() {
const {data, error, isLoading, mutate} = useSWR('https://dummyjson.com/comments', fetcher, {
    revalidateOnFocus : true,
    refereshInterval: 30000,
    errorRetryCount: 3
})
const handleRefresh = () => {
    mutate()
}
if(isLoading) return <h1>Loading...</h1>
if(error) return <h1>{error.message}</h1>
console.log(data, error, isLoading);

    return ( 
        <div>
            <h1>SWR Example</h1>
            <button onClick={handleRefresh}>Refresh</button>
            <div className="flex flex-col gap-2">
              {data?.comments.map((comment: Comments)=>(
                <div key={comment.id}>
                    <h3>{comment.body}</h3>
                </div>
              ))}
            </div>


        </div>

     );
}

export default SWRExample;
