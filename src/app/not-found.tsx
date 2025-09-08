"use client"
import { useRouter } from "next/navigation";

function NotFound() {
    const router = useRouter()
    return (  
        <div>
            <h1>Not Found</h1>
            <button onClick={()=> router.push('/')} className="bg-black p-5 text-white">Home page</button>
        </div>
    );
}

export default NotFound;