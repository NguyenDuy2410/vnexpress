import React from "react";
import classNames from "classnames/bind";
import style from "./RightNews.module.scss";
import News from "./News";
import NewsRight from "./NewsRight";
const cls = classNames.bind(style);
function RightNews() {
    return (
        <div className={cls("RightNews")}>
            <div className={cls("business")}>
                <h3>Kinh Doanh</h3>
                <span>Quốc tế</span>
                <span>Doanh nghiệp</span>
                <span>Chứng khoán</span>
                <span>Bất động sản</span>
                <span>Bảo hiểm</span>
            </div>
            <div className={cls("news_post")}>
                <News
                    title={"Đào Trung Quốc ồ ạt vào Việt Nam"}
                    image={"/image/daotq.jpg"}
                    description={
                        "Đào Trung Quốc khá hút khách và được bán nhiều trên thị trường dù mặt hàng này ở Việt Nam đang vào mùa. "
                    }
                />
            </div>
            <NewsRight
                title={"Coteccons lỗ vì khoản nợ khó đòi từ Tân Hoàng Minh"}
                title2={"Nguồn cung văn phòng sắp tăng mạnh ở Thủ Thiêm"}
                title3={"PwC: Nhiều người tiêu dùng thích ứng với lạm phát"}
            />
            <div className={cls("business")}>
                <h3>Thể thao</h3>
                <span>Bóng đá</span>
                <span>Tennis</span>
                <span>Marathon</span>
                <span>Lịch thi đấu</span>
            </div>
            <div className={cls("news_post")}>
                <News
                    title={"Ronaldo bỏ về sớm"}
                    image={"/image/cr7.jpg"}
                    description={
                        "Tiền đạo Cristiano Ronaldo rời sân Old Trafford, ra về trước khi trận giao hữu giữa Man Utd và Rayo Vallecano ngày 31/7 kết thúc. "
                    }
                />
            </div>
            <NewsRight
                title={"Trợ lý CLB Hà Nội: 'Cầu thủ SLNA chơi phi thể thao'"}
                title2={"Viettel lại thua vì hậu vệ phản lưới"}
                title3={"Báo Pháp: 'Pau khởi đầu theo cách tệ nhất'"}
            />
            <div className={cls("business")}>
                <h3>Sức khỏe</h3>
                <span>Tin tức</span>
                <span>Dinh dưỡng</span>
                <span>Khỏe đẹp</span>
                <span>Các bệnh</span>
                <span>Vaccine</span>
                <span>Di chứng</span>
                <span>Covid</span>
                <span>Di truyền</span>
            </div>
            <div className={cls("news_post")}>
                <News
                    title={"Triệu chứng mới của bệnh đậu mùa khỉ"}
                    image={"/image/daumua.png"}
                    description={
                        "Một số bệnh nhân mắc đậu mùa khỉ ghi nhận sưng dương vật và đau trực tràng, các triệu chứng không thường xuất hiện trước đây. "
                    }
                />
            </div>
            <NewsRight
                title={"Vì sao phụ nữ tuổi trung niên dễ béo bụng?"}
                title2={"Bé gái bị bạo hành tổn thương thần kinh"}
                title3={"Hai triệu chứng Covid-19 đang dần biến mất"}
            />
            <div className={cls("business")}>
                <h3>Giải trí</h3>
                <span>Giới sao</span>
                <span>PhimNhạc</span>
                <span>Thời trang</span>
                <span>trangSách</span>
            </div>

            <div className={cls("news_post")}>
                <News
                    title={"Tài tử 'Thiên Long Bát Bộ' cưới"}
                    image={"/image/damcuoi.jpg"}
                    description={
                        'Dương Hựu Ninh, đóng Kiều Phong trong "Thiên Long Bát Bộ" 2021, tổ chức đám cưới với vợ làm ngoài ngành giải trí. '
                    }
                />
            </div>
            <NewsRight
                title={"Đoàn Thu Thủy đăng quang Hoa hậu Thể thao Việt Nam"}
                title2={"Fan tranh cãi về tân Hoa hậu Hoàn vũ Thái Lan"}
                title3={"Dàn sao dự chung kết Hoa hậu Thể thao Việt Nam"}
            />

            <div className={cls("business")}>
                <h3>Đời sống</h3>
                <span>Bài học sống</span>
                <span>Tổ ấm</span>
                <span>NhàTiêu dùng</span>
                <h4>Cooking</h4>
            </div>
            <div className={cls("news_post")}>
                <News
                    title={"Vượt qua giai đoạn hậu chia tay"}
                    image={"/image/lyhon.jpg"}
                    description={
                        "Khi vừa trải qua một cuộc chia tay, những tuần đầu tiên có thể không dễ dàng, thậm chí khiến bạn khó biết phải làm gì với bản thân. "
                    }
                />
            </div>
            <NewsRight
                title={"Cách làm bê xào sả ớt đơn giản"}
                title2={"Hiểm họa từ việc đăng hình con lên mạng xã hội"}
                title3={"Kiện bồ của chồng để đòi lại quà"}
            />
        </div>
    );
}

export default RightNews;
