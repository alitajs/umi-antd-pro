import React, { Component } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import { Input } from 'antd';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

@connect()
export default class SearchList extends Component {
  handleTabChange = key => {
    const { dispatch, match } = this.props;
    
    switch (key) {
      case 'Search/Articles':
        dispatch(routerRedux.push(`${match.url}/Search/Articles`));
        break;
      case 'Search/Applications':
        dispatch(routerRedux.push(`${match.url}/Search/Applications`));
        break;
      case 'Search/Projects':
        dispatch(routerRedux.push(`${match.url}/Search/Projects`));
        break;
      default:
        break;
    }
  };

  render() {
    const tabList = [
      {
        key: 'Search/Articles',
        tab: '文章',
      },
      {
        key: 'Search/Applications',
        tab: '应用',
      },
      {
        key: 'Search/Projects',
        tab: '项目',
      },
    ];

    const mainSearch = (
      <div style={{ textAlign: 'center' }}>
        <Input.Search
          placeholder="请输入"
          enterButton="搜索"
          size="large"
          onSearch={this.handleFormSubmit}
          style={{ width: 522 }}
        />
      </div>
    );

    const { match,  location,children } = this.props;

    return (
      <PageHeaderLayout
        title="搜索列表"
        content={mainSearch}
        tabList={tabList}
        tabActiveKey={location.pathname.replace(`${match.path}/`, '')}
        onTabChange={this.handleTabChange}
      >
        {children}
      </PageHeaderLayout>
    );
  }
}
