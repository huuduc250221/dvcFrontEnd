import React from 'react'

import { Form, Input, Select, Row, Col, Button } from 'antd'

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
            <h3>Danh sách hồ sơ</h3>
            <Row gutter={16}>
                <Col xs={24} sm={8}>
                    <h2>Thông tin liên hệ</h2>
                </Col>
                <Col xs={24} sm={16}>
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
                            <Button type="primary" htmlType="submit">
                                Xác nhận
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>

            </Row>
        </div>
    );
};