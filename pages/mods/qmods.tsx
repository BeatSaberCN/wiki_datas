import Layout from "@theme/Layout";
import { ReactNode } from "react";
import modcard from "@site/src/components/modcard"
import Link from "@docusaurus/Link";
export default function Page(): ReactNode{
    return <Layout>
        <div style={{margin:"24px 32px"}}>
            <h1>一体机可用模组</h1>
            {/* <Link href="/" style={{color:"gray"}}>回主页</Link> */}
            <div style={{height:"12px",width:"1px"}}></div>
            <modcard.所有模组卡片 平台="quest" />
        </div>
    </Layout>
}