import React, { useEffect, useState } from 'react'

import { Table, Form, Input, Button, TreeSelect } from 'antd'

export default function ThutucTable({ data, onChangeFilter }) {
  const tableName = 'thutuc'


  const [pageState, setPageState] = useState({
    tableName: tableName,
    filter: { name: '', field: '' },
    page: {
      pageSize: 10,
      pageNumber: 1
    }
  })

  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id'
    }, {
      title: 'Tên thủ tục',
      dataIndex: 'title',
      key: 'title',
      render:<a href='#'>gì đố</a>
    }, 
    {
      title:'Lĩnh vực',
      dataIndex:'field',
      key:'field'
    },
  ]

//   let dataSource = data.map(item => ({
//     id: item.id,
//     title: item.title
//   }))

  useEffect(() => {
    onChangeFilter(pageState)
  })

  function onPageChange(pageNumber, pageSize) {
    setPageState({
      ...pageState,
      page: {
        pageNumber,
        pageSize
      }
    })
  }

  function onSubmitField(value) {
    setPageState({...pageState,
    filter:{value}})
  }


  return <>
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      onFinish={onSubmitField}
      >

      <Form.Item label="Input" name='name'>
        <Input />
      </Form.Item>

      <Form.Item label="TreeSelect" name='field'>
        <TreeSelect
          treeData={[
            {
              title: 'Light',
              value: 'light',
              children: [
                {
                  title: 'Bamboo',
                  value: 'bamboo',
                },
              ],
            },
          ]}
        />
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
      pagination={{ total:data.total, onChange: onPageChange }}
    />
  </>
}