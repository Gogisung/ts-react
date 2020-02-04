import * as React from 'react';
import { Component } from 'react';

interface State {
  first: number,
  second: number,
  value: string,
  result: string,
}

class GuGuDan extends Component<{}, State> {
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: '',
    result: '',
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(parseInt(this.state.value) === this.state.first * this.state.second) {

    }
  }


}

export default GuGuDan;