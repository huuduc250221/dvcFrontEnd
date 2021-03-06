import React, { useState, useEffect } from 'react'
import { Table, Form, Button, Select, Input } from 'antd'

import { connect, useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../redux/reducers/FetchDataReducer'


const tableName = 'tracuuhoso'

function LookUpFile() {

    const dispatch = useDispatch()
    const data = useSelector(state => state.loadData)

    const [pageState, setPageState] = useState({
        tableName: tableName,
        params: '',
        filter: { name: '', field: '' },
        page: {
            pageSize: 10,
            pageNumber: 1
        },
    })

    useEffect(() => {
        dispatch(fetchData(pageState.tableName))
        console.log('useEffects')
    }, [pageState])

    const columns = [
        {
            title: 'STT',
            dataIndex: 'rowNumber',
            key: 'rowNumber'
        }, {
            title: 'Tên thủ tục',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Số biên nhận',
            dataIndex: 'code',
            key: 'code'
        },
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Ngày nợp',
            dataIndex: 'filedDay',
            key: 'filedDay'
        },
        {
            title: 'Ngày hẹn trả',
            dataIndex: 'returnDay',
            key: 'returnDay'
        },
        {
            title: 'Tình trạng',
            dataIndex: 'curentState',
            key: 'currentState'
        },


    ]

    const dataSource = data.data ? data.data.map((item, index) => ({
        key: index,
        id: item.id.$oid,
        rowNumber: item.rowNumber,
        title: item.procedureTitle,
        adress: item.adress,
        name: item.name,
        filedDay: item.date,
        code: item.code,
    })) : []

    const onFinish = values => {
        console.log(values)
    }

    return <div>
        <Form
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}

            layout="horizontal"
            onFinish={onFinish}
        >
            <Form.Item name='recode_code'>
                <Input placeholder='Mã thủ tục' />
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Tìm kiếm
                </Button>
            </Form.Item>
        </Form>
        <Table
            loading={data.loading}
            columns={columns}
            dataSource={dataSource}
            expandable={{ expandedRowRender: () => <ExpandeTable expandData={dataSource.slice(1, 4)} /> }}
        />
    </div>
}

function ExpandeTable({ expandData }) {

    const expandeColumns = [
        {
            title: 'Tên thủ tục',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Số biên nhận',
            dataIndex: 'code',
            key: 'code'
        },
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Ngày nợp',
            dataIndex: 'filedDay',
            key: 'filedDay'
        },
        {
            title: 'Ngày hẹn trả',
            dataIndex: 'returnDay',
            key: 'returnDay'
        },
        {
            title: 'Tình trạng',
            dataIndex: 'curentState',
            key: 'currentState'
        },

    ]



    return <div> <Table
        columns={expandeColumns}
        dataSource={expandData}
        pagination={{ position: ['none', 'none'] }}
    />
    </div>
}

export default LookUpFile