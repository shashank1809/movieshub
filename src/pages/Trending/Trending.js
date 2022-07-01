import axios from 'axios'
import { useEffect, useState } from "react";
import SingleContent from '../../components/singleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';
import "./Trending.css";
const Trending = () => {
    const [page, setPage] = useState(1)
    const [content, setcontent] = useState([]);

    const fetchTrending = async () => {

        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        setcontent(data.results);
    };

    useEffect(() => {
        fetchTrending();
        // eslint-disable-next-line
    }, [page])

    return (
        <div>
            <span className="pageTitle">Today's Trending</span>
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
                            media_type={c.media_type}
                            vote_average={c.vote_average}
                        />
                        )
                    })
                }
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    );
};

export default Trending
