import React from 'react';
import styled from 'styled-components';
import MemoEditor from './editor';
import Context from '../../context';

const StyledWrapper = styled.div`
  position: relative;
  border-radius: 30px;
  background-color: white;
  border: 1px solid gray;
  width: 100%;
  height: 100%;
`;

class Board extends React.Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.boardRef = React.createRef();

    this.state = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      drag: false,
    }
    this.onChange = editorState => this.setState({ editorState });
  }

  componentDidMount() {
  //   panzoom(this.boardRef.current, {
  //     maxZoom: 1.01,
  //     minZoom: 1,
  //     bounds: true,
  //   });
  }

  onMouseDown = e => {
    if (!this.context.isEdit) return;
    const { pageX: x, pageY: y } = e;
    const rect = this.boardRef.current.getBoundingClientRect();
    const newX = x - rect.left;
    const newY = y - rect.top;
    this.setState({
      x: newX,
      y: newY,
      width: 0,
      height: 0,
      drag: true, 
    });

  }

  onMouseMove = e => {
    if (!this.context.isEdit) return;
    const { clientX: x, clientY: y } = e;
    const { x: prevX, y: prevY, drag } = this.state;
    if (!drag) return;
    const rect = this.boardRef.current.getBoundingClientRect();
    const newX = x - rect.left;
    const newY = y - rect.top;

    const width = Math.round((newX - prevX) / 25) * 25;
    const height = Math.round((newY - prevY) / 25) * 25;

    this.setState({ width, height });
  }

  onMouseUp = e => {
    if (!this.context.isEdit) return;
    this.setState({ drag: false });
    this.context.setAdd(false);
  }

  cancel = () => {
    this.setState({ width: 0, height: 0 });
  }

  render() {
    const { x, y, width, height, drag } = this.state;

    return (
      <StyledWrapper ref={this.boardRef} onMouseDown={this.onMouseDown} onMouseMove={this.onMouseMove} onMouseUp={this.onMouseUp}> 
        <MemoEditor x={x} y={y} width={width} height={height} drag={drag} cancel={this.cancel}/>
      </StyledWrapper>
    )
  }
}

export default Board;
