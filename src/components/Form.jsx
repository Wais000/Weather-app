import { useContext } from 'react';
import MyContext from '../context/MyContext';

const Form = () => {
  const context = useContext(MyContext);
  const { search, setSearch } = context;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.firstChild.value);
  };

  return (
    <div className="search-box">
      <form onSubmit={onSubmitHandler}>
        <input type="text" id='input' placeholder='Type ...'/>
        <input type="submit" value="Search"/>
      </form>
    </div>
  );
};

export default Form;