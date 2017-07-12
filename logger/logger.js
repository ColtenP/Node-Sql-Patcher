module.exports = class Logger {

    constructor(sender, browser) {
        this.sender = sender || "Unknown";
        if(!browser)
            this.chalk = require('chalk');
    }

    getSender() {
        if(this.chalk) {
            return `${this.chalk.blue('[')}` +
                `${this.chalk.red(this.sender)}` +
                `${this.chalk.blue(']')}`;
        } else
            return `[${this.sender}]`;
    }

    log(message) {
        console.log(`${this.getSender()} ${message}`);
    }

    info(message) {
        if(this.chalk) {
            console.info(`${this.getSender()} ${this.chalk.cyan(message)}`);
        } else {
            console.info(`${this.getSender()} ${message}`);
        }
    }

    warn(message) {
        if(this.chalk) {
            console.info(`${this.getSender()} ${this.chalk.yellow(message)}`);
        } else {
            console.info(`${this.getSender()} ${message}`);
        }
    }

    error(message) {
        if(this.chalk) {
            console.info(`${this.getSender()} ${this.chalk.red(message)}`);
        } else {
            console.info(`${this.getSender()} ${message}`);
        }
    }

    success(message) {
        if(this.chalk) {
            console.info(`${this.getSender()} ${this.chalk.green(message)}`);
        } else {
            console.info(`${this.getSender()} ${message}`);
        }
    }
}
