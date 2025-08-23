import { CollectionConfig } from "payload";
import {
    AlignFeature, BlockquoteFeature,
    BoldFeature, ChecklistFeature,
    convertLexicalToMarkdown,
    convertMarkdownToLexical,
    editorConfigFactory,
    FixedToolbarFeature, HeadingFeature, 
    HorizontalRuleFeature, IndentFeature, 
    InlineCodeFeature, InlineToolbarFeature, 
    ItalicFeature, lexicalEditor, LinkFeature,
    OrderedListFeature, ParagraphFeature,
    RelationshipFeature, StrikethroughFeature, 
    SubscriptFeature, SuperscriptFeature, 
    UnderlineFeature, UnorderedListFeature, 
    UploadFeature,
} from "@payloadcms/richtext-lexical";

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
            name: 'contentMode',
            type: 'radio',
            label: 'Content Mode',
            defaultValue: 'richtext',
            options: [
                { label: 'Rich Text Editor', value: 'richtext' },
                { label: 'Markdown Input', value: 'markdown' },
            ],
            admin: {
                layout: 'horizontal',
                description: 'Choose how you want to input your content',
            },
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
            localized: true,
            admin: {
                condition: (data) => data?.contentMode === 'richtext',
            },
            editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                    ...defaultFeatures,
                    BoldFeature(), 
                    ItalicFeature(), 
                    UnderlineFeature(), 
                    StrikethroughFeature(), 
                    SubscriptFeature(), 
                    SuperscriptFeature(), 
                    InlineCodeFeature(), 
                    ParagraphFeature(), 
                    HeadingFeature(), 
                    AlignFeature(), 
                    IndentFeature(), 
                    UnorderedListFeature(), 
                    OrderedListFeature(), 
                    ChecklistFeature(), 
                    LinkFeature(), 
                    RelationshipFeature(), 
                    BlockquoteFeature(), 
                    UploadFeature(), 
                    HorizontalRuleFeature(), 
                    InlineToolbarFeature(),
                    FixedToolbarFeature(),
                ]
            }),
        },
        {
            name: 'markdownContent',
            type: 'textarea',
            label: 'Markdown Content',
            admin: {
                condition: (data) => data?.contentMode === 'markdown',
                description: 'Write or paste your markdown content here',
                rows: 20,
            },
            hooks: {
                beforeChange: [
                    async ({ value, siblingData, req }) => {
                        if (value && value.trim() && siblingData?.contentMode === 'markdown') {
                            try {
                                const editorConfig = await editorConfigFactory.default({
                                    config: req.payload.config,
                                });

                                const lexicalJSON = convertMarkdownToLexical({
                                    editorConfig,
                                    markdown: value,
                                });

                                // Rich text content field-ini yeniləyirik
                                siblingData.content = lexicalJSON;
                                
                                console.log('Markdown converted to rich text successfully');
                            } catch (error) {
                                console.error('Markdown to rich text conversion error:', error);
                            }
                        }
                        
                        return value; // Markdown content-i də saxlayırıq
                    },
                ],
                afterRead: [
                    async ({ siblingData, req }) => {
                        // Əgər rich text content varsa və markdown mode seçilibsə, markdown çıxart
                        if (siblingData?.content && siblingData?.contentMode === 'markdown') {
                            try {
                                const editorConfig = await editorConfigFactory.default({
                                    config: req.payload.config,
                                });

                                const markdown = convertLexicalToMarkdown({
                                    data: siblingData.content,
                                    editorConfig,
                                });
                                
                                return markdown;
                            } catch (error) {
                                console.error('Rich text to markdown conversion error:', error);
                                return '';
                            }
                        }
                        
                        return '';
                    },
                ],
            },
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