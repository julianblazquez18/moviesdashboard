import React from "react";
import useFetch from './../hooks/useFetch';
import useTheme from './../hooks/useTheme';
import NotFound from './../pages/NotFound/index';
import Card from './Card';

function SerieIDInDb() {
    let keyword = window.location.pathname
    const { data, isLoading} = useFetch(`${keyword}`, 'data')
    console.log(data)
    if(data == null){
            return(

                    <div className="total-card">
                        {isLoading && <Card><div>Loading serie... </div></Card>}
                        
                    {isLoading==false && <div>
                        <p className="notFoundp">La serie que estas buscando no se encuentra en la base de datos</p>
                        <NotFound />
                        </div>}
                    </div>
                
            )
     } else {
        return (
            <div className="total-card">
            <Card title= {data.title}>
                <div className="two-both">
                <div className="both">
                    <div className="info">
                    <p className="font-weight-title">Titulo:</p>
                    <p>{data.title}</p>
                    </div>
                    <div className="info">
                    <p className="font-weight-title">Fecha de estreno:</p>
                    <p>{data.release_date}</p>
                    </div>
                </div>
                <div className="both">
                    <div className="info">
                    <p className="font-weight-title">Genero:</p>
                    <p>{data.genre ? data.genre.name : "-"}</p>
                    </div>
                    <div className="info">
                    <p className="font-weight-title">Fecha de finalizacion:</p>
                    <p>{data.end_date}</p>
                    </div>
                </div>
                </div>
        </Card>
                {isLoading && <div>Loading serie... </div>} 
        </div>
        )
    }
}

export default SerieIDInDb
// const apiKey = '1fa17e22'; // Intenta poner cualquier cosa antes para probar

/* function searchMovies(keyword, apiKey) {
    return `http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`
}
 */
// function SearchMovies() {
// 	const [keyword, setKeyword] = React.useState('action');
	
// 	const inputReference = useRef('')
// 	const {data, fetchData, isLoading, error, errorMessage} = useFetch(`http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`, 'Search');

// 	const searchNewMovie = (event) => {
// 		event.preventDefault();
// 		setKeyword(inputReference.current.value)
// 	}
// 	React.useEffect(() => {
// 		console.log("🚀 ~ keyword", keyword)
// 		debounce(fetchData, 3000)
// 		console.log("🚀 ~ debounced", debounce)
// 	} , [keyword])

// 	return (
// 		<div className="container-fluid">
// 			<div className="row my-4">
// 				<div className="col-12 col-md-6">
// 					{/* Buscador */}
// 					<form method="GET" onSubmit={e=>searchNewMovie(e)}>
// 						<div className="form-group">
// 							<label htmlFor="">Buscar por título:</label>
// 							<input type="text" className="form-control" ref={inputReference} onChange={searchNewMovie}/>
// 						</div>
// 						<button className="btn btn-info">Search</button>
// 					</form>
// 				</div>
// 			</div>
// 				<div className="row">
// 				<div className="col-12">
// 					<h2>Películas para la palabra: {keyword}</h2>
// 				</div>
// 				{/* Listado de películas */}
// 				{	!error  && data && data.length > 0 && data.map((movie, i) => {
// 						return (
// 							<div className="col-sm-6 col-md-3 my-4" key={i}>
// 								<div className="card shadow mb-4">
// 									<div className="card-header py-3">
// 										<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
// 									</div>
// 									<div className="card-body">
// 										<div className="text-center">
// 											<img
// 												className="img-fluid px-3 px-sm-4 mt-3 mb-4"
// 												src={movie.Poster}
// 												alt={movie.Title}
// 												style={{ width: '90%', height: '400px', objectFit: 'cover' }}
// 											/>
// 										</div>
// 										<p>{movie.Year}</p>
// 									</div>
// 								</div>
// 							</div>
// 						)
// 					})
// 				}
// 			</div>
// 			{error && <div className="alert alert-warning text-center">{errorMessage}</div>}
// 			{isLoading && <div className="alert alert-info text-center">Cargando...</div>}
// 		</div>
// 	)
// }

// export default SearchMovies;
