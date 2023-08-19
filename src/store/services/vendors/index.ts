import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
    RespGetVendors,
    PayloadGetVendors,
} from "@/types/store/services/vendors";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

export const vendorsApi = createApi({
    reducerPath: "vendorsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getVendors: builder.query<RespGetVendors, PayloadGetVendors>({
            query: ({ page, pageSize, lat, long }) =>
                `vendors-list?page=${page}&page_size=${pageSize}&lat=${lat}&long=${long}`,
            serializeQueryArgs: (args) => {
                const { endpointName } = args;
                return endpointName;
            },
            merge: (currentCache: any, newItems: any) => {
                currentCache?.data?.finalResult.push(...newItems?.data?.finalResult);
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
        }),
    }),
});

export const { useGetVendorsQuery } = vendorsApi;
