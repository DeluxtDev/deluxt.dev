import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hooks to manage the state of the component
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Render the component
  return (
    <>
      <h1>{heading}</h1>
      {!items.length ? (
        <p>No Item Found!</p>
      ) : (
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
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

// Export the component
export default ListGroup;
