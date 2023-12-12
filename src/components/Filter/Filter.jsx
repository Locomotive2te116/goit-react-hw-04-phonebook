import React from 'react';
import s from './Filter.module.css';
export class Filter extends React.Component {
  render() {
    const { filterState, changeFilter } = this.props;
    return (
      <label className={s.input}>
        Find contacts by name
        <input
          className={s.win}
          name="filter"
          value={filterState}
          onChange={event => changeFilter(event)}
          type="text"
          placeholder="Enter contact name"
        />
      </label>
    );
  }
}
