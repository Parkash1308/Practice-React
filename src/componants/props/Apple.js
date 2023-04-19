import '../../../src/index.css'
const Apple =(props) =>{
    return (
        <>
            <div>
            <h2>
                The color of apples is {props.color}
            </h2>
            <h3>There are {props.number} apples.</h3>

            </div>
        </>
    )
}
export default Apple