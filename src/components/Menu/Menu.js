import React, { Component } from 'react';

import { Menu as AntdMenu, Anchor } from 'antd';

import './Menu.css';
import { observer, inject } from 'mobx-react';

@observer
@inject('translationsStore')
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { translationsStore } = this.props;
    return (
      <AntdMenu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }} className="Menu">
        <AntdMenu.Item key="1">{translationsStore.translate('header.home')}</AntdMenu.Item>
        <AntdMenu.Item key="2">{translationsStore.translate('header.whoami')}</AntdMenu.Item>
        <AntdMenu.Item key="3">{translationsStore.translate('header.skills')}</AntdMenu.Item>
        <AntdMenu.Item key="4">{translationsStore.translate('header.education')}</AntdMenu.Item>
        <AntdMenu.Item key="5">{translationsStore.translate('header.testimonials')}</AntdMenu.Item>
        <AntdMenu.Item key="6">{translationsStore.translate('header.contact')}</AntdMenu.Item>
      </AntdMenu>
    );
  }
}

export default Menu;
