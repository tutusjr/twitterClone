import { Popover } from "@headlessui/react"
import { useAccount } from "../../../../store/auth/hooks"

export default function Account () {

    const account = useAccount ()
    return (
        <div className="mt-auto ">
               <Popover>
                <Popover.Button 
                    className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex text-left"
                >
                    <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
                
                <div className=" mx-3 text-[15px]">
                    <h6 className="font-bold">{account.fullname}</h6>
                    <div className="text-[#71767b]">
                    @{account.username}
                </div>
                </div>
                </Popover.Button>
                <Popover.Panel>
                    acilacak yer
                </Popover.Panel>
               </Popover>
            </div>
    )
}