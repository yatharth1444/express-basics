"use client";

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";

function  Profile() {
  const navigate = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()

  console.log(navigate, pathname, params);
  console.log( searchParams, searchParams.get('name'), "search params");
    console.log( searchParams, searchParams.getAll('name'), "search params");

  
  const handleOnClick = () =>{
    navigate.push('/')
  }
    return (
       <div>
         <button onClick={handleOnClick}>on Click</button>
       </div>
      );
}

export default Profile;