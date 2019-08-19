import React from 'react';
import { FixedSizeList as List } from "react-window";

const height = 35;
const maxHeight = 60;

class MenuList extends React.Component {
  render() {
    const { children, maxHeight } = this.props;
    console.log(children.length);
   
    return (
      <List
        height={maxHeight}
        itemCount={children.length}
        itemSize={height}
      >
        {({ index, style }) => <div style={style}>{children[index]}</div>}
      </List>
    );
  }
}

export default MenuList;
