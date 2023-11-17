import { useSelector } from "react-redux/es/hooks/useSelector";

export const useAppearance = () => useSelector(state => state.appearance)