const { baseApi } = require("./baseApi");

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (blogData) => ({
        url: "/blogs",
        method: "POST",
        body: blogData,
      }),
      invalidatesTags: ["Blog"],
    }),
    getAllBlog: builder.query({
      query: (query) => ({
        url: "/blogs",
        method: "GET",
        params: query,
      }),
      providesTags: ["Blog"],
    }),
    getSingleBlog: builder.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),
    updateBlog: builder.mutation({
      query: ({ id, data }) => ({
        url: `/blogs/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetAllBlogQuery,
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
