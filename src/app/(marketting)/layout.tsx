import Link from "next/link";
function Layout({children}:{children: React.ReactNode}) {
    return (  
    <div>
      <div className="flex-1 p-5">{children}</div>
      <ul>
       <li>
         <Link href='/'>Home</Link>
        </li>  
           <li>  
           <Link href='/about'>About</Link>
           </li>

      </ul> 
    </div>   
    );
}

export default Layout;