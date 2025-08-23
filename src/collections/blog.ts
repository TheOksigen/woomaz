import { CollectionConfig } from "payload";
import { lexicalEditor, } from "@payloadcms/richtext-lexical";


export const Blog: CollectionConfig = {
    slug: "blog",
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'author', 'publishedAt', 'status'],
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            localized: true,
        },

        {
            name: 'content',
            type: 'richText',
            required: true,
            localized: true,
            // editor: lexicalEditor({
            //     features: ({ defaultFeatures }) => [
            //         ...defaultFeatures,
            //     ]
            // }),
        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'author',
            type: 'relationship',
            relationTo: 'users',
            required: true,
        },
        {
            name: 'tags',
            type: 'select',
            hasMany: true,
            options: [
                { label: 'Frontend Development', value: 'frontend-development' },
                { label: 'Backend Development', value: 'backend-development' },
                { label: 'Mobile Development', value: 'mobile-development' },
                { label: 'UI/UX Design', value: 'ui-ux-design' },
                { label: 'Web Development', value: 'web-development' },
                { label: 'Digital Marketing', value: 'digital-marketing' },
                { label: 'E-commerce', value: 'e-commerce' },
                { label: 'Technology', value: 'technology' },
                { label: 'Business', value: 'business' },
                { label: 'Innovation', value: 'innovation' },
            ],
        },
        {
            name: 'status',
            type: 'select',
            required: true,
            defaultValue: 'draft',
            options: [
                { label: 'Draft', value: 'draft' },
                { label: 'Published', value: 'published' },
                { label: 'Archived', value: 'archived' },
            ],
        },
        {
            name: 'publishedAt',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: 'dayAndTime',
                },
            },
        },

    ],
    timestamps: true,
}