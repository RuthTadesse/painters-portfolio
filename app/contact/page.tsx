"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/page-header";
import { ContactLinks } from "@/components/contact-links";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Phone, Mail, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your API
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      form.reset();
      alert("Message sent successfully!");
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <PageHeader
        title="Contact"
        description="Get in touch with the Designer or inquire about Designs"
      />

      <div className="flex gap-8 mt-12">
        <div className="flex flex-col gap-8 h-full w-1/2">
          
          <Card className="relative flex-1 bg-background/50 max-h-fit overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-4 bg-white blur-2xl opacity-30"></div>
            <CardHeader className="pb-5">
              <CardTitle className="font-serif mb-2.5">
                Reach out to the Designer
              </CardTitle>
              <CardDescription>
                Call us to get more information about My Designs and services.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row items-start text-sm justify-between gap-1">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:+251900575923"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      +251 900575923
                    </a>
                    <a
                      href="tel:+251949983399"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      +251 949983399
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground mt-1" />
                  <p className="text-muted-foreground">
                    Monday - Saturday: 9:00 AM - 6:00 PM
                    <br />
                    
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a
                    href="hundienahom@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hundienahom@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="relative bg-background/50 max-h-fit overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-4 bg-white blur-2xl opacity-30"></div>
            <CardHeader>
              <CardTitle className="text-xl font-serif">
                Send a Message
              </CardTitle>
            </CardHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Your email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Message subject" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>

                <CardFooter className="flex flex-col space-y-4">
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </div><Card className="flex-1 bg-background/50 max-h-fit overflow-hidden relative">
            <div className="absolute top-0 right-0 w-full h-4 bg-white blur-2xl opacity-30"></div>
            <CardHeader>
              <CardTitle className="font-serif">Get in Touch</CardTitle>
              <CardDescription>
                Interested in building a Brand or have questions on how to
                rebrand? Fill out the form or reach out through social media.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactLinks />
            </CardContent>
          </Card>
      </div>
    </main>
  );
}
