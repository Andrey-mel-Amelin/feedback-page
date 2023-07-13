import { Component } from 'react';
import './Clock.scss'

type State = {
  date: Date;
};

class Clock extends Component<{}, State> {
  private timerID: number;

  constructor(props: any) {
    super(props);
    this.timerID = 0;
  }

  state = {
    date: new Date(),
  };

  componentDidMount(): void {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleTime(time: number) {
    if (time < 10) {
      return `0${time}`
    } else {
      return time
    }
  }

  render() {
    const hours = this.handleTime(this.state.date.getHours())
    const minutes = this.handleTime(this.state.date.getMinutes())
    const seconds = this.handleTime(this.state.date.getSeconds());

    return <div className="clock">{`${hours}:${minutes}:${seconds}`}</div>;
  }
}

export default Clock;
