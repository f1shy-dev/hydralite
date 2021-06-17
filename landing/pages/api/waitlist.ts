// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios'

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.json({
            success: false,
            message: 'Invalid Method',
        })
    }
    if (!req.body.email) {
        return res.json({
            success: false,
            message: 'No Email Provided.',
        })
    }

    const result = (
        await axios({
            method: 'POST',
            url: 'https://getwaitlist.com/api/v1/waitlists/submit',
            data: {
                api_key: process.env.GETWAITLIST_KEY,
                email: req.body.email,
                referral_link: 'https://www.hydralite.io',
            },
        })
    ).data
    if (!result) {
        console.error('Internal server error.')
        return res.json({
            success: false,
            message: 'Internal server error.',
        })
    }

    return res.json({
        success: true,
        data: result,
    })
}
