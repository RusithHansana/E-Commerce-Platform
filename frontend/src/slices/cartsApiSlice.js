import { apiSlice } from "./apiSlice";
import { CARTS_URL } from "../constants";

export const cartsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCarts: builder.query({
      query: () => CARTS_URL,
      providesTags: ["Cart"],
    }),
    getCartById: builder.query({
      query: (id) => `/carts/${id}`,
      providesTags: ["Cart"],
    }),
    addCart: builder.mutation({
      query: (cart) => ({
        url: CARTS_URL,
        method: "POST",
        body: cart,
      }),
      invalidatesTags: ["Cart"],
    }),
    updateCart: builder.mutation({
      query: ({ id, ...cart }) => ({
        url: `/carts/${id}`,
        method: "PUT",
        body: cart,
      }),
      invalidatesTags: ["Cart"],
    }),
    deleteCart: builder.mutation({
      query: (id) => ({
        url: `/carts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetCartsQuery,
  useGetCartByIdQuery,
  useAddCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = cartsApiSlice;
