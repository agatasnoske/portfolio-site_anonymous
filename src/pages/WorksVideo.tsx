import { useState } from 'react'
import { WorksVideoData } from './WorksVideoData'

export default function WorksVideo() {
  const [selectedItem, setSelectedItem] = useState<null | typeof WorksVideoData[0]>(null)

  return (
    <>
      <ul className="worksitems fade">
        {WorksVideoData.map((item, index) => (
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
                    <p>制作ツール</p>
                    <span>{selectedItem.tool}</span>
                </div>
                <div className="modal-skill-item">
                    <p>その他</p>
                    <span>{selectedItem.other}</span>
                </div>
              </div>
              <div className="modal-img">
                <div className="modal-img-wrap">
                    <div className="modal-img-item-pc">
                        <img src={selectedItem.image1} alt="" />
                    </div>
                    <div className="modal-img-item-tab">
                        <img src={selectedItem.image2} alt="" />
                    </div>
                    <div className="modal-img-item-sp">
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
