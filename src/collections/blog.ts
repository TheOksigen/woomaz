import { CollectionConfig } from "payload";

export const Blog: CollectionConfig = {
    slug: "blog",
    fields: [
        { name: "name", type: "text" },
        { name: "description", type: "richText" }
    ]
}