import React from 'react'
import { FormGroup, FormControl,
    ButtonGroup, Button,
Dropdown, MenuItem, ButtonToolbar} from 'react-bootstrap'





    class Filter extends React.Component {
      render() {
          const {
              FilterUpdate,
              searchUpdate,
              search
          } = this.props



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

                <div style={{ padding: '10px 0' }}>
                    <ButtonToolbar>
                    <Dropdown id="dropdown-custom-2">
                        <Button bsStyle="info">
                          Wybierz  Miasto
                        </Button>
                        <Dropdown.Toggle bsStyle="success"/>
                        <Dropdown.Menu className="super-colors">
                            <MenuItem eventKey="1" onClick={
                                () => FilterUpdate('city_gdansk', true)}>Gdańsk</MenuItem>
                            <MenuItem eventKey="2" onClick={
                                () => FilterUpdate('city_gdynia', true)}>Gdynia</MenuItem>
                            <MenuItem eventKey="3" onClick={
                                () => FilterUpdate('city_sopot', true)}>Sopot</MenuItem>
                            </Dropdown.Menu>
                    </Dropdown>
                    </ButtonToolbar>
                          {' '}
                          <ButtonGroup>
                            <Button onClick={
                                () => FilterUpdate('type_kino', true)
                            }>Kino</Button>
                            <Button onClick={
                                () => FilterUpdate('type_koncert', true)}>Koncert</Button>
                              <Button onClick={
                                  () => FilterUpdate('type_kultura', true)}>Kultura</Button>
                              <Button onClick={
                                  () => FilterUpdate('type_clubbing', true)}>Clubbing</Button>
                              <Button onClick={
                                  () => FilterUpdate('type_sport', true)}>Sport</Button>
                          </ButtonGroup>
                        </div>
      </form>


                    )
                  }
    }

export default Filter