import { Col, Row } from 'antd';
import React from 'react';
import AreaChartComponent from './AreaChart';
import LayoutChart from './LayoutChart';
import PieChartEmployee from './PieChartEmployee'

const GeneralPage = () => {
    return (
        <Row gutter={16}>
            <Col>
                <LayoutChart title='Quý một'>
                    <div style={{display:'flex'}}>
                        <LayoutChart title='Tháng 1' >
                            <PieChartEmployee />
                        </LayoutChart>
                        <LayoutChart title='Tháng 2' >
                            <PieChartEmployee />
                        </LayoutChart>
                        <LayoutChart title='Tháng 3' >
                            <PieChartEmployee />
                        </LayoutChart>
                    </div>
                </LayoutChart>
            </Col>
            <Col>
                <LayoutChart title='Thống kê' >
                    <AreaChartComponent />
                </LayoutChart>
            </Col>


        </Row>
    );
};

export default GeneralPage;