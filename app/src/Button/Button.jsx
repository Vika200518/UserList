


function Button({title,clickMe, backgroundColor}){
    return(
        <div>
            <button onClick={clickMe} style={{ backgroundColor:`${backgroundColor}`}}>{title}</button>
            
        </div>
    )
}
export default Button