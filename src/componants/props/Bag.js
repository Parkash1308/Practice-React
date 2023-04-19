import '../../../src/index.css'
const Bag = (props) => {
    const bag = {
        padding: "20px",
        background: "#fff",
        margin: "20px 0"
    }
    return (
        <>
            <div style={bag}>
                <h1>
                    This section explain that how to pass props.children

                </h1>
            {props.children}
          
            </div>          
        </>
    )
}

export default Bag