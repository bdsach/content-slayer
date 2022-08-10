import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    thumbnail: {
      type: "string",
      description: "The thumbnail of the post",
      required: true,
    },
    category: {
      type: "string",
      description: "The category of the post",
      require: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "The Tag of the post",
      required: true,
    },
    createdAt: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    published: {
      type: "boolean",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/post/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
});
