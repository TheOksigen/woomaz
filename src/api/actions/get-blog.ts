'use server'

import {getPayload} from 'payload'
import config from '@payload-config'

export async function getBlog() {
    const payload = await getPayload({config})

    try {
        return await payload.find({collection: "blog"});
    } catch (error) {
        throw new Error(`Error updating post: ${error.message}`)
    }
}