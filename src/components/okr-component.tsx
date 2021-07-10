import React, { useState, useEffect } from 'react'
import DataConverter from '../utils/data-converter'
import DropDownComponent from './dropdown-component'
import LoadingComponent from './loading-component'

interface Okrs {
  id: string
  title: string
  category: string
  childs: Okrs[]
}

export default function OKRComponent() {
  const [okrs, setOkrs] = useState<Okrs[]>([])
  const [filters, setFilters] = useState<string[]>([])
  const [filteredOkrs, setFilteredOkrs] = useState<Okrs[]>([])

  useEffect(() => {
    fetch(`https://okrcentral.github.io/sample-okrs/db.json`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((response) => {
        const dataConverter = new DataConverter()
        const data = dataConverter.getTransformedData(response.data)
        const filtersData = dataConverter.getFilters(response.data)
        setOkrs(data)
        setFilteredOkrs(data)
        setFilters(filtersData)
       // throw new Error();
      })
    //  .catch((error) => console.log(error))
  }, [])

  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterSelected = event.target.value
    if (filterSelected !== 'All') {
      const filteredData = okrs.filter((d) => {
        return d.category === filterSelected
      })
      setFilteredOkrs(filteredData)
    } else {
      setFilteredOkrs(okrs)
    }
  }

  const options = filters.length > 0 ? filters.map((f) => <option key={f}>{f}</option>) : ''

  const rows = filteredOkrs.length > 0
      ? filteredOkrs.map((d) => <DropDownComponent data={d} key={d.id} />)
      : <LoadingComponent />

  return (
    <div className="okr-container">
      <div>
        <span className="filters-header">Filters: </span>
        <select onChange={changeHandler}>
          <option>All</option>
          {options}
        </select>
      </div>
      {rows}
    </div>
  )
}
