
import ForYou from "./for-you";
import StickyHeader from "../../components/sticky-header";
import Tab from "../../components/tab";

export default function Home() {
    return(
        <>
            <Tab activeTab="for-you">
           <StickyHeader title="">
            <Tab.items>
                <Tab.item id="for-you">
                    Sana özel
                </Tab.item>
                <Tab.item id="followings">
                    Takip edilenler
                </Tab.item>
            </Tab.items>
            </StickyHeader>
                <Tab.content id="for-you">
                    <ForYou/>
                </Tab.content>
                <Tab.content id="followings">
                    2.content
                </Tab.content>
            </Tab> 
        </>
    )
}