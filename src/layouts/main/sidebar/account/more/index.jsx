import classNames from "classnames";
import { useAccount, useAccounts } from "../../../../../store/auth/hooks";
import { setCurrentAccount } from "../../../../../store/auth/actions";

// eslint-disable-next-line react/prop-types
export default function More({close}) {
  const currentAccount = useAccount();
  const accounts = useAccounts();

  return (
    <div>
      {accounts.map((account, index) => (
        <button
          type="button"
          disabled={currentAccount.id === account.id}
          onClick={() => {
            setCurrentAccount(account);
            close();
          }}
          key={index}
          className={classNames(
            "py-3 px-4 flex text-left items-center w-full transition-colors",
            {
              "hover:bg-[#eff3f41a]": currentAccount.id !== account.id,
            }
          )}
        >
          <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />
          <div className=" mx-3 flex-1">
            <h6 className="font-bold">{account.fullname}</h6>
            <div className="text-[color:var(--color-base-secondary)]">@{account.username}</div>
          </div>
          <div className="mr-2 ml-3">
            {currentAccount.id === account.id && "👍"}
          </div>
        </button>
      ))}
      <div className="h-px bg-[#2f3336] my-3" />
      <button className="py-3 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full font-bold">
        Var Olan Bir Hesap Ekle
      </button>
      <button className="py-3 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full font-bold">
        Hesap Ekle
      </button>
      <button className="py-3 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full font-bold">
        <div className=" max-w-[228px]">
          @{currentAccount.username} hesabından çıkış yap
        </div>
      </button>
    </div>
  );
}
