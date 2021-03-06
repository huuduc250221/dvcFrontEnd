import React, { useState } from 'react';
import { Alert, Button, DatePicker, Form, Input, Radio } from 'antd';

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
        const user = {
            ...values,
            day_of_birth: values.day_of_birth.toJSON(values.day_of_birth._d)
        }
        dispatch(registrationMDW(user))
        console.log(success)
    }
    // function registrationSuccess() {
    //     if (success) {
    //         setTimeout(() => {
    //             props.handleSuccessToClose()
    //         }, 1000)

    //     }

    // }

    // registrationSuccess()

    return (
        <div>
            <Form
                {...layout}
                initialValues={{ position: 'Chủ Tịch' }}
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
                {/* <Form.Item
                    label="Nhập lại mật khẩu"
                    name="rePassword"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                >
                    <Input.Password />
                </Form.Item> */}
                <Form.Item
                    label="Họ và tên"
                    name="full_name"
                    rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name='gender'
                    label='Giới tính'
                    rules={[{ required: true, message: 'Vui lòng chọn giới tính!' }]}
                >
                    <Radio.Group>
                        <Radio value='Nam'>nam</Radio>
                        <Radio value='Nữ'>Nữ</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="Ngày sinh"
                    name="day_of_birth"
                    rules={[{ required: true, message: 'Vui lòng nhập ngày sinh!' }]}
                >
                    <DatePicker format='DD-MM-YYYY' />
                </Form.Item>
                <Form.Item
                    label="Số điện thoại"
                    name="telephone"
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
                <Form.Item
                    label="Số CMND"
                    name="ic_number"
                    rules={[{ required: true, message: 'Vui lòng nhập số CMND!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Quốc tịch"
                    name="nationality"
                    rules={[{ required: true, message: 'Vui lòng nhập quốc tịch!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="position"
                    hidden
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