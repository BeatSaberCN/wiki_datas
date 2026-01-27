import Link from "@docusaurus/Link"

export function ModsBtn(){
    return <div className="card shadow--t1" style={{
            width:'240px',
            margin: "16px",
            backgroundColor: 'var(--ifm-color-info-lightest)'
        }}>
        <div className="card__header">
            <h3>模组清单</h3>
        </div>
        <div className="card__body">
            <p>
            仅包含主流的游戏版本的一份模组清单。
            </p>
        </div>
        <div className="card__footer">
            <a href="./mods/pcmods" style={{display:"inline-block", margin:"4px", padding:"2px", width:"fit-content"}} className="button button--link">PC模组清单</a>
            <a href="./mods/qmods" style={{display:"inline-block", margin:"4px", padding:"2px", width:"fit-content"}} className="button button--link">一体机模组清单</a>
        </div>
    </div>
}

export function 游戏指南(){
    return <div className="card shadow--t1" style={{
            width:'240px',
            margin: "16px",
            backgroundColor: 'var(--ifm-color-info-lightest)'
        }}>
        <div className="card__header">
            <h3>游戏指南</h3>
        </div>
        <div className="card__body">
            <p>
            随便写的
            </p>
        </div>
        <div className="card__footer">
            <Link href="/docs/gaming-guide" style={{display:"inline-block", margin:"4px", padding:"2px", width:"fit-content"}} className="button button--link">指南主页</Link>
        </div>
    </div>
}