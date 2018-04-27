import React from 'react'
// const { Header} = Layout;
import { Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'
import { Layout } from 'antd';
import { Modal, Button } from 'antd';
const confirm = Modal.confirm;
// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch'

export default class MyCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardword:this.props.cardword,
            cardtag: this.props.cardtag || [],
            cardid : this.props.id,
        }
    }
    downhandle (){
        
    }
    showConfirm() {
        var _this = this;
    confirm({
        title: '下载提示',
        content: '你想要下载这个吗',
        onOk(_this) {
             return new Promise((resolve, reject) => {
                    setTimeout(_this.state.cardid > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
        },
        onCancel() {},
    });
    }
    componentDidMount() {
    }

render(){
        let tag = [];
        //var ll = JSON.parse(this.state.cardtag)
        var ll = this.state.cardtag
        var _this = this;
        ll.map(function (x,index,all) {
            if(index==all.length-1){
                tag.push(<div className="card_tag" onClick={_this.showConfirm.bind(_this)}>{x}</div>)
            }else{
                tag.push(<div className="card_tag" key={index}>{x}</div>)
            }
            
        })
        return(
        <div>
            <div className="card_box">
                <div className="card_word" >{_this.state.cardword}</div>
                 <div className="card_tag_box">{tag}</div>
            </div>
            </div>
        )
}
}