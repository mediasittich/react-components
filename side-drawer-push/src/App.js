import React, { Component } from 'react';

import SideDrawer from './components/SideDrawer/SideDrawer';
import ContentWrapper from './components/ContentWrapper/ContentWrapper';
import Navbar from './components/Navbar/Navbar';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div>
        <SideDrawer
          show={this.state.sideDrawerOpen}
        />
        
        <ContentWrapper
          show={this.state.sideDrawerOpen}
        >
        {backdrop}
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
        </ContentWrapper>
      </div>
    );
  } 
}

export default App;
