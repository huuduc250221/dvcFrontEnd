import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { Row, Col, Form, Input, Select, Steps, Button, message, Collapse } from 'antd'
import { fetchData } from '../../redux/reducers/FetchDataReducer';

const { Step } = Steps;

const steps = [
    {
        key: 1,
        title: 'First',
        content: <FirstStep />,
    },
    {
        key: 2,
        title: 'Second',
        content: 'Second Step',
    },
    {
        key: 3,
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
        <div className="steps-content" style={{ minWidth: '50vh', marginTop: '3rem' }}>{steps[current].content}</div>
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
    const tableName = 'tiepnhanhoso'
    const { id, adress } = useParams()
    const dispatch = useDispatch()
    let { data } = useSelector(state => state.loadData)
    let specifyData
    let specifyAddress
    console.log(!data[0])

    useEffect(() => {
        if (!data[0]) {
            dispatch(fetchData(tableName))
            console.log('dispatch')
        }
        console.log('useEffect OnlineFiled')
    }, [])

    if (data[0]) {
        specifyData = data.find(item => {
            return item.id.$oid == id
        })
        console.log(specifyData)

        specifyAddress = specifyData.office.find(item => {
            return item.adress === adress
        })

        console.log(specifyAddress)
    }



    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return <div>
        {data[0] ? <Collapse>
            <Collapse.Panel header='?????a ch???'>
                <p><span>adress:{specifyAddress.adress}</span></p>
                <p><span>Phone: {specifyAddress.phone}</span></p>
                <p><span>Fax: {specifyAddress.fax}</span></p>
                <p><span>Web: {specifyAddress.link}</span></p>

            </Collapse.Panel>
        </Collapse> : ''}
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
                        label="H??? v?? t??n"
                        rules={[
                            { required: true, message: "Vui l??ng nh???p m?? s??? bi??n nh???n!" }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name=""
                        label="S??? CMND"
                        rules={[
                            { required: true, message: "Vui l??ng nh???p m?? s??? bi??n nh???n!" }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name=""
                        label="D??n t???c"
                        rules={[
                            { required: true, message: "Vui l??ng nh???p m?? s??? bi??n nh???n!" }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name=""
                        label="S??? gi???y t??? ch???ng th???c c?? nh??n kh??c"
                        rules={[
                            { required: true, message: "Vui l??ng nh???p m?? s??? bi??n nh???n!" }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name=""
                        label="Ch??? ??? hi???n t???i"
                        rules={[
                            { required: true, message: "Vui l??ng nh???p m?? s??? bi??n nh???n!" }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="S??? ??i???n tho???i di ?????ng"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: "Vui l??ng nh???p h??? v?? t??n!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>



                </Col>
                <Col xs={24} xl={12}>
                    <Form.Item
                        name=""
                        label="Ng??y sinh"
                        rules={[
                            { required: true, message: "Vui l??ng nh???p m?? s??? bi??n nh???n!" }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name=""
                        label="Ng??y c???p CMND"
                        rules={[
                            { required: true, message: "Vui l??ng nh???p m?? s??? bi??n nh???n!" }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name=""
                        label="N??i c???p CMND"
                        rules={[
                            { required: true, message: "Vui l??ng nh???p m?? s??? bi??n nh???n!" }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name=""
                        label="Qu???c t???ch"
                        rules={[
                            { required: true, message: "Vui l??ng nh???p m?? s??? bi??n nh???n!" }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name=""
                        label="N??i c???p ch???ng th???c c?? nh??n   "
                        rules={[
                            { required: true, message: "Vui l??ng nh???p m?? s??? bi??n nh???n!" }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name=""
                        label="Gi???i t??nh"
                        rules={[
                            { required: true, message: "Vui l??ng nh???p m?? s??? bi??n nh???n!" }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                
                   
                        <Form.Item
                            label="?????a ch??? th?????ng tr??"
                            name="fullName"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui l??ng nh???p h??? v?? t??n!"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="CMND"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui l??ng nh???p s??? ch???ng minh nh??n d??n!"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
    
                </Col>
            </Row >
            <Form.Item>
                <Button type='primary' htmlType='submit'>N???p</Button>
            </Form.Item>
        </Form >
    </div >
}