import { Controller } from "stimulus"
import FireBase from "firebase"

const firebase = FireBase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGEING_SENDER_ID
})

const database = firebase.database()

export default class extends Controller {
    static get targets() {
        return [ 
            "name", "furi", "attend", 
            "yubin", "email", "tel", "allergy", "other"
        ]
    }

    submit () {
        database.ref('invite').push({
            name    :   this.nameTarget.value,
            furi    :   this.furiTarget.value,
            attend  :   this.attendTarget.value,
            yubin   :   this.yubinTarget.value,
            email   :   this.emailTarget.value,
            tel     :   this.telTarget.value,
            allergy :   this.allergyTarget.value,
            other   :   this.otherTarget.value
        })
    }
}