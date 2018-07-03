import React from 'react'
import { Layout } from 'antd';
import { Row, Col ,Menu} from 'antd';
import cookie from 'react-cookies'
const SubMenu = Menu.SubMenu
// const { Header} = Layout;
import { Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch'

export default class myHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: [],
            current:this.props.key,
            userid:0,
            userphone:0,
            newupdata:false
        }
    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
            curr_key:e.key
        })
    }

    // 获取数据
    fetchFn = () => {
        fetch('../../data.json')
            .then((res) => { console.log(res.status);return res.json() })
            .then((data) => { this.setState({lists:data.listData}) })
            .catch((e) => { console.log(e.message) })
    }

    componentDidMount() {
        if(cookie.load('userid') != undefined){
            this.setState({
                userid: cookie.load('userid'),
                userphone:cookie.load('userphone') 
            })
        }
        this.fetchFn()
    }
    componentDidUpdate(){
        if(cookie.load('userid') != undefined && this.state.newupdata == false){
            this.setState({
                userid: cookie.load('userid'),
                userphone:cookie.load('userphone'),
                newupdata:true
            })
        }
    }

render(){
        let denglu = []
        if(this.state.userid !=0){
            denglu.push(<Menu.Item key="3" className="float_r"><Link to="/about">个人中心</Link></Menu.Item>)
        }else{
            denglu.push(<Menu.Item key="3"><Link to="/denglu">注册／登陆</Link></Menu.Item>)
        }
        console.log(this)
        return(
            <div className="layout">
               <Row>
                <Col span={24} >
                <div className="logo" />
                    <Menu
                        onClick={this.handleClick}
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={'1'}
                        style={{ width: '100%' },{lineHeight: '64px'}}
                      >
                        <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/myForm">简历</Link></Menu.Item>
                        {denglu}
                      </Menu>
                </Col>
                </Row>
            </div>
        )
}
}

