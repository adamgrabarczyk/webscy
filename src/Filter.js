import React from 'react'
import {
    FormGroup, FormControl,
    ButtonGroup, Button,
    Dropdown, MenuItem, ButtonToolbar
} from 'react-bootstrap'


const typeFilters = [
    {
        name: 'type_kino',
        label: 'Kino',
    },
    {
        name: 'type_koncert',
        label: 'Koncert',
    },
    {
        name: 'type_kultura',
        label: 'Kultura',
    },
    {
        name: 'type_clubbing',
        label: 'Clubbing',
    },
    {
        name: 'type_sport',
        label: 'Sport',
    },

]

const cityFilters = [

    {
        name: 'city_gdansk',
        label: 'Gdańsk',
    },
    {
        name: 'city_gdynia',
        label: 'Gdynia',
    },
    {
        name: 'city_sopot',
        label: 'Sopot',
    },

]


class Filter extends React.Component {
    render() {
        const {
            FilterUpdate,
            searchUpdate,
            search,
            activeFilter,
            resetFilter
        } = this.props

        const selectedCityFilter = cityFilters.find(
            item => activeFilter.includes(item.name)
        )

        const selectedTypeFilter = typeFilters.find(
            item => activeFilter.includes(item.name)
        )

        return (
            <form>
                <FormGroup>
                    <FormControl
                        type="text"
                        value={search}
                        placeholder="Czego szukasz?"
                        onChange={searchUpdate}
                    />
                </FormGroup>

                <div style={{padding: '10px 0'}}>
                    <ButtonToolbar>
                        <Dropdown id="dropdown-custom-2">
                            <Button bsStyle="info">
                                {selectedCityFilter !== undefined ? selectedCityFilter.label : 'Wybierz Miasto'}
                            </Button>
                            <Dropdown.Toggle bsStyle="success"/>
                            <Dropdown.Menu className="super-colors">
                                {
                                    cityFilters.map(
                                        filter => {
                                            const isActive = activeFilter.includes(filter.name)
                                            return (
                                                <MenuItem eventKey="1" key={filter.name} active={isActive} onClick={
                                                    () => FilterUpdate(filter.name, !isActive)}>{filter.label}</MenuItem>)
                                        }
                                        )
                                }
                                <MenuItem divider/>
                                <MenuItem eventKey="4" onClick={resetFilter}>Wszystko</MenuItem>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ButtonToolbar>
                    {' '}
                    <ButtonToolbar>
                        <Dropdown id="dropdown-custom-3">
                            <Button bsStyle="info">
                                {selectedTypeFilter !== undefined ? selectedTypeFilter.label : 'Wybierz Kategorie'}
                            </Button>
                            <Dropdown.Toggle bsStyle="success"/>
                            <Dropdown.Menu>
                                {
                                    typeFilters.map(
                                        filter => {
                                            const isActive = activeFilter.includes(filter.name)
                                            return (
                                                <MenuItem eventKey="1" keu={filter.name} active={isActive} onClick={
                                                    () => FilterUpdate(filter.name, !isActive)}>{filter.label}</MenuItem>)
                                        })}
                                <MenuItem divider/>
                                <MenuItem eventKey="4" onClick={resetFilter}>Wszystko</MenuItem>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ButtonToolbar>
                </div>


            </form>


        )
    }
}

export default Filter