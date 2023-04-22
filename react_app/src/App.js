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

export default App;
