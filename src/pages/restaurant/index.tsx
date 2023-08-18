import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Loader from "@/core/components/Loader";

const Restaurant = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state?.loaderSlice?.isLoading);

  if (isLoading) return <Loader />;
  return <p>Restaurant Page</p>;
};
export default Restaurant;
