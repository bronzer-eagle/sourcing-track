import {StitchClient} from "mongodb-stitch";

class DbController {

    constructor() {
        this.client = new StitchClient('sourcingtrack-zjdxn');
        this.db = this.client.service('mongodb', 'mongodb-atlas').db('sourcingTrack1');
    }

    init() {
        console.log('MongoDB initialization...');

        this._setDefaults();

        return this.connectToDB();
    }

    _setDefaults() {

    }

    connectToDB() {
        return this.client.login()
            .then(() => {
                console.log('MongoDB connected.')
            })
            .catch(err => {
                console.error(err)
            });
    }
}

export default DbController;