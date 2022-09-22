import './AvatarJsx.css';

const AvatarJsx = ({id, color, component}) => {

    const src = `https://randomuser.me/api/portraits/lego/${id}.jpg`

    return (
        <picture style={{ color: color }}>
            <img src={src} alt='avatar' style={{width: 200}} />
            { component }
        </picture>
    )
}

export default AvatarJsx;