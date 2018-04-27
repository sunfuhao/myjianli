import React from 'react'
// const { Header} = Layout;
import MyHeader from './header'
import MyFooter from './footer'
import { Layout } from 'antd';
import { Row, Col ,Menu} from 'antd';
// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch'

export default class index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
            curr_key: 0
        }
    }
    changecurrkey(e){
        this.setState({
            current: e.key
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
        this.fetchFn()
    }

    render() {
        return(
            <div>
                <MyHeader />
                <Row>
                    <Col span={18} offset={3}>
                        {this.props.children}               
                    </Col>
                    <Col span={8}>
                    </Col>
                </Row>
                <MyFooter />
            </div>
    )}   
}

