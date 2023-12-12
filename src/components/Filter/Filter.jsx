import s from './Filter.module.css';

export const Filter = ({ filterState, changeFilter }) => {
  return (
    <label className={s.input}>
      Find contacts by name
      <input
        className={s.win}
        name="filter"
        value={filterState}
        onChange={changeFilter}
        type="text"
        placeholder="Enter contact name"
      />
    </label>
  );
};
