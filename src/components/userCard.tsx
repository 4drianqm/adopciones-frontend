"use client"

interface Props{
    id: number;
    name: string;
    lastname:string;
    email:string;
}


export default function userCard({id, name, lastname}: Props) {

    const handleClick = () =>{
        alert(`${name}`)
    }


  return (
    <div>
        <h2>{`${id} - ${name}, ${lastname}`}</h2>
        <button onClick={handleClick}></button>
    </div>
  )
}
