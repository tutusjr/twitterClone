import classNames from "classnames";
import { useAccount, useAccounts } from "../../../../../store/auth/hooks";

export default function More() {

    const currentAccount = useAccount();
  const accounts = useAccounts();

  return (
    <div>
      {accounts.map((account, index) => (
        <button key={index} className={classNames(
            "py-3 px-4 flex text-left  w-full transition-colors",{
                "hover:bg-[#eff3f41a]" : currentAccount.id !== account.id
            }
        )}>
          <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
          <div className=" mx-3 text-[15px]">
            <h6 className="font-bold">{account.fullname}</h6>
            <div className="text-[#71767b]">@{account.username}</div>
          </div>
        </button>
      ))}
    </div>
  );
}
