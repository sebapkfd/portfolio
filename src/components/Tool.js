const Tool = ({ item }) => {
    return (
        <div className='tool'>
            <img src={Object.values(item)[0]} alt=''/>
            <p>{Object.keys(item)[0]}</p>
        </div>
    )
}

export default Tool;