'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createSubmission } from '@/sanity/lib/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Forward } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import { Textarea } from './ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(5, {
    message: 'Message must be at least 5 characters.',
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const {
    setFocus,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await createSubmission(values);

    if (res) {
      toast.success('Message sent!');
      form.reset();
    } else {
      toast.error('Something went wrong.');
    }
  }

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
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
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
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
              <FormLabel className="sr-only">Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Message" className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="default" type="submit" className="group" disabled={isSubmitting}>
          Send
          <Forward className="ml-2 w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
        </Button>
      </form>
    </Form>
  );
}
