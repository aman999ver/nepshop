const UserAvatar = (props)=>{
    return(
        <div className={`userImg ${props.lg===true && 'lg'}`}>
            <span className="rounded-circle">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
            </span>
        </div>

    );
}

export default UserAvatar;