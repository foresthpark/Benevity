import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import "./leftmenu.css"

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const {classes} = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {/*{['Top Rated', 'Currently Showing', 'Another Menu', 'Yet One More Menu'].map((text, index) => (*/}
          {/*<ListItem button key={text}>*/}
          {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>*/}
          {/*<a href="https://google.com"><ListItemText primary={text}/></a>*/}
          {/*</ListItem>*/}
          {/*))}*/}
          <a className="menulinks" href="https://google.com"><ListItem button={true}><ListItemText
            primary="Hello, is it me?"/></ListItem></a>
          <a className="menulinks" href="https://google.com"><ListItem button={true}><ListItemText
            primary="You're looking for?"/></ListItem></a>
        </List>
        < Divider/>
        < List>
          {['All Stuff', 'Is this Correct?', 'I have no Idea'
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          ))
          }
        </List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);