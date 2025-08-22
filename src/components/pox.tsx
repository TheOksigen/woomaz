    import { getPayload } from 'payload'
    import React from 'react'
    import config from "@payload-config"

    const Pox = async () => {
        const payload = await getPayload({ config })
        const data = await payload.find({ collection: "media" })
        console.log(data)
        return (
            <div>Pox</div>
        )
    }

    export default Pox