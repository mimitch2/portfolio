import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

const paperStyle = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class MainPaper extends Component {


  render() {
    return (<div className="paper-div">
      <MuiThemeProvider>
        <Paper style={paperStyle} zDepth={3} />
      </MuiThemeProvider>
    </div>);
  }
}

export default MainPaper;
