import React, { useEffect, useState } from 'react';

import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Checkbox, Button, Modal, Alert, Row, Col, Space } from 'antd'

import { loginRequest } from '../../redux/reducers/LoginReducer'
import { useHistory } from 'react-router';
import RegisterPage from '../register Page/RegisterPage';

import './LoginPage.css'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

function LoginPage(props) {
    const history = useHistory()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { success, err } = useSelector(state => state.user)
    const dispatch = useDispatch()
    console.log(success)

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        dispatch(loginRequest(values))
    };

    if (success) {
        history.push('/')
    }


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (

        <div>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                    <Row >
                        <Col span={16} offset={8}>
                            {err ? <Alert className='alert-login' message='sai thông tin' type='error' /> : ''}
                        </Col>
                    </Row>

                    <Form.Item
                        label="Tên đăng nhập"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Đăng nhập
                    </Button>

                        <Button style={{ marginLeft: '2rem' }} onClick={showModal}>Đăng ký</Button >
                    </Form.Item>
            </Form>

            <Modal title='Đăng kí' visible={isModalVisible} footer={null} onCancel={handleCancel} >
                <RegisterPage handleSuccessToClose={handleCancel} />
            </Modal>

        </div>
    );
}

export default LoginPage;