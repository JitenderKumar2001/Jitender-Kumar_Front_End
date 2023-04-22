//Please fix, optimize, and/or modify the component as much as you think is necessary.

//updated code:
//Follow the react_app folder for complete react code.

import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red', listStyle: 'none',padding: '5px 10px', border: '1px solid black'}}
      onClick={() => onClickHandler(index)}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

const WrappedListComponent = ({
  items,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <SingleListItem
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex === index}
        />
      ))}
    </ul>
  )
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
};

WrappedListComponent.defaultProps = {
  items: null,
};

const List = memo(WrappedListComponent);

export default List;

// also add props while using list component as:

import './App.css';
import List from './List';

function App() {
  const myListItems = [
    { text: 'Jitender Kumar' },
    { text: 'Front-end web developer' },
    { text: 'ReactJS' },
    { text: 'Javascript'},
    { text: 'Material-UI'},
    { text: 'Figma'},
  ];
  return (
    <div className="App">
      <List items={myListItems} />
    </div>
  );
}