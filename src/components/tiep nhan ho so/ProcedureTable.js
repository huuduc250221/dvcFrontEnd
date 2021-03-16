import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../redux/reducers/FetchDataReducer'


import { Table, Form, Input, Button, TreeSelect, Select } from 'antd'
import { Route, Switch, Link, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom'

import FiledOption from './FiledOption'

function ProcedureTable({ data, onChangeFilter }) {
  const tableName = 'tiepnhanhoso'
  console.log(data.data)
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
    filter: { name: '', field: '' },
    page: {
      pageSize: 10,
      pageNumber: 1
    },
  })

  const history = useHistory()

  useEffect(() => {
    onChangeFilter(pageState.tableName)
    console.log('useEffects')
  }, [onChangeFilter])

  // if (pageState.params !== params) {
  //   setPageState({ ...pageState, params: params })
  // }




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

      <Form.Item name='params' >
        <Select >
          <Select.Option value='todos'>todos</Select.Option>
          <Select.Option value='posts'>posts</Select.Option>
          <Select.Option value='albums'>albums</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Button">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={{ total: data.total, onChange: onPageChange }}
    />

  </div>
}



const mapStateToProps = state => ({
  data: state.loadData
})

const mapDispatchToProps = dispatch => ({
  onChangeFilter: (arg) => dispatch(fetchData(arg))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProcedureTable)
