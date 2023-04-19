const Person =(props)=>{
    return (
        <>
        <h1>The below content is diplayed as prop object that is passed to person componant</h1>
            <h1>Hello My name is {props.name} </h1>
            <h2>I am  {props.age} years old </h2>
            <h3>Iam from {props.address} </h3>
            <h4>I am {props.education}  student</h4>
        </>
    );
}

export  default Person;