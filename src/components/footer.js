import React from 'react'
import { Layout } from 'antd';
import { Row, Col ,Menu} from 'antd';
const SubMenu = Menu.SubMenu
// const { Header} = Layout;
import { Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch'

export default class myFooter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: [],
            current:this.props.key
            
        }
        console.log(props,22222)
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

render(){
    var data_top = [{'title':'关于我们','url':'http://www.baidu.com'},{'title':'广告合作','url':'http://www.baidu.com'},{'title':'免责声明','url':'http://www.baidu.com'}]
    let data_top_html = []
    data_top.map((x,y,z)=>{
        data_top_html.push(<a href={x.url} className="footer_top">{x.title}</a>)

    })
    var data_bottomp = [{'title':'关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们'}]
    let data_bottomp_html = []
    data_bottomp.map((x,y,z)=>{
        data_bottomp_html.push(<span href={x.url} className="footer_top">{x.title}</span>)

    })
        return(
            <div className="myfooter">
               <Row>
                <Col span={24} >
                    <div className="footer_top_box">
                        {data_top_html}
                    </div>
                    <div className="footer_bottom_box">
                        {data_bottomp_html}
                    </div>
                </Col>
                </Row>
            </div>
        )
}
}

