import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { useGetVendorsQuery } from "@/store/services/vendors";
import Loader from "@/core/components/Loader";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const Vendors = dynamic(() => import("@/views/restaurant/vendors"));

const Restaurant = () => {
  const { t } = useTranslation();
  const { page, pageSize, lat, long } = useAppSelector(
    (state) => state?.generalSlice
  );

  const [vendorsData, setVendorsData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const { data, isFetching, isLoading } = useGetVendorsQuery<any>({
    page,
    pageSize,
    lat,
    long,
  });

  useEffect(() => {
    if (!isFetching && data) {
      setHasMore(data?.data?.finalResult?.length > 0);
      setVendorsData(data?.data?.finalResult ?? []);
    }
  }, [data, isFetching]);

  if (isLoading) return <Loader />;
  return (
    <>
      {vendorsData?.length > 0 ? (
        <Vendors hasMore={hasMore} vendorsData={vendorsData} />
      ) : (
        <p>{t("No vendor to show")}</p>
      )}
    </>
  );
};

export default Restaurant;
