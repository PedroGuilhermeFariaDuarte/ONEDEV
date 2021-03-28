import * as Yup from "yup"

export async function handlerValidationUserData(schema: Yup.AnyObjectSchema, data: Object | Array<Object>, refForm: any) {
    try {
        schema.validate(data, {
            abortEarly: false
        })
            .then(_resolve => {
                refForm?.current?.submitForm()
            })
            .catch(error => {
                const validationErrors = {}
                if (error instanceof Yup.ValidationError) {
                    error.inner.forEach(err => {
                        // @ts-ignore
                        validationErrors[ err.path ] = err.message
                    })
                }
                handlerSetError(validationErrors, refForm)
            })
    } catch (error) {
        console.log(`PictorValidationError: ${error.message}`)
    }
}


function handlerSetError(errors: Object, refForm: any) {
    // @ts-ignore
    if (Object.keys(errors)?.length() > 0) {
        // @ts-ignore
        refForm.current.setErrors(errors)
    }
}
