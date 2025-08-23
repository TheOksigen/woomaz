import sharp from 'sharp'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { Media } from '../collections/media'
import { Blog } from '../collections/blog'


const config =  buildConfig({
    collections: [Media, Blog],
    secret: process.env.PAYLOAD_SECRET || '',
    db: mongooseAdapter({ url: process.env.DATABASE_URI || "", }),
    sharp,


    plugins: [
        seoPlugin({
            collections: ['blog'],
            generateTitle: ({ doc }) => `woom.az — ${doc.title}`,
            generateDescription: ({ doc }) => doc.title
        })
    ]
});

export default config;