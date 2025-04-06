// import { MouseEvent } from "react";
// function ListGroup() {
//     let items = ["delhi", "hyderabad", "nalgonda", "goa"];
    
//     let selectedIndex = -1;
    
//     const handleClick = (event:MouseEvent ) => console.log(event)
//     return (
//         <>
//             <h1>List</h1>
//             { items.length === 0 && <p>No item found</p> }
//             <ul className="list-group">
//                 {items.map((item, index) => (
//                     <li className = { selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
//                     key={item} 
//                     onClick={handleClick}>
                        
//                         {item}
//                         </li>
//                 ))}
//             </ul>
//         </>
//     );
// }

// export default ListGroup;


import { useState } from "react";

interface Props{
    items: string[];
    heading: string;

    onSelectItem: (item: string)  => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1); // Initialize with -1 (no selection)

    const handleClick = (index: number) => {
        setSelectedIndex(index); // Update state on click
    };

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index)
                            onSelectItem(item);
                        }} // Pass index to handler
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;