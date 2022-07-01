import { img_300, unavailable } from "../../config/config";
import { Badge } from "@material-ui/core";
import './SingleContent.css'
import ContentModel from "../ContentModel/ContentModel";



const SingleContent = ({id,poster,title,date,media_type,vote_average}) => {
    return (
        
        <ContentModel media_type={media_type} id={id}>
            <Badge badgeContent={vote_average} color={vote_average>7 ? 'primary' : 'secondary'}></Badge>
            <img className="poster" src={ poster? `${img_300}/${poster}` : unavailable } alt={title}/>
            <b className="title">{title}</b>
            <span className="subtitle">
                {media_type==='tv' ? "TV Series" : "Movie"}
                <span className="subtitle">{date}</span>
            </span>
        </ContentModel>
    )
}

export default SingleContent
