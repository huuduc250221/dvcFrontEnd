import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'



import { Table, Form, Button, Select, Input } from 'antd'
import { Link, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom'

const tableName = 'employeeTable'

export default function ThongKe() {

  const data = []

  const dataSource = data.data ? data.data.map((item, index) => ({
    key: index,
    rowNumber: item.rowNumber,
    title: {
      title: item.procedureTitle,
      href: item.id.$oid
    },
    level: item.level,
    online: item.online,
    office: item.office
  })) : []


  const columns = [
    {
      title: 'STT',
      dataIndex: 'rowNumber',
      key: 'rowNumber'
    }, {
      title: 'Tên nhân viên',
      dataIndex: 'title',
      key: 'title',
      render: (item) => {
        return <Link to={url + '/filedOption/' + item.href} >{item.title}</Link>
      }
    },
    // {
    //   title:'Phòng ban',
    //   dataIndex:''
    // },
    {
      title: 'Email',
      dataIndex: 'level',
      key: 'level'
    },
    {
        title:'SDT',
        dataIndex:'telephone',
        key:'telephone'
    },
    {
      title: 'Số hồ sơ hoàn thành',
      dataIndex:'',
      key:'completeRecord'
    }

  ]


  let { params } = useParams()
  const location = useLocation()
  let { path, url } = useRouteMatch()

  console.log(`path:${path},url:${url}`)



  const [pageState, setPageState] = useState({
    tableName: tableName,
    params: params,
    filter: { name: '', field: '' },
    page: {
      pageSize: 10,
      pageNumber: 1
    },
  })

  const history = useHistory()


  function onPageChange(pageNumber, pageSize) {
    setPageState({
      ...pageState,
      page: {
        pageNumber,
        pageSize
      }
    })
  }

  const onFinish = (value) => {
    if (value.params !== pageState.params) {
      setPageState({ ...pageState, params: value.params })
      history.push(`/tiepnhanhoso/${value.params}`)
    }
    else return
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
      <Form.Item name='search'>
        <Input placeholder='Tên nhân viên' />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Tìm kiếm
        </Button>
      </Form.Item>
    </Form>

    <Table
      loading={false}
      columns={columns}
      //   dataSource={dataSource}
      pagination={{ total: data.total, onChange: onPageChange }}
    />

  </div>
}
