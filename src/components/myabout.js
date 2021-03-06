import React from 'react'
import { Layout } from 'antd';
import cookie from 'react-cookies'
import { Card,Row, Col,Modal} from 'antd';
import { message,Upload,Avatar,Button,Icon,notification } from 'antd';
import PDF from 'react-pdf-js';
import UpJianli from './upjianli'

// const { Header} = Layout;
import { Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch'

export default class MyAbout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            myjianli:{},
            visible:false,
            userid: cookie.load('userid'),
            userphone:cookie.load('userphone') 
        }
    }
    openNotification = (title,desc) => {
          notification.open({
            message: title,
            description: desc,
          });
    };

    // 获取简历
    fetchjianli = (id) => {
        fetch('../../user.json?id')
            .then((res) => { console.log(res.status);return res.json() })
            .then((data) => { 
                this.setState({myjianli:data.userinfo}) 
            })
            .catch((e) => { console.log(e.message,22222) })
    }
    // 获取数据
    fetchFn = () => {
        fetch('../../user.json')
            .then((res) => { console.log(res.status);return res.json() })
            .then((data) => { 
                this.setState({user:data.userinfo}) 
                if(this.state.user.jianli != "0"){
                    this.fetchjianli(parseInt(this.state.user.jianli ))
                }
            })
            .catch((e) => { console.log(e.message,22222) })
    }

    componentDidMount() {
         this.fetchFn()
    }
    upload =(e)=>{
        this.setState({
            visible:true
        })
    }
    hideModal = () => {
        this.setState({ visible: false })
    }
render(){
        const props = {
          name: 'file',
          action: '//jsonplaceholder.typicode.com/posts/',
          headers: {
            authorization: 'authorization-text',
          },
          onChange(info) {
            if (info.file.status !== 'uploading') {
              console.log(info.file, info.fileList,11111);
            }
            if (info.file.status === 'done') {
              message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
              message.error(`${info.file.name} file upload failed.`);
            }
          },
        };
        let _jianli = []
        let userinfo = this.state.user
        if(Object.keys(this.state.myjianli).length == 0){
            _jianli.push(<div className="myjianli">{this.state.myjianli.title}</div>)
        }else{
             _jianli.push(<Button size="large" onClick={this.upload.bind(this)}>上传简历</Button>)
        }

        return(
            <div className="">
                <div className="me_top_box">
                    <Avatar shape="square" url={this.state.user.user_icon} size="large" icon="user" />
                    <div>我的id：{this.state.userid}</div>
                </div>
                <Modal title="上传简历" visible={this.state.visible} onOk={this.hideModal}  onCancel={this.hideModal} footer={null}>
                    <UpJianli onsub={this.hideModal}/>
                </Modal>
                <div>我的简历：{_jianli}</div>
                <div> 我的金钱：<Button size="small">{this.state.user.user_money}</Button> <Icon type="unlock" />（可提现）</div>
                <div> 我的金钱：<Button size="small" type="dashed" onClick={this.openNotification.bind(this,'不可以提现','因为这并不是您充值的部分～')}>{this.state.user.bad_money}</Button> <Icon type="lock" />（不可提现）</div>
            </div>
        )
}
}



