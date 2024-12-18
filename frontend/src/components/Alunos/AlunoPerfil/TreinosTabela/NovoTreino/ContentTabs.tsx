import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import React from "react";
import { FieldArrayWithId, UseFieldArrayAppend } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type ContentTabstType = {
  freq: string;

  formControl: any;
};

export const ContentTabs = ({
  freq,

  formControl,
}: ContentTabstType) => {
  return (
    <TabsContent value={freq}>
      {/* {fields.map((field, index) => {
        return (
          <FormField
            control={formControl.control}
            name={`exercicios.${index}.exercise_id`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        );
      })} */}

      {/* <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{freq}</DialogTitle>
            {fields.map((field, index) => {
              return (
                <div className="flex">
                  <FormField
                    control={formControl.control}
                    name={`exercicios.${index}.exercise_id`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formControl.control}
                    name={`exercicios.${index}.set_id`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              );
            })}
          </DialogHeader>
      
        </DialogContent>
      </Dialog> */}
    </TabsContent>
  );
};
