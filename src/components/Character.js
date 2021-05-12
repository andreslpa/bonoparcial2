const Character = (props) => {
    return(
        <div className="card">
            <img src = {props.thumbnail} alt={props.name}/>
            <div className="card-body"></div>
            <h2 className="card-title">{props.name}</h2>
            <p>{props.id}</p>
        </div>
    );
}
export default Character;