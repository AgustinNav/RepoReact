import './AvatarJsx.css';

const AvatarJsx = () => {
    const src = 'https://randomuser.me/api/portraits/lego/2.jpg'

    return(
        <picture style = {{color: 'red'}}>
            <img src={src} alt='avatar'/>
            Andres
        </picture>
    )
}

export default AvatarJsx;