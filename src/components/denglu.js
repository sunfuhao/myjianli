import React from 'react'
import { Form, Icon, Input, Button, Checkbox ,Select,Radio,Row,Col} from 'antd';
const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group

class denglu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            yanzheng: "获取验证码",
            kaishidaojishi:true,
            upsize :'small',
        }
    }
    yanzheng = ()=>{
        if(this.state.yanzheng){
            if(this.state.kaishidaojishi){
                this.setState({kaishidaojishi:false})  
                let times = 60;
                let timer = setInterval(()=>{
                    this.setState({yanzheng:times})  
                    times-=1
                    if(times==0){
                        this.setState({yanzheng:"获取验证码"})
                        clearInterval(timer)
                        this.setState({kaishidaojishi:true})  
                    }  
                },1000)
            }else{
                return
            }
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
   
    }
  render() {
    const formItemLayout = {
        labelCol: { span: 8,offset:0 },
        wrapperCol: { span: 8 },
    };
    const { getFieldDecorator } = this.props.form;
    return (
        <div >
      <Form onSubmit={this.handleSubmit} className="login-form loginbox">
        <FormItem {...formItemLayout} label="手机号">
        {getFieldDecorator('iphone', {
        id:"iphone",
        rules: [{ required: true, message: '请输入正确的11位手机号!',max:11,min:11}],
        })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请填写手机号" />
        )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="验证码"
        >
          <Row gutter={10}>
            <Col span={12}>
                {getFieldDecorator('yanzheng', {
                id:"yanzheng",
                rules: [{ required: true,max:4,min:4,message: '请输入4位验证码!'}],
                })(
                <Input placeholder="请填写验证码"/>
                )}
            </Col>
            <Col span={12}>
              <Button onClick={this.yanzheng}>{this.state.yanzheng}</Button>
            </Col>
          </Row>
        </FormItem>
        <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
        </Button>
      </Form>
      </div>
    );
  }
}

denglu = Form.create()(denglu)

export default denglu