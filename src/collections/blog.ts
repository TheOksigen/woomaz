import {Block, CollectionConfig, RichTextField} from "payload";
import {
    AlignFeature, BlockquoteFeature,
    BlocksFeature, BoldFeature, ChecklistFeature,
    convertLexicalToMarkdown,
    editorConfigFactory,
    FixedToolbarFeature, HeadingFeature, HorizontalRuleFeature, IndentFeature, InlineCodeFeature,
    InlineToolbarFeature, ItalicFeature,
    lexicalEditor, LinkFeature,
    OrderedListFeature, ParagraphFeature,
    RelationshipFeature, StrikethroughFeature, SubscriptFeature, SuperscriptFeature, UnderlineFeature,
    UnorderedListFeature, UploadFeature,
} from "@payloadcms/richtext-lexical";
import {SerializedEditorState} from "@payloadcms/richtext-lexical/lexical";

const BannerBlock: Block = {
    slug: 'Banner',
    fields: [
        {
            name: 'type',
            type: 'select',
            defaultValue: 'info',
            options: [
                {label: 'Info', value: 'info'},
                {label: 'Warning', value: 'warning'},
                {label: 'Error', value: 'error'},
            ],
        },
        {
            name: 'content',
            type: 'richText',
            editor: lexicalEditor({
                features: ({defaultFeatures, rootFeatures}) => [
                    ...defaultFeatures,
                ]
            }),
        },
    ],
    jsx: {
        /**
         * Convert from Lexical -> MDX:
         * <Banner type="..." >child content</Banner>
         */
        export: ({fields, lexicalToMarkdown}) => {
            const props: any = {}
            if (fields.type) {
                props.type = fields.type
            }

            return {
                children: lexicalToMarkdown({editorState: fields.content}),
                props,
            }
        },
        /**
         * Convert from MDX -> Lexical:
         */
        import: ({children, markdownToLexical, props}) => {
            return {
                type: props?.type,
                content: markdownToLexical({markdown: children}),
            }
        },
    },
}

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
            // required: true,
            localized: true,
            editor: lexicalEditor({
                features: ({defaultFeatures}) => [
                    ...defaultFeatures,
                    BoldFeature(), ItalicFeature(), UnderlineFeature(), StrikethroughFeature(), SubscriptFeature(), SuperscriptFeature(), InlineCodeFeature(), ParagraphFeature(), HeadingFeature(), AlignFeature(), IndentFeature(), UnorderedListFeature(), OrderedListFeature(), ChecklistFeature(), LinkFeature(), RelationshipFeature(), BlockquoteFeature(), UploadFeature(), HorizontalRuleFeature(), InlineToolbarFeature(),
                    FixedToolbarFeature(),
                    BlocksFeature({
                        blocks: [BannerBlock],
                    }),
                ]
            }),
            // hooks: {
            //     afterRead: [
            //         ({ siblingData, siblingFields }) => {
            //             const data: SerializedEditorState =
            //                 siblingData['content']
            //
            //             if (!data) {
            //                 return ''
            //             }
            //
            //             const markdown = convertLexicalToMarkdown({
            //                 data,
            //                 editorConfig: editorConfigFactory.fromField({
            //                     field: siblingFields.find(
            //                         (field) =>
            //                             'name' in field && field.name === 'content',
            //                     ) as RichTextField,
            //                 }),
            //             })
            //
            //             return markdown
            //         },
            //     ],
            //     beforeChange: [
            //         ({ siblingData }) => {
            //             // Ensure that the markdown field is not saved in the database
            //             delete siblingData['markdown']
            //             return null
            //         },
            //     ],
            // },
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
                {label: 'Frontend Development', value: 'frontend-development'},
                {label: 'Backend Development', value: 'backend-development'},
                {label: 'Mobile Development', value: 'mobile-development'},
                {label: 'UI/UX Design', value: 'ui-ux-design'},
                {label: 'Web Development', value: 'web-development'},
                {label: 'Digital Marketing', value: 'digital-marketing'},
                {label: 'E-commerce', value: 'e-commerce'},
                {label: 'Technology', value: 'technology'},
                {label: 'Business', value: 'business'},
                {label: 'Innovation', value: 'innovation'},
            ],
        },
        {
            name: 'status',
            type: 'select',
            required: true,
            defaultValue: 'draft',
            options: [
                {label: 'Draft', value: 'draft'},
                {label: 'Published', value: 'published'},
                {label: 'Archived', value: 'archived'},
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