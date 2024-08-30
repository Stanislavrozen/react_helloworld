import React from 'react'

const SortSelect = ({ fields, value, onChange }) =>
{
    return (
        <select value={value} onChange={ev => onChange(ev.target.value)}>
            <option value="value">Сортировка</option>
            {
                fields.map(f => <option key={f} value={f} >{f}</option>)
            }
        </select>
    )
}

export default SortSelect