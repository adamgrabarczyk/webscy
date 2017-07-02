import React from 'react'
import { Grid } from 'react-bootstrap'

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
                        <Grid>
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
                                  <img src="/price.ico" alt="" className="event-icon"/>
                                  {' '}
                                  {
                                      eventt ?
                                          eventt.Price + ' zł' :
                                          null
                                  }
                              </li>
                              <li>
                                  <img src="/local.png" alt="" className="event-icon"/>
                                  {' '}
                                  {
                                      eventt ?
                                          eventt.Place :
                                          null
                                  }
                              </li>
                              <li>
                                  <img src="/kalendarz.png" alt="" className="event-icon"/>
                                  {' '}
                                  {
                                      eventt ?
                                          eventt.Date :
                                          null
                                  }
                              </li>
                                      </ul>

                          </div>
                        </Grid>
                    )
                  }
    }

export default Event