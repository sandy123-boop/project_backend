class ApiResponse {
    constructor(ststusCode, data, message = "Success"){
        this.statusCode = ststusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}

export { ApiResponse };