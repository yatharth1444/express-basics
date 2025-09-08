"use client"
import { useEffect } from "react";

function ErrorBoundary({
    error,
    reset
}:{
    error: Error & {digest?: string}
    reset: ()=> void
}) {
    useEffect(()=>{
      console.error(error.digest);
      
    },[error])

    return (  
        <div>
            <h2>Something went wrong </h2>
            <p className="text-red-600 ">{error?.message || 'an error occured'}</p>
            <button onClick={()=> reset()}>Try again</button>
        </div>
    );
}

export default ErrorBoundary;