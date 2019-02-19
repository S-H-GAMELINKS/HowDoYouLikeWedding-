import { Controller } from "stimulus"

export default class extends Controller {
    static get targets() {
        return [ 
            "name", "name_furi", "attend", 
            "yubin", "email", "tel", "allergy", "other"
        ]
    }
}