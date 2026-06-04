import { AppDataSource } from "../config/data-source";
import { HousingOffer } from "../entities/housing-offer.entity";

const housingOffers = [
  { title: "El Manar Residence, Block A", city: "Tunis", price: "180 TND/month", type: "University Residences", owner: "El Manar Residence Office", phone: "+216 71 210 884", email: "residence.elmanar@example.com", details: "Student room, secure residence, common area, close to El Manar campus." },
  { title: "Sahloul University Residence", city: "Sousse", price: "170 TND/month", type: "University Residences", owner: "Sahloul Residence Administration", phone: "+216 73 641 120", email: "sahloul.residence@example.com", details: "Double rooms, nearby university restaurant, transportation available." },
  { title: "Monastir University Residence", city: "Monastir", price: "160 TND/month", type: "University Residences", owner: "Monastir Housing Office", phone: "+216 73 004 231", email: "res.monastir@example.com", details: "Quiet residence with study spaces and quick access to faculties." },
  { title: "Residence Near ENIS Campus", city: "Sfax", price: "155 TND/month", type: "University Residences", owner: "Sfax Housing Service", phone: "+216 74 832 719", email: "residence.sfax@example.com", details: "Affordable solution near engineering institutions." },
  { title: "Shared Apartment in Ariana Center", city: "Ariana", price: "320 TND/month", type: "Shared Apartments", owner: "Nour Ben Ali", phone: "+216 58 902 441", email: "nour.landlord@example.com", details: "Private room, Wi-Fi, equipped kitchen, close to the metro." },
  { title: "Shared Apartment in Nabeul", city: "Nabeul", price: "260 TND/month", type: "Shared Apartments", owner: "Malek Trabelsi", phone: "+216 50 671 883", email: "malek.landlord@example.com", details: "Furnished apartment, quiet neighborhood, ideal for two students." },
  { title: "Shared Apartment Near Central University", city: "Tunis", price: "380 TND/month", type: "Shared Apartments", owner: "Yasmine Kacem", phone: "+216 55 210 884", email: "yasmine.landlord@example.com", details: "Modern apartment, shared living room, close to metro and shops." },
  { title: "Student Apartment in Central Sfax", city: "Sfax", price: "300 TND/month", type: "Shared Apartments", owner: "Karim Hédi", phone: "+216 24 832 719", email: "karim.landlord@example.com", details: "Two bedrooms, shared bills, close to public transport." },
  { title: "Host Family in La Marsa", city: "Tunis", price: "520 TND/month", type: "Host Families", owner: "Mansour Family", phone: "+216 29 410 554", email: "famille.mansour@example.com", details: "Private room, breakfast included, family-friendly environment." },
  { title: "Host Family in Sousse", city: "Sousse", price: "470 TND/month", type: "Host Families", owner: "Gharbi Family", phone: "+216 98 721 430", email: "famille.gharbi@example.com", details: "International welcome, help with settling in, secure neighborhood." },
  { title: "Host Family in Monastir", city: "Monastir", price: "430 TND/month", type: "Host Families", owner: "Jlassi Family", phone: "+216 22 118 904", email: "famille.jlassi@example.com", details: "Independent room, meals available, close to the medical faculty." },
  { title: "Host Family in Sfax", city: "Sfax", price: "420 TND/month", type: "Host Families", owner: "Chaari Family", phone: "+216 26 905 441", email: "famille.chaari@example.com", details: "Family atmosphere, nearby transport, ideal for first-year students." },
  { title: "Private Student Residence Lac 2", city: "Tunis", price: "650 TND/month", type: "Student Residences", owner: "Lac Student House Management", phone: "+216 31 445 009", email: "lac.studenthouse@example.com", details: "Equipped studio, gym, 24/7 security, coworking space." },
  { title: "Ariana Tech Student Residence", city: "Ariana", price: "540 TND/month", type: "Student Residences", owner: "Ariana Tech Residence", phone: "+216 36 802 661", email: "ariana.techres@example.com", details: "Studios and rooms, close to private schools, high-speed Wi-Fi." },
  { title: "Sousse Corniche Student Residence", city: "Sousse", price: "500 TND/month", type: "Student Residences", owner: "Corniche Student Living", phone: "+216 31 770 120", email: "corniche.living@example.com", details: "Furnished rooms, laundry room, common spaces, close to transport." }
];

export async function seedHousingOffers() {
  const repo = AppDataSource.getRepository(HousingOffer);

  for (const item of housingOffers) {
    const exists = await repo.findOne({ where: { title: item.title } });
    if (!exists) {
      await repo.save(repo.create(item));
    }
  }
}
