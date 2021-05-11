const Character = (props) => {
    return(
        <div>
            <h2>{props.name}</h2>
            <img src = {props.thumbnail} alt={props.name}/>
        </div>
    );
}