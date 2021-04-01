import React, { useState } from 'react';
import { Alert, Button, DatePicker, Form, Input, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import { updateUserAction } from '../../../redux/reducers/FetchUserReducer';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
}
const ChangeProfile = () => {
    const [isShow,setIsShow] = useState(false)
    const dispatch = useDispatch()
    const { profile, updateSuccess, updateErr } = useSelector(state => state.users)
    console.log(profile)
    const handleFinish = (value) => {
        value.id = profile._id
        console.log(value)
        dispatch(updateUserAction(value))
        setIsShow(true)
        setTimeout(()=> {
            setIsShow(false)
        },5000)
    }
    const obj = {
        ...profile,
        day_of_birth: moment(profile.day_of_birth)
    }

    return (
        <div>
            <Form
                {...layout}
                initialValues={obj}
                onFinish={handleFinish}
            >
                {isShow && updateSuccess ? <Alert message='Thay đỗi thông tin thành công' type='success' /> :isShow && !updateErr ?
                    <Alert message='Thay đỗi thông tin không thành công' type='error' /> : ''}
                <Form.Item
                    label="Tên đăng nhập"
                    name="username"
                    rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}

                >
                    <Input disabled />
                </Form.Item>

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
                {/* <Form.Item
                    name="position"
                    hidden
                >
                    <Input />
                </Form.Item> */}
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button htmlType='submit' type='primary'>Hoàn tất</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ChangeProfile;