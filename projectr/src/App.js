import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [isDescending, setIsDescending] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const toggleOrderHandler = useCallback(() => {
    setIsDescending((prevIsDescending) => !prevIsDescending);
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return isDescending ? [...listItems].sort((a, b) => b - a) : listItems;
  }, [isDescending, listItems]);

  return (
    <div className="app">
      <DemoList title={listTitle} items={sortedList} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={toggleOrderHandler}>
        Change to {isDescending ? 'Ascending' : 'Descending'} Order
      </Button>
    </div>
  );
}

export default App;