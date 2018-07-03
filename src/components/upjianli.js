import React from 'react'
import {
  Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon, Rate,Input
} from 'antd';
const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Demo extends React.Component {
    state={
        worktime:1
    }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onsub()
        console.log('Received values of form: ', values);
      }
    });
  }
  worktimefn=(value)=>{
    this.setState({
        worktime:value
    })
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        
        <FormItem
          {...formItemLayout}
          label="岗位"
          hasFeedback
        >
          {getFieldDecorator('gangwei', {
            rules: [
              { required: true, message: '请选择你能胜任的岗位!' },
            ],
          })(
            <Select placeholder="请选择你能胜任的岗位～">
              <Option value="0">前端</Option>
              <Option value="1">后端</Option>
            </Select>
          )}
        </FormItem>



        <FormItem
          {...formItemLayout}
          label="工作时间"
        >
          {getFieldDecorator('worktime')(
            <Slider marks={{ 0: '0', 3: '3', 6: '6', 9: '9', 12: '12', 15: '15' }} min={0} max={15} onChange={this.worktimefn} value={this.state.worktime}/>
          )}
        </FormItem>



        <FormItem
          {...formItemLayout}
          label="Radio.Button"
        >
          {getFieldDecorator('radio-button')(
            <RadioGroup>
              <RadioButton value="a">item 1</RadioButton>
              <RadioButton value="b">item 2</RadioButton>
              <RadioButton value="c">item 3</RadioButton>
            </RadioGroup>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Rate"
        >
          {getFieldDecorator('rate', {
            initialValue: 3.5,
          })(
            <Rate />
          )}
        </FormItem>


        <FormItem
          {...formItemLayout}
          label="介绍"
        >
          {getFieldDecorator('mysay', {
          })(
            <TextArea rows={4} />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Upload"
          extra="上传简历"
        >
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </FormItem>

        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  }
}

const UpJianli = Form.create()(Demo);

export default UpJianli


