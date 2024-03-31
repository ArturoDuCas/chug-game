interface IResponse {
    success: boolean;
    error?: any;
    data?: any;
}

export const responseSuccess = (data: any): IResponse => ({
    success: true,
    data,
})

export const responseError = (error: any): IResponse => ({
    success: false,
    error,
})