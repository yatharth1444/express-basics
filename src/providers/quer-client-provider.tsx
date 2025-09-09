"use client"
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export default function ClientProvider({children}: {children: React.ReactNode}) {
    const [queryClient] = useState(
        () => new QueryClient({
            defaultOptions: {
                queries:{
                    staleTime: 8*1000*60, 
                    gcTime: 10*60*100
                } 
            }
        })
    )
    return (
        <QueryClientProvider client={queryClient}>
           {children}
           <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
        </QueryClientProvider>
    )
    
}