import "./Header.css"

const Header = () => {
    return (
        <>
            <span className="header" onClick={()=> window.scroll(0,0)} >🎬 MoviesHub 🎬</span>
        </>
    )
}

export default Header
