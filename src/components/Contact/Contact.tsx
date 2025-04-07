import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
    firstname: z.string().min(2, {
        message: "Le prénom doit être au minimum de 4 caractères"
    }).max(10, { message: "Le prénom ne peut contenir plus de 10 caractères" }),
    lastname: z.string().min(4, {
        message: "Le nom de famille doit être au minimum de 4 caractères"
    }).max(12, { message: "Le nom de famille ne peut contenir plus de 12 caractères" }),
    mail: z.string().email({ message: "L'adresse email n'est pas valide" }),
    phone_number: z.number().gt(9, { message: 'Le numero de téléphone doit comporter 10 chiffres' }),
    content: z.string().optional(),
})


export default function Contact() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            mail: "",
            content: ""
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <section>
            <h2 id="contact" className="text-center text-white font-bold text-2xl my-10">Travaillons ensemble</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="firstname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Prénom :</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="ex: Martin" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Nom de famille :</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="ex: Dupont" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="mail"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Email :</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="ex: amine@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone_number"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Numéro de téléphone :</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="06.06.06.06.06" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Message :</FormLabel>
                                <FormControl>
                                    <Textarea className="text-white" placeholder="" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="bg-headerViolet" type="submit">Envoyer</Button>
                </form>
            </Form>
        </section>

    )
} 