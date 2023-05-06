import { FormEvent, useState } from 'react';
import { ListItem } from './types';
import List from './components/List';
import Form from './components/Form';

function App() {
  const [viewForm, toggleForm] = useState(false);
  const [list, setList] = useState<ListItem[]>([]);
  const [item, setItem] = useState('');

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item !== '') {
      setList((list) => [
        ...list,
        {
          id: Math.random(),
          text: item,
        },
      ]);
    }
    setItem('');
  };

  const handleDelete = (id: number) => {
    setList((list) => list.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <main>
        <h1>Supermarket list</h1>
        <p>{list.length} item(s)</p>
        <List list={list} handleDelete={handleDelete} />
        <button className="btn add-btn" onClick={() => toggleForm(true)}>
          Add item
        </button>
      </main>
      {viewForm && (
        <Form
          toggleForm={toggleForm}
          handleForm={handleForm}
          item={item}
          setItem={setItem}
        />
      )}
    </div>
  );
}

export default App;
