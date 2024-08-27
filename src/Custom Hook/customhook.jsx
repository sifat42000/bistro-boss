import { useEffect, useState } from "react"

const customhook = () =>{
    const [menu,setMenu] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/Menu')
        .then(res => res.json())
        .then(data => setMenu(data))
    },[])

    return [menu]
}

export default customhook;