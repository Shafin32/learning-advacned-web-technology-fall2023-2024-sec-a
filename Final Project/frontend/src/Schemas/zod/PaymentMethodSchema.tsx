import {z} from 'zod'

export const PaymentMethodSchema = z.object({
        cardno: z
        .string()
        .min(1, "Card Number is required") 
        .min(8, "Card Number has minimum 8 digit")
        .max(16, "Card Number has max 16 digit"), 

        cvc: z
        .string()
        .length(3, "CVC must has 8 number"),

        expdate: z
        .string()
        .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
         message: 'Expiration date must be in MM/YY format'
        })

})

export default PaymentMethodSchema;

