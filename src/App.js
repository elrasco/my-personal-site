import React, { Component } from 'react';

import { Layout } from 'antd';

import './App.css';

import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <Layout className="App">
        <Layout.Header>
          <Menu />
        </Layout.Header>
        <Layout.Content>Content</Layout.Content>
      </Layout>
    );
  }
}

export default App;
