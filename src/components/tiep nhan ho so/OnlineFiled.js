import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { Row, Col, Form, Input, Select, Steps, Button, message } from 'antd'

const { Step } = Steps;

const steps = [
    {
        key:1,
        title: 'First',
        content: <FirstStep />,
    },
    {
        key:2,
        title: 'Second',
        content: 'Second Step',
    },
    {
        key:3,
        title: 'Last',
        content: 'Last Step',
    },
];

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

export default function OnlineFiled() {
    const [current, setCurrent] = useState(0)
   

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };



    return <div>
        <Steps current={current}>
            {steps.map(item => (
                <Step key={item.title} title={item.title} />
            ))}
        </Steps>
        <div className="steps-content" style={{minWidth:'50vh',marginTop:'3rem'}}>{steps[current].content}</div>
        <div className="steps-action">
            {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                    Next
                </Button>
            )}
            {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                    Done
                </Button>
            )}
            {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                    Previous
                </Button>
            )}
        </div>
    </div>

}

function FirstStep() {
    const { id, adress } = useParams()
    let dataaaaa = useSelector(state => state.loadData)

    const { loading, data, err } = dataaaaa

    let specifyData = data.find(item => {
        return item.id.$oid == id
    })
    
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return <div>
        <Form

            {...layout}
            name="basic"
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Row gutter={16}>

                <Col xs={24} xl={12}>
                    <Form.Item
                        name=""
                        label="Mã số biên nhận"
                        rules={[
                            { required: true, message: "Vui lòng nhập mã số biên nhận!" }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name="recipients" label="Đơn vị">
                        <Select>
                            <Select.Option>1</Select.Option>
                            <Select.Option>2</Select.Option>
                            <Select.Option>3</Select.Option>
                        </Select>
                    </Form.Item>
                    <div>
                        <Form.Item
                            label="Họ và tên"
                            name="fullName"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập họ và tên!"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="CMND"
                            name="CMND"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập số chứng minh nhân dân!"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </div>


                </Col>
                <Col xs={24} xl={12}>
                    <Form.Item
                        name=""
                        label="Mã số biên nhận"
                        rules={[
                            { required: true, message: "Vui lòng nhập mã số biên nhận!" }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name="recipients" label="Đơn vị">
                        <Select>
                            <Select.Option>1</Select.Option>
                            <Select.Option>2</Select.Option>
                            <Select.Option>3</Select.Option>
                        </Select>
                    </Form.Item>
                    <div>
                        <Form.Item
                            label="Họ và tên"
                            name="fullName"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập họ và tên!"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="CMND"
                            name="CMND"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập số chứng minh nhân dân!"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </div>
                </Col>
            </Row >
        </Form >
    </div >
}