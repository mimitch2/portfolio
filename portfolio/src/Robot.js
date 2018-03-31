import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';

const languages = ['ar', 'az', 'bg', 'bn', 'bs', 'cs', 'da', 'de', 'dz', 'el', 'en', 'en-gb', 'en-us', 'es', 'et', 'fa', 'fi', 'fil', 'fr', 'he', 'hi', 'hr', 'hu', 'hy', 'id', "is", 'it', 'ka', 'kk', 'km', 'ko', 'lo', 'lt', 'lv', 'mk', 'mn', 'ms', 'my', 'ne', 'no', 'ro', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'sq', 'sr', 'sv', 'sw', 'th', 'tk', 'uk', 'vi', 'zh']

const style = {
  hide: {
    display: 'none'
  },
  show: {
    display: 'inline'
  }
}

class Robot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      userInput: '',
      returnedRobot: '',
      robotName: '',
      greeting: '',
      cssStyle : style.hide
    };
  }


  getInput=(e)=>{
    const tempInput = e.target.value
    this.setState({userInput: tempInput})
    return true
  }

    getNewRobot=()=>{
      this.setState({
        returnedRobot: `https://robohash.org/${this.state.userInput}.png`,
        robotName: this.state.userInput,
        userInput: ''
      });
      this.fetchGreeting()
    }

    fetchGreeting=()=>{
      const languageCode = languages[Math.floor((Math.random() * languages.length-1))]
      console.log(languageCode);
      fetch(`https://fourtonfish.com/hellosalut/?lang=${languageCode}`)
        .then(res => res.json())
        .then(
          (word) => {
            this.setState({
              isLoaded: true,
              greeting: this.getNewWord(word),
              cssStyle: style.show
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }


    getNewWord=(input)=>{//this parses and translates the character codes for non-arabic languages
      if(!input.hello.search("&")){
        const newWord = input.hello.replace(/&/g, "").replace(/#/g, "").replace(/;/g, ",").split(',').map(Number)
        const translatedWord = String.fromCharCode(...newWord);
        console.log(translatedWord, typeof(translatedWord));
        return translatedWord
      }else{
        const otherNewWord = input.hello.replace(/&/g, "").replace(/#/g, "").replace(/;/g, "")
        return otherNewWord
      }
    }


      buttonState=()=>{
        if(!this.state.userInput){
          return true
        }else{
          return false
        }
      }

      render() {
        return (
          <div className = 'robot-wrapper'>
            <div className="robot">

              <img src={this.state.returnedRobot} style= {{width: '300px', heigth: '300px'}} alt="" />
              <h2 className = "greeting-text" style={this.state.cssStyle}>{this.state.greeting} fren. I am {this.state.robotName}.</h2>

              <form onSubmit={(e)=>{if (this.state.userInput.length > 0)this.getNewRobot();
                e.preventDefault()}}> <TextField
                  style={{fontSize: '18px'}}
                  type="text"
                  hintText="Type any name"
                  value={this.state.userInput}
                  onChange={this.getInput} underlineFocusStyle={{borderBottom: "2px solid rgba(84, 115, 115, .8)"}} fullWidth={false}/></form>

              <RaisedButton label="Get robot"  onClick = {this.getNewRobot} style={{fontSize:'18px', width: "256px"}} disabled={this.buttonState()}/>

            </div>
            <h3 className="robot-announce"><i className="fa fa-arrow-left"></i>&nbsp;&nbsp;Do you want robots? Because this is how you get robots.</h3>

          </div>);
      }
}

export default Robot;
