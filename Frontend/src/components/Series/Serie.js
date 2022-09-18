import React from "react"
import { Link } from "react-router-dom"

let ruta = '/api/series/'
const Serie = ({id,title, release_date, genre, end_date})=>
<tr className="tr-card">
    {console.log(id)}
    <Link className="link" to = {ruta+id}><td>{title}</td></Link>
    <td>{release_date}</td>    
    <td>{end_date}</td>
    <td>{genre ? genre.name : "-"}</td>
</tr>



export default Serie

// "/api/series/:id"
