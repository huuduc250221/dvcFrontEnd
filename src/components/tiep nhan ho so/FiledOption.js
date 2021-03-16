import React, { useEffect } from 'react'
import { Button, Card, Form, Input, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation, useParams } from 'react-router'

import { fetchData } from '../../redux/reducers/FetchDataReducer'

export default function FiledOption() {
    const { id } = useParams()
    let dataaaaa = useSelector(state => state.loadData)
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    // useEffect(() =>{
    //     if(!dataaaaa) {
    //         dispatch(fetchData())
    //     }
    //     else return
    // },[]
    // )


    const { loading, data, err } = dataaaaa

    let specifyData = data.find(item => {
        return item.id.$oid == id
    })
    console.log(id)
    console.log(specifyData)


    const selectOption = specifyData.office.map((item, index) => {
        return <Select.Option key={index} value={item.adress}>{item.adress}</Select.Option>
    })

    function onFinishForm(value) {
        console.log(value)
        if (value.adressOff) {
            history.push(location.pathname + '/offline')
        }
        else {
            history.push(`${location.pathname}/${value.adressOn}/online`)
        }
    }

    return <div>
        <Card title='Nộp hồ sơ trực tiếp tại bộ phận tiếp nhận và trả kết quả'>
            <p>Người dân đến bộ phận tiếp nhận và trả kết quả của đơn vị ban hành dịch vụ công để nộp hồ sơ và nhận kết quả.Bạn hãy chọn đơn vị tiếp nhận hồ sơ dưới đây để nộp hồ sơ.</p>
            <Form
                onFinish={onFinishForm}
                initialValues={{optionState:'offline'}}
                >
                <Form.Item name='adressOff' required='true'>
                    <Select >
                        {selectOption}
                    </Select>

                </Form.Item>
                <Form.Item name='optionState' hidden='true' >
                   <Input />
                </Form.Item>
                <Form.Item  >
                    <Button type='primary' htmlType='submit' >Chọn</Button>
                </Form.Item>
            </Form>
        </Card>
        {specifyData.online ? <Card title='Dịch vụ nộp hồ sơ qua mạng'>
            <p>Người dân nộp hồ sơ thông qua trang dịch vụ công và đến bộ phận tiếp nhận và trả kết quả của đơn vị ban hành dịch vụ công nhận kết quả.Bạn hãy chọn đơn vị tiếp nhận hồ sơ dưới đây để nộp hồ sơ.</p>
            <Form
                onFinish={onFinishForm}
                initialValues={{optionState:'online'}}
                
                >
                <Form.Item name='adressOn' required='true'>
                    <Select>
                        {selectOption}
                    </Select>

                </Form.Item>
                <Form.Item name='optionState' hidden='true'>
                    <Input  />
                </Form.Item>
                <Form.Item  >
                    <Button type='primary' htmlType='submit'>Chọn</Button>
                </Form.Item>
            </Form>
        </Card> : ''}

    </div>
}