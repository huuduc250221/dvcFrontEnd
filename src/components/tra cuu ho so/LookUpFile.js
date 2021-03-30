import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'
import { fetchData } from '../../redux/reducers/FetchDataReducer'


const tableName = 'tracuuhoso'

function LookUpFile({ data, onChangeFilter }) {
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
        onChangeFilter(pageState.tableName)
        console.log('useEffects')
    }, [onChangeFilter])

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

    return <div>
        <Table
            columns={columns}
            dataSource={dataSource}
            expandable={{ expandedRowRender:() =>   <ExpandeTable expandData={dataSource.slice(1,4)} /> }}
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
        pagination={{position:['none','none']}}
        />
    </div>
}

const mapStateToProps = state => ({
    data: state.loadData
})

const mapDispatchToProps = dispatch => ({
    onChangeFilter: (arg) => dispatch(fetchData(arg))
})

export default connect(mapStateToProps, mapDispatchToProps)(LookUpFile)