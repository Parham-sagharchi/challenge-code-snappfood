import { useEffect, memo } from "react";
import useOnScreen from "@/core/hooks/useOnScreen";
import VendorCard from "@/core/components/VendorCard";
import VendorsWrapper from "@/views/restaurant/vendors/vendors.style";
import { setPage } from "@/store/slice/general";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const Vendors = memo(({ hasMore, vendorsData }: any) => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state?.generalSlice?.page);
  const { measureRef, isIntersecting, observer } = useOnScreen();

  useEffect(() => {
    if (isIntersecting && hasMore) {
      dispatch(setPage(page + 1));
      observer.disconnect();
    }
  }, [isIntersecting, hasMore]);

  return (
    <VendorsWrapper>
      {vendorsData.map((vendorData: any, index: number) => {
        if (vendorData?.type === "VENDOR") {
          if (index === vendorsData.length - 1) {
            return (
              <VendorCard
                mesureRef={measureRef}
                key={vendorData?.data?.id}
                vendorData={vendorData}
              />
            );
          }
          return (
            <VendorCard
              key={vendorData?.data?.id}
              vendorData={vendorData?.data}
            />
          );
        }
      })}
    </VendorsWrapper>
  );
});

Vendors.displayName = "Vendors";

export default Vendors;
