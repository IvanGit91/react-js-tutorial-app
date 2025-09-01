// Writing markup with JSX
// JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags.
// You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

export default function Profile() {
    return (
        <>
            <h2>{user.name}</h2>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}
