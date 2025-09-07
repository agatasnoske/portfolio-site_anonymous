import { useState } from 'react'
import { WorksFrontUiuxData } from './WorksFrontUiuxData'

export default function WorksFrontUiux() {
  const [selectedItem, setSelectedItem] = useState<null | typeof WorksFrontUiuxData[0]>(null)

  return (
    <>
      <ul className="worksitems fade">
        {WorksFrontUiuxData.map((item, index) => (
          <li key={index} onClick={() => setSelectedItem(item)}>
            <div
              className="img"
              style={{ backgroundImage: `url(${item.thumb})` }}
            ></div>
            <div className="txt">
              <p>{item.title}</p>
              <span>{item.description}</span>
            </div>
          </li>
        ))}
      </ul>

      {/* モーダル */}
      {selectedItem && (
        <div className="modal-overlay fade" onClick={() => setSelectedItem(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/* <button className="close" onClick={() => setSelectedItem(null)}>×</button> */}
            <div className="modal-txt">
                <div className="modal-title">
                    <h2>{selectedItem.title}</h2>
                    <div className="modal-period">
                        <p>制作期間：</p>
                        <p>{selectedItem.period}</p>
                    </div>
                </div>
              <div className="modal-skill">
                <div className="modal-skill-item">
                    <p>使用言語</p>
                    <span>{selectedItem.languange}</span>
                </div>
                <div className="modal-skill-item">
                    <p>デザインツール</p>
                    <span>{selectedItem.tool}</span>
                </div>
                <div className="modal-skill-item">
                    <p>進捗管理</p>
                    <span>{selectedItem.version}</span>
                </div>
                <div className="modal-skill-item">
                    <p>サーバー</p>
                    <span>{selectedItem.server}</span>
                </div>
                <div className="modal-skill-item">
                    <p>CMS</p>
                    <span>{selectedItem.cms}</span>
                </div>
                <div className="modal-skill-item">
                    <p>その他</p>
                    <span>{selectedItem.other}</span>
                </div>
              </div>
              <div className="modal-img">
                <div className="modal-img-wrap">
                    <div className="modal-img-item-pc">
                        <span>PC</span>
                        <img src={selectedItem.image1} alt="" />
                    </div>
                    <div className="modal-img-item-tab">
                        <span>TAB</span>
                        <img src={selectedItem.image2} alt="" />
                    </div>
                    <div className="modal-img-item-sp">
                        <span>SP</span>
                        <img src={selectedItem.image3} alt="" />
                    </div>
                </div>
              </div>
              <p className="modal-description" dangerouslySetInnerHTML={{ __html: selectedItem.description }}></p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
