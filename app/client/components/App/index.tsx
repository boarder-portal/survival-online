import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

interface IAppProps {
  color: string
}

export default class App extends React.Component<IAppProps, {}> {
  render() {
    const { color } = this.props;

    return (
      <React.Fragment>
        <div>{color}</div>

        <Switch>
          <Route exact path="/login" render={() => <div>Login here</div>} />
          <Route exact path="/game" render={() => <div>Play here</div>} />
        </Switch>
      </React.Fragment>
    );
  }
}


