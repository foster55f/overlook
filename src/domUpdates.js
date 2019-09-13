import $ from "jquery";

export default {
    getDate() {
        var today = new Date()
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        return mm + '/' + dd + '/' + yyyy;
        
    },

    appendDateToDom(date) {
        $(`h1`).text(date);
    }
}