import React from 'react'
import { Route, NavLink } from 'react-router-dom'

export default function Food({ match }) {
    return (
        <div>
            <div >
                What do you want in food part
          <ul>
                    <li>
                        <NavLink activeClassName="active" to={`${match.url}/pizza`}> Pizza
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to={`${match.url}/pasta`}> Pasta
                         </NavLink>
                    </li>

                </ul>
                <Route path={`${match.url}/:new`} render={() => "You selected :"}>
                </Route>
                <Route path={`${match.url}/:new`} component={Topic}>

                </Route>
            </div>
        </div>
    )
}

const Topic = ({ match }) => {
    return <div>
        <h3>  {match.params.new} </h3>
    </div>
}