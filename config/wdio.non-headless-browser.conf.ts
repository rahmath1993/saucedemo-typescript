import { config } from './wdio.shared'
import 'dotenv/config'

const browser = <string>process.env.BROWSER?.toLowerCase()

config.capabilities = [
    {
        maxInstances: 1,
        browserName: browser,
    },
]

exports.config = config