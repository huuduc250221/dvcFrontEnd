import { Button, Table } from 'antd'
import React from 'react'


function StaffHome() {
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
            key: 'filedDay',
            render: item => <Button >item.value</Button>
        },
        {
            title: 'Ngày trả',
            dataIndex: 'filedDay',
            key: 'filedDay',
            render: item => <Button >item.value</Button>
        },
        {
            title: 'trạng thái',
            dataIndex: 'filedDay',
            key: 'filedDay',
            render: item => <Button >item.value</Button>
        },
        {
            title: 'Phê duyệt',
            dataIndex: 'filedDay',
            key: 'filedDay',
            render: <Button > 'Duyệt'</Button>
        },



    ]



    return <div>
        <Table 
        columns={columns}
        
        />

    </div>
}

export default StaffHome