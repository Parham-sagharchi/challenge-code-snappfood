import { useRouter } from "next/router";
import LandingWrapper from "@/views/landing/style";
import Button from "@/core/components/Button";
import { useAppDispatch } from "@/store/hooks";
import { setLoading } from "@/store/slice/loader";

const Landing = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleButtonClick = async () => {
    dispatch(setLoading(true));
    router.push("/restaurant");
  };

  return (
    <LandingWrapper>
      <Button
        data-cy="enter-button"
        onClick={handleButtonClick}
        title="Enter to Vendor Pages"
      />
    </LandingWrapper>
  );
};

export default Landing;
