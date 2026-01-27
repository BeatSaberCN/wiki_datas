import Layout from "@theme/Layout";
import { ReactNode } from "react";
import modcard from "@site/src/components/modcard"
export default function Page(): ReactNode{
    return <Layout>
        <h1 style={{margin:"24px 32px"}}>PC可用模组</h1>
        <modcard.所有模组卡片 平台="pc" />
    </Layout>
}