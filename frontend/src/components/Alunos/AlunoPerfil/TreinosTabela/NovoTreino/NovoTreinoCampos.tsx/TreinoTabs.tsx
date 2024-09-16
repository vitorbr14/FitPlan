// import React from "react";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import {
//   FieldArrayWithId,
//   UseFieldArrayAppend,
//   UseFieldArrayReplace,
//   UseFormReturn,
// } from "react-hook-form";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { novoTreinoSchema } from "../NovoTreino";
// import { z } from "zod";

// type TypeTreinoTabs = {
//   form: UseFormReturn<z.infer<typeof novoTreinoSchema>>;
//   label: string;
//   replace: UseFieldArrayReplace<
//     {
//       objetivo: "1" | "2" | "3" | "4";
//       frequencia: "1" | "2" | "3" | "4" | "5";
//       inicio: Date;
//       exercises: {
//         exercise_name: string;
//         sets: string;
//         reps: string;
//         rest: string;
//         muscle_group: string;
//         workout_group: string;
//       }[];
//       vencimento?: Date | undefined;
//     },
//     "exercises"
//   >;
//   append: UseFieldArrayAppend<
//     {
//       exercises: {
//         exercise_name: string;
//         sets: string;
//         reps: string;
//         rest: string;
//         muscle_group: string;
//         workout_group: string;
//       }[];
//       objetivo: "1" | "2" | "3" | "4";
//       frequencia: "1" | "2" | "3" | "4" | "5";
//       inicio: Date;
//       vencimento?: Date | undefined;
//     },
//     "exercises"
//   >;
//   fields: FieldArrayWithId<
//     {
//       objetivo: "1" | "2" | "3" | "4";
//       frequencia: "1" | "2" | "3" | "4" | "5";
//       inicio: Date;
//       exercises: {
//         exercise_name: string;
//         muscle_group: string;
//         sets: string;
//         reps: string;
//         rest: string;
//         workout_group: string;
//       }[];
//       vencimento?: Date | undefined;
//     },
//     "exercises",
//     "id"
//   >[];
// };
// export const TreinoTabs = ({
//   label,
//   fields,
//   form,
//   append,
//   replace,
// }: TypeTreinoTabs) => {
//   return (
//     <div>
//       <Dialog>
//         <DialogTrigger asChild>
//           <Button variant="outline">Edit Profile</Button>
//         </DialogTrigger>
//         <DialogContent className="">
//           <Button
//             onClick={() =>
//               replace([
//                 {
//                   exercise_name: "",
//                   muscle_group: "afii",
//                   reps: "",
//                   rest: "",
//                   sets: "",
//                   workout_group: "",
//                 },
//               ])
//             }
//           >
//             Teste?
//           </Button>
//           {fields.map((field, index) => {
//             return (
//               <>
//                 <div className="col-span-3">
//                   <FormField
//                     control={form.control}
//                     name={`exercises.${index}.exercise_name`}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Exercicio</FormLabel>
//                         <FormControl>
//                           <Input placeholder="shadcn" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 <div className="col-span-1">
//                   <FormField
//                     control={form.control}
//                     name={`exercises.${index}.sets`}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Series</FormLabel>
//                         <FormControl>
//                           <Input placeholder="shadcn" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 <div className="col-span-1">
//                   <FormField
//                     control={form.control}
//                     name={`exercises.${index}.reps`}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Reps</FormLabel>
//                         <FormControl>
//                           <Input placeholder="shadcn" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 <div className="col-span-1">
//                   <FormField
//                     control={form.control}
//                     name={`exercises.${index}.rest`}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Descanso</FormLabel>
//                         <FormControl>
//                           <Input placeholder="shadcn" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 <div className="col-span-2">
//                   <FormField
//                     control={form.control}
//                     defaultValue="teste"
//                     name={`exercises.${index}.workout_group`}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Grupo</FormLabel>
//                         <FormControl>
//                           <Input {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//               </>
//             );
//           })}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// // import { TabsContent } from "@/components/ui/tabs";
// // import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// // import { AddExercicioBtn } from "../AddExercicioBtn";
// // import {
// //   FieldArrayWithId,
// //   UseFieldArrayAppend,
// //   UseFormReturn,
// // } from "react-hook-form";
// // import { z } from "zod";
// // import { novoTreinoSchema } from "../NovoTreino";
// // import {
// //   FormControl,
// //   FormField,
// //   FormItem,
// //   FormLabel,
// //   FormMessage,
// // } from "@/components/ui/form";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";

// // import { GoPlus } from "react-icons/go";
// // const treinos = ["treino_a", "treino_b", "treino_c", "treino_d", "treino_e"];

// // const gruposMusculares = [
// //   {
// //     grupo: "Peito",
// //     exercicios: ["Supino reto", "Crucifixo", "Supino inclinado"],
// //   },
// //   {
// //     grupo: "Costas",
// //     exercicios: ["Puxada alta", "Remada baixa", "Barra fixa"],
// //   },
// //   {
// //     grupo: "Pernas",
// //     exercicios: ["Agachamento", "Leg press", "Extensão de pernas"],
// //   },
// //   {
// //     grupo: "Ombros",
// //     exercicios: [
// //       "Desenvolvimento com halteres",
// //       "Elevação lateral",
// //       "Elevação frontal",
// //     ],
// //   },
// //   {
// //     grupo: "Bíceps",
// //     exercicios: ["Rosca direta", "Rosca alternada", "Rosca concentrada"],
// //   },
// //   {
// //     grupo: "Tríceps",
// //     exercicios: ["Tríceps pulley", "Tríceps francês", "Mergulho em paralelas"],
// //   },
// //   {
// //     grupo: "Abdômen",
// //     exercicios: ["Abdominal infra", "Prancha", "Abdominal supra"],
// //   },
// //   {
// //     grupo: "Panturrilhas",
// //     exercicios: [
// //       "Elevação de panturrilha em pé",
// //       "Elevação de panturrilha sentado",
// //     ],
// //   },
// // ];

// // type TypeTreinoTabs = {
// //   form: UseFormReturn<z.infer<typeof novoTreinoSchema>>;
// //   append: UseFieldArrayAppend<
// //     {
// //       exercises: {
// //         exercise_name: string;
// //         sets: string;
// //         reps: string;
// //         rest: string;
// //         muscle_group: string;
// //         workout_group: string;
// //       }[];
// //       objetivo: "1" | "2" | "3" | "4";
// //       frequencia: "1" | "2" | "3" | "4" | "5";
// //       inicio: Date;
// //       vencimento?: Date | undefined;
// //     },
// //     "exercises"
// //   >;

// //   fields: FieldArrayWithId<
// //     {
// //       objetivo: "1" | "2" | "3" | "4";
// //       frequencia: "1" | "2" | "3" | "4" | "5";
// //       inicio: Date;
// //       exercises: {
// //         exercise_name: string;
// //         muscle_group: string;
// //         sets: string;
// //         reps: string;
// //         rest: string;
// //         workout_group: string;
// //       }[];
// //       vencimento?: Date | undefined;
// //     },
// //     "exercises",
// //     "id"
// //   >[];
// // };

// // export const TreinoTabs = ({ fields, form, append }: TypeTreinoTabs) => {
// //   return (
// //     <>
// //       {treinos.map((treino, index) => (
// //         <TabsContent value={treino}>
// //           <Dialog>
// //             <DialogTrigger className="w-full">
// //               <AddExercicioBtn />
// //             </DialogTrigger>
// //             <DialogContent className="max-w-3xl">
// //               <div className="grid grid-cols-12 gap-2">
// //                 {fields.map((field) => {
// //                   return (
// //                     <>
// //                       <div className="col-span-3">
// //                         <FormField
// //                           control={form.control}
// //                           name={`exercises.${index}.muscle_group`}
// //                           render={({ field }) => (
// //                             <FormItem>
// //                               <FormLabel>Grupo Muscular</FormLabel>
// //                               <Select
// //                                 onValueChange={field.onChange}
// //                                 defaultValue={field.value}
// //                               >
// //                                 <FormControl>
// //                                   <SelectTrigger>
// //                                     <SelectValue placeholder="Select a verified email to display" />
// //                                   </SelectTrigger>
// //                                 </FormControl>
// //                                 <SelectContent>
// //                                   {gruposMusculares.map((grupo) => {
// //                                     return (
// //                                       <SelectItem value={grupo.grupo}>
// //                                         {grupo.grupo}
// //                                       </SelectItem>
// //                                     );
// //                                   })}
// //                                 </SelectContent>
// //                               </Select>

// //                               <FormMessage />
// //                             </FormItem>
// //                           )}
// //                         />
// //                       </div>

// //                       <div className="col-span-3">
// //                         <FormField
// //                           control={form.control}
// //                           name={`exercises.${index}.exercise_name`}
// //                           render={({ field }) => (
// //                             <FormItem>
// //                               <FormLabel>Exercicio</FormLabel>
// //                               <FormControl>
// //                                 <Input placeholder="shadcn" {...field} />
// //                               </FormControl>

// //                               <FormMessage />
// //                             </FormItem>
// //                           )}
// //                         />
// //                       </div>

// //                       <div className="col-span-1">
// //                         <FormField
// //                           control={form.control}
// //                           name={`exercises.${index}.sets`}
// //                           render={({ field }) => (
// //                             <FormItem>
// //                               <FormLabel>Series</FormLabel>
// //                               <FormControl>
// //                                 <Input placeholder="shadcn" {...field} />
// //                               </FormControl>

// //                               <FormMessage />
// //                             </FormItem>
// //                           )}
// //                         />
// //                       </div>

// //                       <div className="col-span-1">
// //                         <FormField
// //                           control={form.control}
// //                           name={`exercises.${index}.reps`}
// //                           render={({ field }) => (
// //                             <FormItem>
// //                               <FormLabel>Reps</FormLabel>
// //                               <FormControl>
// //                                 <Input placeholder="shadcn" {...field} />
// //                               </FormControl>

// //                               <FormMessage />
// //                             </FormItem>
// //                           )}
// //                         />
// //                       </div>

// //                       <div className="col-span-1">
// //                         <FormField
// //                           control={form.control}
// //                           name={`exercises.${index}.rest`}
// //                           render={({ field }) => (
// //                             <FormItem>
// //                               <FormLabel>Descanso</FormLabel>
// //                               <FormControl>
// //                                 <Input placeholder="shadcn" {...field} />
// //                               </FormControl>

// //                               <FormMessage />
// //                             </FormItem>
// //                           )}
// //                         />
// //                       </div>

// //                       <div className="col-span-2">
// //                         <FormField
// //                           control={form.control}
// //                           defaultValue="teste"
// //                           name={`exercises.${index}.workout_group`}
// //                           render={({ field }) => (
// //                             <FormItem>
// //                               <FormLabel>Grupo</FormLabel>
// //                               <FormControl>
// //                                 <Input placeholder={treino} {...field} />
// //                               </FormControl>

// //                               <FormMessage />
// //                             </FormItem>
// //                           )}
// //                         />
// //                       </div>

// //                       <div className="col-span-1">
// //                         <div className="mt-8">
// //                           <Button
// //                             className="w-full"
// //                             onClick={() =>
// //                               append({
// //                                 exercise_name: "",
// //                                 muscle_group: "",
// //                                 reps: "",
// //                                 rest: "",
// //                                 sets: "",
// //                                 workout_group: `${treino}`,
// //                               })
// //                             }
// //                           >
// //                             <GoPlus className="text-2xl" />
// //                           </Button>
// //                         </div>
// //                       </div>
// //                     </>
// //                   );
// //                 })}
// //               </div>
// //             </DialogContent>
// //           </Dialog>
// //         </TabsContent>
// //       ))}
// //     </>
// //   );
// // };
