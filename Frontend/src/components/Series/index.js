import React from "react";
import Serie from './Serie';
import useFetch from './../../hooks/useFetch';
import useTheme from './../../hooks/useTheme';

function Series() {
    const { data, isLoading} = useFetch('/api/series', 'data')
    const {darkTheme} = useTheme()
    return(
        <div className="row" style={{backgroundColor: darkTheme ? 'black': 'white'}}>
            <table className="table" style={{backgroundColor: darkTheme ? 'black': 'white'}}>
            <thead>
                <tr> 
                    <th>Titulo</th> 
                    <th>Fecha de estreno</th> 
                    <th>Fecha de finalizacion</th> 
                    <th>Genero</th> 
                </tr>
            </thead>
            <tbody>
                {   data && data.map((serie, i)=>
                    <Serie {...serie} key={i} />)
                }
            </tbody>
            <tfoot>
                <tr> 
                    <th>Titulo</th> 
                    <th>Fecha de estreno</th> 
                    <th>Fecha de finalizacion</th> 
                    <th>Genero</th> 
                </tr>
            </tfoot>
            </table>
            {isLoading && <div>Loading series... </div>} 
        </div>
    )
}

export default Series