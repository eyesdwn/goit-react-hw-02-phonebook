import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ( { onChangeFilter}) => {
    return (
        <label>
            Find contacts by name
            <input
                className={styles.filter}
                type="text"
                name="filter"
                onChange={onChangeFilter}
            />
        </label>
    );
}


Filter.propTypes = {
    onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;