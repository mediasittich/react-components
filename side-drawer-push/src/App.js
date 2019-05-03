import React, { Component } from 'react';

import PageWrapper from './components/PageWrapper/PageWrapper';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
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
  };

  drawerCloseClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <PageWrapper>
      <div style={{ height: '100%' }}>
        
        <SideDrawer 
          show={this.state.sideDrawerOpen} 
          drawerCloseClickHandler={this.drawerCloseClickHandler}
        />
        {backdrop}

        {/* Part of page that will be pushed aside by side drawer */}
        <Toolbar 
          show={this.state.sideDrawerOpen} 
          drawerClickHandler={this.drawerToggleClickHandler} 
        />
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
        {/* Part of page that will be pushed aside by side drawer */}
      </div>
      </PageWrapper>
    );
  }
}

export default App;
