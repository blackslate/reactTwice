import React from 'react';


let instance = 0

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.startTime = + new Date()
    this.instance = ++instance
    this.state = {}
    this.imageError = this.imageError.bind(this)

    console.log("App constructor (", this.instance, ")", this.getTime())
  }


  getTime() {
    return + new Date() - this.startTime 
  }


  runTimeOutMethod() {
    console.log("runTimeOutMethod started (", this.instance, ")", this.getTime())
    this.setState({ time: true })
    console.log("runTimeOutMethod complete (", this.instance, ")",  this.getTime())
  }


  imageError(event) {
    console.log("DOM element added (", this.instance, ")", this.getTime())
  }


  render() {
    console.log(
      "render called (", this.instance, ")"
    ,  this.getTime()
    , this.state
    , this.props
    )

    return (
      <div className="App">
       <img src="" alt="no src" onError={this.imageError} />
      </div>
    );
  }


  componentDidMount() {
    console.log("componentDidMount started (", this.instance, ")", this.getTime())
    this.setState({ mounted: true })
    setTimeout(this.runTimeOutMethod.bind(this), 0)
    console.log("componentDidMount complete (", this.instance, ")", this.getTime())
  }
}
