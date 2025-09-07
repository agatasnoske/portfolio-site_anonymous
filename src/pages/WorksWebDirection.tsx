import { useState } from 'react'
import { WorksWebDirectionData } from './WorksWebDirectionData'

    export default function WorksWebDirection() {
    const [selectedItem, setSelectedItem] = useState<null | typeof WorksWebDirectionData[0]>(null)

    return (
    <>
        <ul className="worksitems fade">
        {WorksWebDirectionData.map((item, index) => (
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
                <div className="modal-img">
                <div className="modal-img-wrap">
                    <div className="modal-img-item-pc">
                        <img src={selectedItem.image1} alt="" />
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
