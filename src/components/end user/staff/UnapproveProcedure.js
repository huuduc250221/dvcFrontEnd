import React from 'react';
import { useSelector } from 'react-redux'
import { Table } from 'antd'

const UnapproveProcedure = () => {
    const {profile} = useSelector(state => state.user)




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
        }
    
      ]

      let dataSource = []


    return (
        <div>
            <Table
                columns={columns}
                dataSource={dataSource}
            />
        </div>
    );
};

export default UnapproveProcedure;