import React from 'react'
import { Layout } from 'antd';
import { Card,Row, Col } from 'antd';
import MyCard from './card'
import MyHeader from './header'
// const { Header} = Layout;
import { Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch'

export default class Indexcontent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: []
        }
    }

    // 获取数据
    fetchFn = () => {
        fetch('../../data.json')
            .then((res) => { console.log(res.status);return res.json()})
            .then((data) => { this.setState({lists:data.listData}) })
            .catch((e) => { console.log(e.message,22222) })
    }

    componentDidMount() {
          this.fetchFn()
    }

render(){
        var _html = []
        var ll = this.state.lists;
        ll.map((x)=>{
            var results = [  
                "吃饭","喝水","以验证","下载"
            ]; 
            var id = "11"
            _html.push(<MyCard cardword={x.title} cardtag={results} id={id}></MyCard>)
        })
        return(
            <div className="content_box">
               <Row>
                <Col span={14} offset={1} className="content_left">
                    {_html}
                </Col>
                <Col span={7} offset={2} className="content_right">
                    2
                </Col>
                </Row>
            </div>
        )
}
}



