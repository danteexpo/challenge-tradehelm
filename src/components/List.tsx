import { ListItem } from '../types';

type ListProps = {
  list: ListItem[];
  handleDelete: (id: number) => void;
};

const List = ({ list, handleDelete }: ListProps) => {
  return (
    <ul>
      {list &&
        list.map((item) => (
          <li key={item.id}>
            <span>{item.text}</span>
            <button
              className="delete-btn"
              onClick={() => handleDelete(item.id)}
            >
              delete
            </button>
          </li>
        ))}
    </ul>
  );
};
export default List;
