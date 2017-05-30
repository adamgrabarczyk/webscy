import React from 'react'
import { FormGroup, FormControl,
    ButtonGroup, Button,
Dropdown, MenuItem, ButtonToolbar} from 'react-bootstrap'


    class Filter extends React.Component {
      render() {
                return (
                      <form>
                            {/*<div>*/}
                              {/*<input value={this.props.search} onChange={*/}
                                  {/*this.props.searchUpdate*/}
                              {/*} />*/}
                            {/*</div>*/}


                          <FormGroup>
                                          <FormControl
                                            type="text"
                                            value={this.props.search}
                                            placeholder="Enter text"
                                            onChange={this.props.searchUpdate}
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
                            <MenuItem eventKey="1">Gdańsk</MenuItem>
                            <MenuItem eventKey="2">Gdynia</MenuItem>
                            <MenuItem eventKey="3" active>Sopot</MenuItem>
                            </Dropdown.Menu>
                    </Dropdown>
                    </ButtonToolbar>
                          {' '}
                          <ButtonGroup>
                            <Button>Kino</Button>
                            <Button>Koncert</Button>
                              <Button>Kultura</Button>
                              <Button>Clubbing</Button>
                              <Button>Sport</Button>
                          </ButtonGroup>
                        </div>
      </form>


                    )
                  }
    }

export default Filter