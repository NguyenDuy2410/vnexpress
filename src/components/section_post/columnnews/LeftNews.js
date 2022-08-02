import React from "react";
import classNames from "classnames/bind";
import style from "./LeftNews.module.scss";
import News from "./News";
const cls = classNames.bind(style);
function LeftNews() {
    return (
        <div className={cls("LeftNews")}>
            <News
                title={"26 năm tìm nguồn cội của cô gái Pháp gốc Việt"}
                image="/image/cogai.jpg"
                description={
                    "Thấy người phụ nữ dắt theo một đứa trẻ tiến lại gần, giới thiệu tên, Emma Kiener đứng bật dậy, ôm chầm rồi nấc lên nghẹn ngào."
                }
            />
            <News
                title={"Nỗi ám ảnh mang tên Apple và TikTok"}
                image={"/image/smartphone.jpg"}
                description={
                    "Khi lý giải tình hình kinh doanh đi xuống trong quý II/2022, hàng loạt ông lớn công nghệ như Google, Meta, Snap... nhắc đến hai cái tên Apple và TikTok."
                }
            />
            <News
                title={
                    "Hoa hậu Đoàn Thu Thủy phủ nhận từng dùng chất kích thích"
                }
                image={"/image/hoahau.jpg"}
                description={
                    "Hoa hậu Thể thao Việt Nam 2022 Đoàn Thu Thủy bác bỏ tin đồn cô từng hút bóng cười, cho biết theo đuổi lối sống lành mạnh."
                }
            />
            <News
                title={"Messi, Neymar giúp PSG đoạt Siêu Cup Pháp"}
                image={"/image/messi.jpg"}
                description={
                    "Lionel Messi và Neymar góp ba bàn, khi PSG hạ Nantes 4-0 ở trận tranh Siêu Cup Pháp tối 31/7."
                }
            />
            <News
                title={
                    "Học thuyết hải quân mới của Nga coi Mỹ, NATO là 'mối đe dọa chính'"
                }
                image={"/image/haiquan.jpg"}
                description={
                    'Học thuyết hải quân mới được ông Putin ký coi chiến lược của Mỹ nhằm "thống trị các đại dương" và xu hướng mở rộng NATO là mối đe dọa với Nga.'
                }
            />
            <News
                title={"Man Utd hoà khi Ronaldo trở lại"}
                image={"/image/cr7.png"}
                description={
                    "Cristiano Ronaldo đá một hiệp, khi Man Utd hoà CLB Tây Ban Nha Rayo Vallecano 1-1 trong trận giao hữu cuối cùng trước mùa giải mới, tối 31/7. "
                }
            />
            <News
                title={"Nguy cơ gì khi dịch chồng dịch?"}
                image={"/image/bacsi.jpg"}
                description={
                    "Sốt xuất huyết, cúm A, Covid-19... đều có chiều hướng gia tăng nhưng lại tác động lên từng nhóm người khác nhau và đã có vaccine nên không quá đáng ngại, theo các chuyên gia. "
                }
            />

            <News
                title={"SLNA khiếu nại trọng tài sau khi thua Hà Nội"}
                image={"/image/dabong.jpg"}
                description={
                    "HLV Nguyễn Huy Hoàng bất bình khi trọng tài Nguyễn Mạnh Hải rút thẻ đỏ và thổi phạt đền với SLNA, trong trận thua ngược Hà Nội ở vòng 10 V-League 2022."
                }
            />
            <News
                title={"Giám đốc CDC Cà Mau bị bắt vì liên quan Việt Á"}
                image={"/image/congan.jpg"}
                description={
                    "Ông Đặng Hải Đăng, Giám đốc CDC tỉnh Cà Mau, cùng cấp dưới và một trưởng phòng thuộc Sở Y tế bị bắt tạm giam vì liên quan Việt Á. "
                }
            />
            <News
                title={"Vũ khí phương Tây cản đà tiến của Nga ở Donbass"}
                image={"/image/vukhi.jpg"}
                description={
                    "Những binh sĩ ở tiền tuyến miền đông Ukraine cho biết các loại vũ khí tinh vi của phương Tây giúp họ đẩy lùi đà tiến công của quân Nga."
                }
            />
        </div>
    );
}

export default LeftNews;
