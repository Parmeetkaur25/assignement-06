 const numbers = [1,2,3,4];

function Num() {
return(
    <>
    {numbers.map((ele) => {
       return <h1> Value: {ele}</h1>
    })}
    </>
)
}

export default Num