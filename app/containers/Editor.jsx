import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getText } from '../reducers';
import * as actions from '../actions';

class EditorContainer extends Component {
  static outputElement(str, positions = {}) {
    const { openRight, closeLeft, closeRight } = positions;
    const content = str.substr(openRight + 1, closeLeft - openRight - 1);
    switch (str.substr(0, openRight + 1)) {
      case '<h>':
        if (str.substr(closeLeft, closeRight) !== '</h>') return '';
        return <h2>{content}</h2>;
      case '<b>':
        return <strong>{content}</strong>;
      case '<i>':
        return <em>{content}</em>;
      case '<p>':
        return <pre>{content}</pre>;
      default:
        return '';
    }
  }

  static parseText(text) {
    const output = [];
    let openLeft = false; // first <
    let openRight = false; // first >
    let closeLeft = false; // second </
    let closeRight = false; // second >

    for (let i = 0; i < text.length; i += 1) {
      switch (text[i]) {
        case '<':
          if (openLeft !== false) {
            closeLeft = i;
          } else {
            openLeft = i;
          }
          break;
        case '>':
          if (text[closeLeft + 1] === '/') {
            closeRight = i;
            if (openLeft < openRight < closeLeft < closeRight) {
              const str = text.substr(openLeft, closeRight - (openLeft - 1));
              const positions = {
                openRight: openRight - openLeft,
                closeLeft: closeLeft - openLeft,
                closeRight: closeRight - openLeft,
              };
              output.push(EditorContainer.outputElement(str, positions));
              openLeft = false;
              openRight = false;
              closeLeft = false;
              closeRight = false;
            }
          } else {
            openRight = i;
          }
          break;
        default:
          break;
      }
    }
    return output;
  }

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { updateText } = this.props;
    const value = e.target.value;
    updateText(value);
  }

  render() {
    const text = EditorContainer.parseText(this.props.text);
    return (
      <div>
        <textarea
          style={{ width: '400px' }}
          onChange={this.handleChange}
          rows="20"
        />
        {text}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: getText(state),
});

const Editor = connect(mapStateToProps, actions)(EditorContainer);

export default Editor;
