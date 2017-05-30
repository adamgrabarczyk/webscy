import React from 'react'
// import { Table } from 'react-bootstrap'

    class Event extends React.Component {

      constructor(props) {
                super(props)

                this.state = {
                      events: []
                }

                    fetch(
                          process.env.PUBLIC_URL + '/data/events.json'
                        ).then(
                          response => response.json()
                ).then(
                      events => this.setState({
                        events: events
                  })
                )
              }

      render() {
                console.log(this.props.match, this.state)

                const eventtId = parseInt(this.props.match.params.eventtId, 10)
                    const eventt = this.state.events.find(
                      eventt => eventt.id === eventtId
                )

                    return (
                      <div>
                            <h1>

                              {' '}
                              {
                                eventt ?
                                      eventt.Name :
                                      null
                                  }
                            </h1>
                          <ul>
                              <li>
                                  Cena:
                                  {' '}
                                  {
                                      eventt ?
                                          eventt.Price + ' zł' :
                                          null
                                  }
                              </li>
                              <li>
                                  Gdzie?:
                                  {' '}
                                  {
                                      eventt ?
                                          eventt.Place :
                                          null
                                  }
                              </li>
                                      </ul>

                          </div>
                    )
                  }
    }

export default Event