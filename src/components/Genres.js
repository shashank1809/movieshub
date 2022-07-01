import { Chip } from "@material-ui/core";
import axios from "axios"
import { useEffect } from "react";

const Genres = ({type, selectedGenres, setselectedGenres, genres, setGenres, setPage}) => {


    const handleAdd = (genre)=>{
        setselectedGenres([...selectedGenres,genre]);
        setGenres(genres.filter((g)=> g.id !== genre.id));
        setPage(1);
    };

    const handleRemove = (genre)=>{
        setselectedGenres(selectedGenres.filter((selected)=>selected.id !== genre.id))
        setGenres([...genres,genre])
        setPage(1);
    };

    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        setGenres(data.genres);
        
    };
    useEffect(() => {
        fetchGenres();    

        return () => {
            setGenres({});
        };
        // eslint-disable-next-line
    }, []);


    return (
        <div style={{ padding:"6px 0" }}>
            { selectedGenres && selectedGenres.map((genre)=> (
                <Chip label={genre.name} style={{margin:3}} size="small" color="primary" key={genre.id} clickable onDelete={()=>handleRemove(genre)} />
            ))}
            { genres && genres.map((genre)=> (
                <Chip label={genre.name} style={{margin:3}} size="small" key={genre.id} onClick={()=>handleAdd(genre)}  clickable/>
            ))}
        </div>
    );
};

export default Genres
