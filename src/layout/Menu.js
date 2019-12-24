import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";

function ListItemLink(props) {
  const { primary, to, selected } = props;
  const link = React.forwardRef((props, ref) => <Link to={to} {...props} />);

  return (
    <ListItem selected={selected} button component={link}>
      <ListItemText primary={primary} />
    </ListItem>
  );
}
export default function Menu() {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <List>
        <div onClick={event => handleListItemClick(event, 0)}>
          <ListItemLink selected={selectedIndex === 0} to="/technology" primary="Technology"></ListItemLink>
        </div>
        <Divider />
        <div onClick={event => handleListItemClick(event, 1)}>
          <ListItemLink selected={selectedIndex === 1} to="/entertainment" primary="Entertainment"></ListItemLink>
        </div>
        <Divider />
        <div onClick={event => handleListItemClick(event, 2)}>
          <ListItemLink selected={selectedIndex === 2} to="/general" primary="General"></ListItemLink>
        </div>
        <Divider />
        <div onClick={event => handleListItemClick(event, 3)}>
          <ListItemLink selected={selectedIndex === 3} to="/health" primary="Health"></ListItemLink>
        </div>
        <Divider />
        <div onClick={event => handleListItemClick(event, 4)}>
          <ListItemLink selected={selectedIndex === 4} to="/science" primary="Science"></ListItemLink>
        </div>
        <Divider />
        <div onClick={event => handleListItemClick(event, 5)}>
          <ListItemLink selected={selectedIndex === 5} to="/sports" primary="Sports"></ListItemLink>
        </div>
        <Divider />
        <div onClick={event => handleListItemClick(event, 6)}>
          <ListItemLink selected={selectedIndex === 6} to="/business" primary="Business"></ListItemLink>
        </div>
        <Divider />
      </List>

    </div>
  )
}
