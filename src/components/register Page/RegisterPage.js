import React, { useState } from 'react';
import { Alert, Button, DatePicker, Form, Input } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

import { registrationMDW } from '../../redux/reducers/RegistrationReducer'


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
}

function RegisterPage(props) {
    const dispatch = useDispatch()
    const { loading, success } = useSelector(state => state.registration)




    function handleFinish(values) {
        dispatch(registrationMDW(values))
        console.log(success)
    }
    function registrationSuccess() {
        if (success) {
            setTimeout(() => {
                props.handleSuccessToClose()
            }, 1000)

        }

    }

    registrationSuccess()

    return (
        <div>
            <Form
                {...layout}
                onFinish={handleFinish}
            >
                {success ? <Alert message='Đăng kí thành công' type='success' /> : ''}
                <Form.Item
                    label="Tên đăng nhập"
                    name="username"
                    rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Nhập lại mật khẩu"
                    name="rePassword"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Họ và tên"
                    name="name"
                    rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Ngày sinh"
                    name="dateOfBirth"
                    rules={[{ required: true, message: 'Vui lòng nhập ngày sinh!' }]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label="Số điện thoại"
                    name="telPhone"
                    rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button htmlType='submit' type='primary'>Đăng ký</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default RegisterPage;