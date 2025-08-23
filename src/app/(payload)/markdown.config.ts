import type {SerializedEditorState} from '@payloadcms/richtext-lexical/lexical'

import {
    convertLexicalToMarkdown,
    editorConfigFactory,
} from '@payloadcms/richtext-lexical'
import {SanitizedConfig} from "payload";

// Your richtext data here
const data: SerializedEditorState = {}
const config: SanitizedConfig = {} as SanitizedConfig

 const markdown = convertLexicalToMarkdown({
    data,
    editorConfig: await editorConfigFactory.default({
        config, // <= make sure you have access to your Payload Config
    }),
})