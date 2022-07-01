const useGenres = (selectedGenres) => {
    if(selectedGenres.length < 1) 
        return "";

const genreids = selectedGenres.map((g)=> g.id);
return genreids.reduce((acc,curr)=>acc+','+curr);

}

export default useGenres;