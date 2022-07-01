import axios from 'axios'
import { useEffect, useState } from "react";
import SingleContent from '../../components/singleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';
import Genres from '../../components/Genres';
import useGenres from '../../Hooks/useGenre';

const Series = () => {

    const [page, setPage] = useState(1);
    const [content, setcontent] = useState([]);
    const [numOfPage, setnumOfPage] = useState();
    const [selectedGenres, setselectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL= useGenres(selectedGenres);

    const fetchMovie = async () => {
        
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genreforURL}`);
        setcontent(data.results);
        setnumOfPage(data.total_pages)
    };

    useEffect(() => {
        fetchMovie();
        // eslint-disable-next-line
    }, [page,genreforURL]);

    return (
        <div>
            <span className="pageTitle">TV Series</span>
            <Genres 
                type="tv"
                selectedGenres={selectedGenres} 
                setselectedGenres={setselectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className="trending">
                {
                    content && content.map((c)=>{
                        return(
                        <SingleContent 
                            key={c.id} 
                            id={c.id} 
                            poster={c.poster_path} 
                            title={c.title || c.name} 
                            date={c.first_air_date || c.release_date} 
                            media_type="tv"
                            vote_average={c.vote_average}
                        />
                        )
                    })
                }
            </div>
            {numOfPage > 1 && (
            <CustomPagination setPage={setPage} numberOfPages={numOfPage}/>
            )}
        </div>

    )
}

export default Series   