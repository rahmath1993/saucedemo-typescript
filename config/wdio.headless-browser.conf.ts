import { config } from './wdio.shared'
import 'dotenv/config'

const browser = <string>process.env.BROWSER?.toLowerCase()

if (browser == 'chrome') {
    config.capabilities = [
        {
            maxInstances: 3,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: ['--headless', '--disable-gpu', '--disable-dev-shm-usage'] }
        },
    ]
} else if (browser == 'firefox') {
    config.capabilities = [
        {
            maxInstances: 3,
            browserName: 'firefox',
            acceptInsecureCerts: true,
            'moz:firefoxOptions': {
                args: ['-headless', '--disable-gpu'] }
        },
    ]
}

exports.config = config