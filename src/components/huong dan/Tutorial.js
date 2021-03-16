import { Steps } from "antd";

const { Step } = Steps;

export default function HuongDan() {
    const data = [
        "Công dân chọn lĩnh vực Dịch vụ công để thực hiện các Dịch vụ công trực tuyến.",
        "Đăng ký thông tin với hệ thống gồm: Họ và tên, ngày sinh, số chứng minh nhân dân/hộ chiếu ...",
        "Công dân điền toàn bộ thông tin cần thiết trên biểu mẫu hồ sơ điện tử và đính kèm các tệp bản quét/bản mềm đối với những văn bản, tài liệu đi kèm của hồ sơ.",
        "Sau khi điền đầy đủ thông tin, Công Dân nhấn vào nút Gửi hồ sơ để gửi hồ sơ điện tử. Hồ sơ sẽ được chuyển về đơn vị tiếp nhận và được đơn vị này sẽ thẩm định, xử lý và giải quyết hồ sơ.",
        "Thông tin về quá trình giải quyết hồ sơ sẽ được cập nhật trực tiếp trên trang dịch vụ công để Công dân biết. Khi hồ sơ hợp lệ và đầy đủ điều kiện giải quyết, Công dân sẽ nhận được thông báo về thời gian giải quyết hồ sơ.",
        "Trường hợp hồ sơ chưa đầy đủ hoặc có yêu cầu khác, Công dân sẽ được hướng dẫn chi tiết để bổ sung hoàn chỉnh hồ sơ."
    ];

    return (
        <>
            <h2>Hướng dẫn</h2>
            <Steps progressDot current={6} direction="vertical">
                <Step title={data[0]} />
                <Step title={data[1]} />
                <Step title={data[2]} />
                <Step title={data[3]} />
                <Step title={data[4]} />
                <Step title={data[5]} />
            </Steps>
        </>
    );
}