import React from "react"
import { Route, BrowserRouter, Switch } from "react-router-dom"
import MoviesInDb from "../pages/MoviesInDb"
import LastMovieInDb from './../pages/LastMovieInDb';
import GenresInDb from './../pages/GenresInDb';
import SeriesInDb from './../pages/SeriesInDb';
import SerieIDInDb from './SerieIDInDb';
import NotFound from './../pages/NotFound';
import SearchMovies from './SearchMovies';


export default function ContentMiddle(){
    return(
        <div className="row">
            <Switch>
                <Route exact path="/">
                    <SeriesInDb />
                </Route>
                <Route path="/last-movie" component={LastMovieInDb} />
                <Route path="/genres" component={GenresInDb} />
                <Route path="/movies" component={MoviesInDb} />
                <Route path="/search" component={SearchMovies} />
                <Route path="/api/series/:id" component={SerieIDInDb} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}