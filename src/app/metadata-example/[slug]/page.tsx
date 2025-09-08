import type {Metadata} from "next"
const dummyData = {
    "1":{
       "title": "one"
    },
    "2":{
       "title": "two"
    },
    "3":{
       "title": "three"
    },

}
export async function generateMetadata({
    params
}:{
    params : Promise<{slug: string}>
}) :Promise<Metadata>
{
    const {slug} = await params
    const data = dummyData[slug as keyof typeof dummyData]
    return(
        
            {
            title: data.title
            }
     
    )
}
export default async function DynamicMetadataExample({params}:{
    params: Promise<{slug: string}>
}){
    const {slug} = await params
    const data  = dummyData[slug as keyof typeof dummyData]
    return(
        <div>
          <h1>{data.title}</h1>
        </div>
    )
}