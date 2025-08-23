import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "2nogqs4e",
    dataset: 'production',
    useCdn: false
})