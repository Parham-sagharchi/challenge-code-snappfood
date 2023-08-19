import { useRouter } from "next/router";
import LandingWrapper from "@/views/landing/landing.style";
import Button from "@/core/components/Button";

const Landing = () => {
  const router = useRouter();
  return (
    <LandingWrapper>
      <Button
        data-cy="enter-button"
        onClick={() => {
          router.push("/restaurant");
        }}
        title="Enter to Vendor Pages"
      />
    </LandingWrapper>
  );
};

export default Landing;
