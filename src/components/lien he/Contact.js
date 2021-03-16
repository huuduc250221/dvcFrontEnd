import React from 'react'

import { Form, Input, Select, Row, Col, Button } from 'antd'
import AssistanceElement from '../trangchu/AssistanceElement';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

export default function Contact() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Row gutter={16}>
                <Col xs={24} sm={8}>
                    <h2>Thông tin liên hệ</h2>
                    <h4>Dịch vụ công TP Thủ Đức</h4>
                    <p><span>Địa chỉ:</span> số nào đó, đườn nòa đó..</p>
                    <p><span>Email:</span> số nào đó, đườn nòa đó..</p>
                    <p><span>Số điện thoại hỗ trợ:</span> số nào đó, đườn nòa đó..</p>

                </Col>
                <Col xs={24} sm={16}>
                    <h2>Liên Hệ, giải đáp thắc mắc</h2>

                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
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
                            label="Địa chỉ mail"
                            name="userMail"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập địa chỉ mail!"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Số điện thoại"
                            name="telPhone"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập số điện thoại!"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="vấn đề cần trợ giúp"
                            name="telPhone"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng chọn vấn đề cần trợ giúp!"
                                }
                            ]}
                        >
                            <Select>
                                <Select.Option>gì đó</Select.Option>
                                <Select.Option>gì đó</Select.Option>
                                <Select.Option>gì đó</Select.Option>
                                <Select.Option>gì đó</Select.Option>

                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="nhập nội dung"
                            name="content"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập nội dung!"
                                }
                            ]}
                        >
                            <Input.TextArea />
                        </Form.Item>

                        <Form.Item >
                            <Button style={{float:'right'}} type="primary" htmlType="submit">
                                Xác nhận
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>

            </Row>
            <AssistanceElement />
        </div>
    );
};