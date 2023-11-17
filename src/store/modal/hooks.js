import { useSelector } from "react-redux/es/hooks/useSelector";

export const useModal = () => useSelector(state => state.modal.modal)