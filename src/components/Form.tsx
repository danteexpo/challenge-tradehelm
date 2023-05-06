import { Dispatch, SetStateAction, FormEvent } from 'react';

type FormProps = {
  toggleForm: (state: boolean) => void;
  handleForm: (e: FormEvent<HTMLFormElement>) => void;
  item: string;
  setItem: Dispatch<SetStateAction<string>>;
};

const Form = ({ toggleForm, handleForm, item, setItem }: FormProps) => {
  return (
    <div className="form-wrapper">
      <div className="background" onClick={() => toggleForm(false)}></div>
      <form onSubmit={handleForm}>
        <h2>Add item</h2>
        <input
          autoFocus={true}
          type="text"
          value={item}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setItem(e.currentTarget.value)
          }
        />
        <span>
          <button
            type="button"
            className="btn close-btn"
            onClick={() => toggleForm(false)}
          >
            Close
          </button>
          <button type="submit" className="btn add-btn">
            Add
          </button>
        </span>
      </form>
    </div>
  );
};
export default Form;
