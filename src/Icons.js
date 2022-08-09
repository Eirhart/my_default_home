import './Icons.css'

const Icons = () => {
  return (
    <div className='icons'>
        <a className="anemo icon" href="https://gogoanime.gg/">
        <img src={require("./img/anemo.png")} width="100px" height="100px" alt="" />
        </a>

        <a className="electro icon" href="https://mangakatana.com/bookmarks">
        <img src={require("./img/electro.png")} width="100px" height="100px" alt="" />
        </a>

        <a className="pyro icon" href="https://www.reddit.com/r/Genshin_Impact_Leaks/new/">
        <img src={require("./img/pyro.png")} width="100px" height="100px" alt="" />
        </a>

        <a className="cryo icon" href="https://www.facebook.com/">
        <img src={require("./img/cryo.png")} width="100px" height="100px" alt="" />
        </a>
    </div>
  )
}

export default Icons