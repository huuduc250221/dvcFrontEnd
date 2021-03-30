import { BackTop } from 'antd'


const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
};

export default function BackToTop() {

    return <BackTop >
        <div style={style}>Up</div>
    </BackTop>
}