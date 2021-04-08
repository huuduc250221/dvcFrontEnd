import { Button, Table } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'


function StaffHome() {
    const columns = [
        {
            title: 'STT',
            dataIndex: 'row_number',
            key: 'rowNumber'
        }, {
            title: 'Tên thủ tục',
            dataIndex: 'procedure_table',
            key: 'title',

        },
        {
            title: 'Số biên nhận',
            dataIndex: 'record_code',
            key: 'code'
        },
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Ngày nộp',
            dataIndex: 'filed_time',
            key: 'filedDay',
        },
        {
            title: 'Ngày trả',
            dataIndex: 'filedDay',
            key: 'filedDay',

        },
        {
            title: 'trạng thái',
            dataIndex: 'filedDay',
            key: 'filedDay',
        },
        {
            title: 'Phê duyệt',
            dataIndex: 'filedDay',
            key: 'filedDay',
            render: (text, record, index) => (<Button key={index}>Duyệt</Button>)
        },



    ]



    return <div>
        <Table
            columns={columns}
            dataSource={fakeData}
        />

    </div>
}

export default StaffHome

let fakeData = [{
    "row_number": 1,
    "procedure_table": "Rhett",
    "record_code": 770260,
    "name": "Bitchip",
    "filed_time": "8/11/2020",
    "status": "43353-752"
}, {
    "row_number": 2,
    "procedure_table": "Irvine",
    "record_code": 382104,
    "name": "Voltsillam",
    "filed_time": "2/7/2021",
    "status": "55700-008"
}, {
    "row_number": 3,
    "procedure_table": "Roda",
    "record_code": 987339,
    "name": "Tresom",
    "filed_time": "2/7/2021",
    "status": "36987-1052"
}, {
    "row_number": 4,
    "procedure_table": "Adore",
    "record_code": 883472,
    "name": "Zamit",
    "filed_time": "4/7/2021",
    "status": "0268-0861"
}, {
    "row_number": 5,
    "procedure_table": "Shawn",
    "record_code": 223935,
    "name": "Home Ing",
    "filed_time": "6/20/2020",
    "status": "10191-1361"
}, {
    "row_number": 6,
    "procedure_table": "Dori",
    "record_code": 395024,
    "name": "Otcom",
    "filed_time": "2/20/2021",
    "status": "37205-615"
}, {
    "row_number": 7,
    "procedure_table": "Gabrila",
    "record_code": 217966,
    "name": "Daltfresh",
    "filed_time": "10/14/2020",
    "status": "24236-995"
}, {
    "row_number": 8,
    "procedure_table": "Jamie",
    "record_code": 297684,
    "name": "Quo Lux",
    "filed_time": "1/17/2021",
    "status": "49035-699"
}, {
    "row_number": 9,
    "procedure_table": "Sasha",
    "record_code": 922556,
    "name": "Voltsillam",
    "filed_time": "3/19/2021",
    "status": "36800-647"
}, {
    "row_number": 10,
    "procedure_table": "Erina",
    "record_code": 593355,
    "name": "Namfix",
    "filed_time": "4/23/2020",
    "status": "47682-304"
}, {
    "row_number": 11,
    "procedure_table": "Stillman",
    "record_code": 535733,
    "name": "Fix San",
    "filed_time": "7/24/2020",
    "status": "0409-4052"
}, {
    "row_number": 12,
    "procedure_table": "Ramonda",
    "record_code": 771456,
    "name": "Rank",
    "filed_time": "8/3/2020",
    "status": "68084-006"
}, {
    "row_number": 13,
    "procedure_table": "Tye",
    "record_code": 786150,
    "name": "Andalax",
    "filed_time": "1/17/2021",
    "status": "48951-7039"
}, {
    "row_number": 14,
    "procedure_table": "Melodee",
    "record_code": 793175,
    "name": "Transcof",
    "filed_time": "8/15/2020",
    "status": "10742-8236"
}, {
    "row_number": 15,
    "procedure_table": "Rinaldo",
    "record_code": 544153,
    "name": "Aerified",
    "filed_time": "3/25/2021",
    "status": "55301-519"
}, {
    "row_number": 16,
    "procedure_table": "Lucinda",
    "record_code": 255750,
    "name": "Vagram",
    "filed_time": "8/9/2020",
    "status": "55154-2874"
}, {
    "row_number": 17,
    "procedure_table": "Geralda",
    "record_code": 216551,
    "name": "Duobam",
    "filed_time": "12/28/2020",
    "status": "40046-0055"
}, {
    "row_number": 18,
    "procedure_table": "Jeremie",
    "record_code": 343944,
    "name": "Cookley",
    "filed_time": "7/29/2020",
    "status": "0268-6231"
}, {
    "row_number": 19,
    "procedure_table": "Mollee",
    "record_code": 955078,
    "name": "Temp",
    "filed_time": "3/5/2021",
    "status": "13811-627"
}, {
    "row_number": 20,
    "procedure_table": "Jacklyn",
    "record_code": 471512,
    "name": "Aerified",
    "filed_time": "5/25/2020",
    "status": "17271-501"
}]