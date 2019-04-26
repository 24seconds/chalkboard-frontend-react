import React from 'react';
import styled from 'styled-components';
import { Editor, EditorState } from 'draft-js';

const StyledWrapper = styled.div`
  position: absolute;
  background-color: gray;
  top: ${props => `${props.y - 30}px`};
  left: ${props => `${props.x - 15}px`};
  width: ${props => `${props.width + 20}px`};
  height: ${props => `${props.height + 60}px`};
  border: 5px solid gray;
  border-radius: 10px;
  display: ${props => `${props.display === 1 ? 'flex' : 'none'}`};
  flex-direction: column;
  justify-content: space-between;
  & > div:first-child {
    display: flex;
    justify-content: flex-end;
    padding: 3px;
  }
  & > div:last-child {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 10px;
  }
`;

const SomeDiv = styled.div`
  position: absolute;
  overflow: auto;
  top: ${props => `${props.y}px`};
  left: ${props => `${props.x}px`};
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  ${props => props.drag || 'background-color: rgba(0%, 69.8%, 86.6%, 0.5)'};
  ${props => props.drag && 'border: 1px solid black'};
`;

class MemoEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    }
    this.onChange = editorState => this.setState({ editorState });
  }

  componentDidUpdate(prevProps) {
    if(prevProps.drag !== this.props.drag) {
      this.setState({ editorState: EditorState.createEmpty() });
    }
  }
  render() {
    const { x, y, width, height, drag, cancel } = this.props;

    return (
      <React.Fragment>
        <StyledWrapper x={x} y={y} width={width} height={height} display={(!drag && width && height) ? 1 : 0}>
          <div>
            <button>set</button>
          </div>
          <div>
            <button width="50px">Save</button>
            <button onClick={cancel}>Cancel</button>
          </div>
        </StyledWrapper>
        <SomeDiv x={x} y={y} width={width} height={height} drag={drag} >
          <Editor editorState={this.state.editorState} onChange={this.onChange} />
        </SomeDiv>
      </React.Fragment>
    );
  }
}

export default MemoEditor;
