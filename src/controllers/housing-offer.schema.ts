import { z } from "zod";

export const ValidateHousingOfferSchema = z.object({
  title: z.string().min(2),
  city: z.string().min(2),
  price: z.string().min(2),
  type: z.string().min(2),
  owner: z.string().min(2),
  phone: z.string().min(4),
  email: z.string().email(),
  details: z.string().min(5)
});
