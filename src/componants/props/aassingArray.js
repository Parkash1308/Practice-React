const Fruits =(fruits) =>{
    return (
        <>
            {
                fruits.map(item=>{
                    return <div key={item}>
                        {item}
                    </div>
                })
            }
        </>

    )
}
export default Fruits