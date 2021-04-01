import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../redux/reducers/FetchDataReducer'


import { Table, Form, Button, Select, Input } from 'antd'
import { Link, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom'


export default function ProcedureTable() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.loadData)
  const tableName = 'tiepnhanhoso'
  console.log(data.data)

  useEffect(() => {
    dispatch(fetchData(pageState.tableName))
  }, [])

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

  const fieldValueOption = ["ATTP",
    "GiaDinh",
    "GDDT",
    "HTKTDT-KCN-KCNC",
    "KinhTe",
    "LaoDong",
    "ThuVien",
    "XayDung",
    "DoThi",
    "HoTich",
    "LTHH",]

  const fieldLableOption = [
    'An toàn thực phẩm',
    'Gia đình',
    'Giáo dục đào tạo',
    'HTKTDT-KCN-KCNC',
    'Kinh tế',
    'Lao động',
    'Thư viện',
    'Xây dựng',
    'Đô thị',
    'Hộ tịch',
    'Lưu thông hàng hóa'
  ]

  const fieldOption = fieldValueOption.map((item, index) => {
    return <Select.Option key={index} value={item} >{fieldLableOption[index]}</Select.Option>
  })
  console.log(fieldOption)

  const columns = [
    {
      title: 'STT',
      dataIndex: 'rowNumber',
      key: 'rowNumber'
    }, {
      title: 'Tên thủ tục',
      dataIndex: 'title',
      key: 'title',
      render: (item) => {
        return <Link to={url + '/filedOption/' + item.href} >{item.title}</Link>
      }
    },
    {
      title: 'Mức độ',
      dataIndex: 'level',
      key: 'level'
    }

  ]


  let { params } = useParams()
  const location = useLocation()
  let { path, url } = useRouteMatch()

  console.log(`path:${path},url:${url}`)



  const [pageState, setPageState] = useState({
    tableName: tableName,
    params: params,
    filter: { procudure_name: '', category: '' },
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
    // if (value.params !== pageState.params) {
    //   setPageState({ ...pageState, params: value.params })
    //   history.push(`/tiepnhanhoso/${value.params}`)
    // }
    // else return
      if(value!==pageState.filter) {
        setPageState({
          ...pageState,
          filter:value
        })
      }
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
        <Input placeholder='Tên thủ tục' />
      </Form.Item>
      <Form.Item name='fieldOption' >
        <Select>
          {fieldOption}
        </Select>
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
      dataSource={dataSource}
      pagination={{ total: data.total, onChange: onPageChange }}
    />

  </div>
}
