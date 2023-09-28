import { useSelector } from "react-redux/es/hooks/useSelector";

export const useAccount = () => useSelector(state => state.auth.currentAccount)
export const useAccounts = () => useSelector(state => state.auth.accounts)