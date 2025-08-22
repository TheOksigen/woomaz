import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import { Media } from '../collections/media'
import { Blog } from '../collections/blog'


export default buildConfig({
    editor: lexicalEditor(),
    collections: [Media, Blog],
    secret: process.env.PAYLOAD_SECRET || '',
    db: mongooseAdapter({ url: process.env.DATABASE_URI || "", }),
    sharp,
})