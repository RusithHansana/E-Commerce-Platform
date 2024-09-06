import { apiSlice } from "./apiSlice";
import { PAYMENTS_URL } from "../constants";

export const paymentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    redirectToPayment: builder.query({
      query: (amount) => ({
        url: `${PAYMENTS_URL}/${amount}`,
      }),
    }),
  }),
});

export const { useRedirectToPaymentQuery } = paymentApiSlice;
