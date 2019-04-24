import React from 'react';
import styled from 'styled-components';
import panzoom from 'panzoom';

const StyledWrapper = styled.div`
  position: relative;
  border-radius: 30px;
  background-color: white;
  border: 1px solid gray;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const SomeDiv = styled.div`
  position: absolute;
  top: ${props => `${props.y}px`};
  left: ${props => `${props.x}px`};
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  ${props => props.drag || 'background-color: red'};
  ${props => props.drag && 'border: 1px solid black'};
`;

class Board extends React.Component {
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
  }

  componentDidMount() {
  //   panzoom(this.boardRef.current, {
  //     maxZoom: 1.01,
  //     minZoom: 1,
  //     bounds: true,
  //   });
  }

  onMouseDown = e => {
    const { pageX: x, pageY: y } = e;
    this.setState({x, y, width: 0, height: 0, drag: true});

  }

  onMouseMove = e => {
    const { pageX: x, pageY: y } = e;
    const { x: prevX, y: prevY, drag } = this.state;
    if (!drag) return;
    const width = x - prevX;
    const height = y - prevY;
    this.setState({ width, height });
  }

  onMouseUp = e => {
    this.setState({ drag: false });
  }

  render() {
    const { x, y, width, height, drag } = this.state;
    return (
      <StyledWrapper ref={this.boardRef} onMouseDown={this.onMouseDown} onMouseMove={this.onMouseMove} onMouseUp={this.onMouseUp}> 
          <SomeDiv ref={elem => this.nv = elem} x={x} y={y} width={width} height={height} drag={drag}/>
      </StyledWrapper>
    )
  }
}

export default Board;
