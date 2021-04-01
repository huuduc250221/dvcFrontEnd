import React from 'react';
import { useSelector } from 'react-redux'
import { Button, Table } from 'antd'

const UnapproveProcedure = () => {
    const {profile} = useSelector(state => state.user)
    const {loading, record, err} = useSelector(state => state.records)



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
          title: 'Mã thủ tục',
          dataIndex: 'procedureID',
          key: 'procedureID'
        },
        {
          title: 'Thời gian nộp',
          dataIndex: 'filed_time',
          key: 'filed_time'
        },
        {
          title: 'Thời gian hẹn',
          dataIndex: 'appointment_time',
          key: 'appointment_time'
        },
        {
          title: 'Thời gian tiếp nhận',
          dataIndex: 'complete_time',
          key: 'complete_time'
        },
        {
          title: 'Hành động',
          render:<Button>Tiếp nhận</Button>
        }
      ]

    return (
        <div>
            <Table
                columns={columns}
                dataSource={record}
            />
        </div>
    );
};

export default UnapproveProcedure;