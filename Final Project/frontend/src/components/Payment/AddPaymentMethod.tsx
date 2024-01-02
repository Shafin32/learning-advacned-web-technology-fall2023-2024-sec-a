'use client'
import PaymentMethodSchema from "@/Schemas/zod/PaymentMethodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { POSTToken } from "../ApiCalls/POSTMethod";

type input = z.infer<typeof PaymentMethodSchema>

export const AddPaymentMethod = () => {
    const router = useRouter();

    const {register, formState : {errors}, handleSubmit, reset} = useForm<input>({
        resolver: zodResolver(PaymentMethodSchema)
    });
    
    const processForm = async (formData:input) => {
        console.log(formData);

        const Response = await POSTToken('http://localhost:3000/payment/method/add',formData);
        if(Response.error){
            alert(Response.error);
        }
        else{
            alert(Response.message);
            router.push("/profile");
        }

    }

    return(
    <form method="post" onSubmit={handleSubmit(processForm)}>   
        <label htmlFor="cardno">Card No: </label>
        <input id="cardno" className="rounded-lg" type="text" placeholder="Type Card No" {...register('cardno')}/> 
        {errors.cardno?.message && <p className='text-red-400 text-sm'>{errors.cardno.message}</p>}<br />

        <label htmlFor="cvc">CVC: </label>
        <input id="cvc" className="rounded-lg" type="text" placeholder="Type CVC" {...register('cvc')}/>
        {errors.cvc?.message && <p className="text-sm text-red-400">{errors.cvc.message}</p>}<br />
        
        <label htmlFor="expdate">Expire Date: </label>
        <input id="expdate" className="rounded-lg" type="text" placeholder="Exp Date" {...register('expdate')}/> 
        {errors.expdate?.message && <p className='text-red-400 text-sm'>{errors.expdate.message}</p>}<br />

        <button className="bg-orange-300 rounded-lg py-1 px-2" type="submit">Submit</button>
    </form>
    );
}