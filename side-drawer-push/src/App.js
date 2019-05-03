import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  render() {
    return (
      <div>
        <SideDrawer />
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <main style={{ marginTop: '64px'}}>
            <p>This is the page content!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequatur ducimus dolores a consequuntur, reprehenderit impedit soluta, harum porro dolor nam qui suscipit temporibus unde iste culpa doloribus similique corporis labore mollitia. Praesentium, doloribus odio? Ea nemo neque, fuga vitae accusantium enim quibusdam maiores ab quos architecto perferendis quidem voluptates!
            </p>
            <p>This is the page content!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequatur ducimus dolores a consequuntur, reprehenderit impedit soluta, harum porro dolor nam qui suscipit temporibus unde iste culpa doloribus similique corporis labore mollitia. Praesentium, doloribus odio? Ea nemo neque, fuga vitae accusantium enim quibusdam maiores ab quos architecto perferendis quidem voluptates!
            </p>
            <p>This is the page content!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequatur ducimus dolores a consequuntur, reprehenderit impedit soluta, harum porro dolor nam qui suscipit temporibus unde iste culpa doloribus similique corporis labore mollitia. Praesentium, doloribus odio? Ea nemo neque, fuga vitae accusantium enim quibusdam maiores ab quos architecto perferendis quidem voluptates!
            </p>
            <p>This is the page content!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequatur ducimus dolores a consequuntur, reprehenderit impedit soluta, harum porro dolor nam qui suscipit temporibus unde iste culpa doloribus similique corporis labore mollitia. Praesentium, doloribus odio? Ea nemo neque, fuga vitae accusantium enim quibusdam maiores ab quos architecto perferendis quidem voluptates!
            </p>
            <p>This is the page content!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequatur ducimus dolores a consequuntur, reprehenderit impedit soluta, harum porro dolor nam qui suscipit temporibus unde iste culpa doloribus similique corporis labore mollitia. Praesentium, doloribus odio? Ea nemo neque, fuga vitae accusantium enim quibusdam maiores ab quos architecto perferendis quidem voluptates!
            </p>
          </main>
      </div>
    );
  } 
}

export default App;
