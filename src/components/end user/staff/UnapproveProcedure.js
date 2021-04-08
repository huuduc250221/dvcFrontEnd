import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Table } from 'antd'


const UnapproveProcedure = () => {
  const { profile } = useSelector(state => state.user)
  const { loading, record, err } = useSelector(state => state.records)
  const [count, setCount] = useState(0)


  const fakeData1 = fakeData.filter(item => !item.access)

  const columns = [
    {
      title: 'STT',
      dataIndex: 'rowNumber',
      key: 'rowNumber'
    }, {
      title: 'Tên thủ tục',
      dataIndex: 'procedure_name',
      key: 'title',
      render: text => (<Link to='/staffHome/chitietthutuc'>{text}</Link>)
    },
    {
      title: 'Mã thủ tục',
      dataIndex: 'record_code',
      key: 'record_code'
    },
    {
      title: 'Thời gian nộp',
      dataIndex: 'filed_time',
      key: 'filed_time'
    },

    {
      title: 'Duyệt',
      key: 'selectt',
      render: (text, record, index) => {
        return <Button type='primary' onClick={el => onAccept(el, record.record_code)}>Duyệt</Button>
      }
    }
  ]

  function onAccept(el, record_code) {
    el.preventDefault()
    fakeData = fakeData.map(item => {
      if (item.record_code === record_code) {
        item.access = true
      }
      return item
    })
    setCount(count + 1)
  }
  return (
    <div>
      <Table
        columns={columns}
        dataSource={fakeData1}
      />
    </div>
  );
};
export default UnapproveProcedure;


let fakeData = [{
  "rowNumber": 1,
  "procedure_name": "Lotlux",
  "record_code": 919062,
  "category": "Crossing",
  "submit_time": "3/11/2021",
  "staff": [
    "Baulk",
    "Regardsoe",
    "Temlett"
  ],
  "access": true
}, {
  "rowNumber": 2,
  "procedure_name": "Transcof",
  "record_code": 205678,
  "category": "Drive",
  "submit_time": "12/15/2020",
  "staff": [
    "Bardey",
    "Ewles",
    "Steaning"
  ],
  "access": true
}, {
  "rowNumber": 3,
  "procedure_name": "Matsoft",
  "record_code": 108063,
  "category": "Avenue",
  "submit_time": "7/3/2020",
  "staff": [
    "de Tocqueville",
    "Rodie",
    "Hendron"
  ],
  "access": true
}, {
  "rowNumber": 4,
  "procedure_name": "Vagram",
  "record_code": 214864,
  "category": "Avenue",
  "submit_time": "7/27/2020",
  "staff": [
    "Girauld",
    "Shenton",
    "Childes"
  ],
  "access": false
}, {
  "rowNumber": 5,
  "procedure_name": "Greenlam",
  "record_code": 191879,
  "category": "Street",
  "submit_time": "9/4/2020",
  "staff": [
    "Covington",
    "Tucknutt",
    "Alp"
  ],
  "access": true
}, {
  "rowNumber": 6,
  "procedure_name": "Subin",
  "record_code": 508147,
  "category": "Trail",
  "submit_time": "4/29/2020",
  "staff": [
    "Mabb",
    "Freckingham",
    "Aherne"
  ],
  "access": true
}, {
  "rowNumber": 7,
  "procedure_name": "Sonsing",
  "record_code": 287970,
  "category": "Point",
  "submit_time": "8/16/2020",
  "staff": [
    "Thombleson",
    "Aldham",
    "Liddle"
  ],
  "access": false
}, {
  "rowNumber": 8,
  "procedure_name": "Tresom",
  "record_code": 826050,
  "category": "Circle",
  "submit_time": "2/9/2021",
  "staff": [
    "Thombleson",
    "Yakubovich",
    "Buck"
  ],
  "access": false
}, {
  "rowNumber": 9,
  "procedure_name": "Cookley",
  "record_code": 229556,
  "category": "Road",
  "submit_time": "3/18/2021",
  "staff": [
    "Brewett",
    "de Guise",
    "Somerset"
  ],
  "access": true
}, {
  "rowNumber": 10,
  "procedure_name": "Alphazap",
  "record_code": 654043,
  "category": "Park",
  "submit_time": "2/9/2021",
  "staff": [
    "Runnicles",
    "Dodridge",
    "Paull"
  ],
  "access": true
}, {
  "rowNumber": 11,
  "procedure_name": "Lotlux",
  "record_code": 537304,
  "category": "Alley",
  "submit_time": "4/19/2020",
  "staff": [
    "Lafferty",
    "Iffe",
    "Lacknor"
  ],
  "access": true
}, {
  "rowNumber": 12,
  "procedure_name": "Tampflex",
  "record_code": 489618,
  "category": "Circle",
  "submit_time": "12/1/2020",
  "staff": [
    "Schuster",
    "Lindelof",
    "Faucett"
  ],
  "access": true
}, {
  "rowNumber": 13,
  "procedure_name": "Gembucket",
  "record_code": 105268,
  "category": "Pass",
  "submit_time": "1/22/2021",
  "staff": [
    "Leahair",
    "Danser",
    "Lynagh"
  ],
  "access": false
}, {
  "rowNumber": 14,
  "procedure_name": "Zontrax",
  "record_code": 255065,
  "category": "Point",
  "submit_time": "8/14/2020",
  "staff": [
    "Carnachen",
    "Bewshaw",
    "Ginner"
  ],
  "access": false
}, {
  "rowNumber": 15,
  "procedure_name": "Rank",
  "record_code": 761449,
  "category": "Lane",
  "submit_time": "7/17/2020",
  "staff": [
    "Rosetti",
    "Ortet",
    "Yakushkin"
  ],
  "access": false
}, {
  "rowNumber": 16,
  "procedure_name": "Stringtough",
  "record_code": 835695,
  "category": "Terrace",
  "submit_time": "11/15/2020",
  "staff": [
    "Aisman",
    "Croley",
    "Jeffree"
  ],
  "access": true
}, {
  "rowNumber": 17,
  "procedure_name": "Daltfresh",
  "record_code": 569692,
  "category": "Hill",
  "submit_time": "1/4/2021",
  "staff": [
    "Micco",
    "Scrymgeour",
    "Trimble"
  ],
  "access": false
}, {
  "rowNumber": 18,
  "procedure_name": "Sonsing",
  "record_code": 775603,
  "category": "Hill",
  "submit_time": "10/23/2020",
  "staff": [
    "Polden",
    "Swinburn",
    "Enderson"
  ],
  "access": false
}, {
  "rowNumber": 19,
  "procedure_name": "Namfix",
  "record_code": 199306,
  "category": "Way",
  "submit_time": "3/2/2021",
  "staff": [
    "Pepineaux",
    "Rust",
    "Veryan"
  ],
  "access": false
}, {
  "rowNumber": 20,
  "procedure_name": "Cardguard",
  "record_code": 941803,
  "category": "Circle",
  "submit_time": "11/25/2020",
  "staff": [
    "Slight",
    "Cowoppe",
    "Carnaman"
  ],
  "access": false
}]
