import {useState} from 'react'
export default function ListGroup() {
    let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
    const [selectedIndex, setSelectedIndex] = useState(-1)


    return (
        <>        
            <h1>List</h1>
            {items.length === 0 ? <p>No item found</p> : null}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li 
                        key={index}
                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        onClick= {() => {setSelectedIndex(index)}}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}