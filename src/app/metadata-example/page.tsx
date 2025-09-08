import type { Metadata } from "next";
import Link from "next/link";
export const metadata : Metadata = {
    title: "Metadata Example",
    description: "This is example of writing static metadata example"
}
function Metadata() {
    const example = [
        {
            id: 1,
            item: "one",
        },
        {
            id: 2,
            item: "two",
        },
        {
            id: 3,
            item: "three",
        },
    ]
    return (  
        <div>
            <h1>Metadata Example</h1>
            <ul>{example.map((Item)=> (
            <li key={Item.id}>
                <Link href={`/metadata-example/${Item.id}`}>{Item.item}</Link>
            </li>
))}
                
            </ul>
        </div>
    );
}

export default Metadata;