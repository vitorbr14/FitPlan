import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import useEmblaCarousel from "embla-carousel-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { planoSchema } from "../MatriculaTabela";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { planosType } from "@/types/types";
import { useState } from "react";
import { NovaMatriculaPlanos_Skeleton } from "./NovaMatriculaPlanos_Skeleton";
import Cookies from "js-cookie";
type TypePropsNovaMatriculaPlanos = {
  form: UseFormReturn<z.infer<typeof planoSchema>>;
};
export const NovaMatriculaPlanos = ({ form }: TypePropsNovaMatriculaPlanos) => {
  const [slide, setSlides] = useState(3);
  const fetchPlanos = async (): Promise<planosType[]> => {
    const fetiching = await axios.get(
      `${import.meta.env.VITE_API_URL}aluno/planos`,
      { headers: { Authorization: `Bearer ${Cookies.get("jwt")}` } }
    );

    return fetiching.data;
  };

  const { data, isPending } = useQuery({
    queryKey: ["planos"],
    queryFn: () => fetchPlanos(),
  });

  if (isPending) return <NovaMatriculaPlanos_Skeleton />;
  return (
    <div className="relative">
      <FormField
        control={form.control}
        name="plano"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Escolha um plano para o aluno.</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className=""
                value={form.watch("plano")}
              >
                <Swiper
                  className=""
                  modules={[Pagination]}
                  preventClicks={false}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                    },
                  }}
                >
                  {data?.map((plano) => (
                    <SwiperSlide className="">
                      <div
                        key={plano.id}
                        className=" bg-gray-100 rounded-xl h-full"
                      >
                        <div className="flex justify-between p-2  h-full items-center ">
                          <div className="w-16 text-left">
                            <div className="text-sm font-bold">
                              {plano.plano}
                            </div>
                            <div className="font-semibold">
                              {plano.plano_price} R$
                            </div>
                          </div>
                          <div className="">
                            <FormItem className=" h-8 ">
                              <FormControl>
                                <RadioGroupItem value={plano.id.toString()} />
                              </FormControl>
                            </FormItem>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
