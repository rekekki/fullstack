import React from 'react'

const FilterPerson = (props) => {
    return (
        <form>
            Filter content shown
            <input
                value={props.newSearch}
                onChange={props.handleSearchChange} />
                <br />
        </form>
    )
}

export default FilterPerson