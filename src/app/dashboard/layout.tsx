import Link from "next/link"
export default function CommonDashboardLayout({children}:{
    children: React.ReactNode
}){
    return(
        <div className="flex">
            <aside className="w-64 p-4 border-r">
            <h2> Dashboard </h2>
            <nav>
                <ul>
                    <li>
                       <Link href={'/dashboard'}>Dashboard</Link> 
                    </li>
                    <li>
                       <Link href={'/dashboard/analytics'}>Analytics Dashboard</Link> 
                    </li>                    
                </ul>
            </nav>
            </aside>
            <div className="flex p-5">{children}</div>
        </div>
    )
}