import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';

function Detail(){
    const {id} = useParams();
    const [movieData, setMovieData] = useState({});
    const [loading, setLoading] = useState(true);
    console.log(id)
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovieData(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);
    
    // console.log("movieData",movieData);
    console.log("data", movieData.title_long)
    

    // return (
    //     loading ? <h3>Loading</h3> :
    //     <h3>Compleate</h3>);

    return (
    loading ? <h3>Loading</h3> :
    <MovieDetail
        coverImage={movieData.medium_cover_image}
        title_long={movieData.title_long}
        genres={movieData.genres}
        rating={movieData.rating}
        runtime={movieData.runtime}
        description={movieData.description_full}
    />);
}

export default Detail;