import './Profile.scss'

function Profile() {
  return (
    <div className="main fade">
        <div className="left-col">
        </div>
        <div className="right-col">
            <div className="name">
                <p>S.A.</p>
            </div>
            <div className="txt">
                <div className="date">
                    1992.12.2  静岡出身
                </div>
                <p>大学在学中に独学でデザインスキル・コーディングスキルを学び、数年間、IT系のベンチャー企業で勤務。<br />
                SES（システムエンジニアリングサービス）業態での業務を経験しその後フリーランスに転向いたしました。<br />
                <br />
                主にフロントエンドエンジニア、UI/UXデザイナーとして業務する傍ら、<br />
                展覧会のブースデザインや、イベント、個展のフライヤー、instagram広告用のイラスト作成、<br />
                Youtube投稿用の動画や結婚式ムービーの制作などの技術を習得し、業務経験を詰みました。<br />
                <br />
                自分自身を型にはめず、柔軟に知識や経験を積んでいきたいという意識を持って、日々作業に取り組んでいます。<br />
                <br />
                <br />
                趣味は料理、筋トレ、格闘技観戦、古着屋巡り
                </p>
                <div className="skill-list">
                    <p className="ttl">SKILL LIST</p>
                    <ul>
                        <li>
                            <p>Tool</p>
                            <p>Figma , Adobe ( Illustrator , Photoshop , XD)</p>
                        </li>
                        <li>
                            <p>Language</p>
                            <p>html5 , css3 , Javascript (jQuery , Vue , Next.js , React) , Typescript , PHP</p>
                        </li>
                        <li>
                            <p>Video</p>
                            <p>Adobe Premiere pro , Adobe After Effect</p>
                        </li>
                        <li>
                            <p>Development</p>
                            <p>Windows , MacOS , Linux</p>
                        </li>
                        <li>
                            <p>Github Account</p>
                            <p>text</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)
}
export default Profile