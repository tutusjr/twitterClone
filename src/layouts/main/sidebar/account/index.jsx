import { Popover, Transition } from "@headlessui/react";
import { useAccount } from "../../../../store/auth/hooks";
import More from "./more";

export default function Account() {
  const account = useAccount();
  return (
    <div className="mt-auto ">
      <Popover className="relative">
        <Popover.Button className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex outline-none text-left items-center">
          <img
            src={account?.avatar}
            className="w-10 h-10 rounded-full"
            alt="none"
          />

          <div className=" mx-3 text-left">
            <h6 className="font-bold">{account?.fullname}</h6>
            <div className="text-[color:var(--color-base-secondary)]">@{account?.username}</div>
          </div>

          <svg className="ml-auto h-[1.172rem]" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            />
          </svg>
        </Popover.Button>
        <Transition
          enter="transition duration-300 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-300 ease-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <Popover.Panel className="absolute py-3 bottom-[90px] w-[300px] left-1/2 -translate-x-1/2 shadow-box bg-[color:var(--background-primary)] rounded-2xl overflow-hidden">
            {({ close }) => <More close={close} />}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
