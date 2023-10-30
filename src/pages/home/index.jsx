import StickyHeader from "../../components/sticky-header";
import Tab from "../../components/tab";

export default function Home() {
    return(
        <>
            <StickyHeader title="Anasayfa"/>
            <Tab>
            <Tab.items>
                <Tab.item id="for-you">
                    1.tab
                </Tab.item>
                <Tab.item id="followings">
                    2.tab
                </Tab.item>
                <Tab.content id="for-you">
                    1.content
                </Tab.content>
                <Tab.content id="followings">
                    2.content
                </Tab.content>
            </Tab.items>
            </Tab> 
        </>
    )
}