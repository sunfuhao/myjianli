/**
 * 
 * @authors luozh@snail.com
 * @date    2016-03-21 16:42:35
 * @description 主入口模块
 */

import React from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入Antd的导航组件
import { Row, Col } from 'antd';
import { Menu, Icon, Switch ,Layout} from 'antd'

const SubMenu = Menu.SubMenu

// 引入Ant-Design样式 & Animate.CSS样式
import 'animate.css/animate.min.css'
import 'font-awesome/css/font-awesome.min.css'

// 引入主体样式文件
import './main.css'
import 'antd/dist/antd.css';


// 引入单个页面（包括嵌套的子页面）
import myTable from './components/table.js'
import myForm from './components/form.js'
import myAnimate from './components/animate.js'
import myCalendar from './components/calendar.js'
import myCard from './components/fetch.js'
import myHeader from './components/header.js'
import index from './components/index.js'
import IndexContent from './components/content'
import MyAbout from './components/myabout'
import myDenglu from './components/denglu'
const ACTIVE = { color: 'red' }

// 配置导航
class Sider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            username: ''
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({
            username: 'luozh'
        })
    }

 
    render() {
        return (
            <div className="layout">
               <Row>
                <Col span={24} >
                <div className="logo" />
                    <Menu
                        // onClick={this.handleClick}
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ width: '100%' },{lineHeight: '64px'}}
                      >
                        <Menu.Item key="1"><Link to="/">导航</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/myForm">简历</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/denglu">注册／登陆</Link></Menu.Item>
                        <Menu.Item key="4" className="float_r"><Link to="/about">fffff</Link></Menu.Item>
                      </Menu>
                </Col>
                </Row>
                <Row>
                    <Col span={24} >
                        <div className="right-box">
                            { this.props.children }
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

// 配置路由
render((
    <Router history={hashHistory} forceRefresh="true">
        <Route path="/" component={index}>
            <IndexRoute path="/" component={IndexContent} />
            <Route path="myForm" component={myForm} />
            <Route path="denglu" component={myDenglu} />
            <Route path="about" component={MyAbout} />
            <Route path="myCard" component={myCard} />
        </Route>
    </Router>
), document.getElementById('app'));


