import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

//views
import Home from './js/views/Home'
import Room from './js/views/Room'
import RoomDetail from './js/views/RoomDetail'

const routes = [
  {
    Component: Home,
    path: 'hotel-booking',
    id: '1'
  },
  {
    Component: Room,
    path: 'room',
    id: '2'
  },
  {
    Component: RoomDetail,
    path: 'room/:id',
    id: '3'
  }
]

function App(props) {
  const { history } = props

  const handleRoutes = roomId => {
    return roomId ? history.push(`room/${roomId}`) : history.push(`room`)
  }
  return (
    <div className='app'>
      <Switch>
        {routes.map(route => {
          return <Route
            sensitive
            exact
            path={`/${route.path}`}
            key={route.id}
            component={props => (
              <route.Component handleRoutes={handleRoutes} {...props} />
            )}
          ></Route>
        })}
        <Redirect push from='/' to='/hotel-booking'></Redirect>
      </Switch>
    </div>
  )
}

export default withRouter(App)
