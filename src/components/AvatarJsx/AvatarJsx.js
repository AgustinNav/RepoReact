import './AvatarJsx.css';

const AvatarJsx = ({id, color, nombre}) => {

    const src = `https://randomuser.me/api/portraits/lego/${id}.jpg`

    return (
        <picture style={{ color: color}}>
            <img src={src} alt='avatar' style={{width: 200}} />
            <h1>{nombre}</h1>
        </picture>
    )
}

export default AvatarJsx;