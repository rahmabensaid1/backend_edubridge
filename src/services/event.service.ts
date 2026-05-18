import { Repository } from "typeorm";
import { Event } from "../entities/event.entity";
import { AppDataSource } from "../config/data-source";
import { CreateEvent } from "../interfaces/event.interface";
import { User } from "../entities/user.entity";

export class EventService {
  private eventRepository: Repository<Event>;
  private userRepository: Repository<User>;

  constructor() {
    this.eventRepository = AppDataSource.getRepository(Event);
    this.userRepository = AppDataSource.getRepository(User);
  }

  // CREATE EVENT
  async createEventService(data: CreateEvent): Promise<Event> {
    const newEvent = this.eventRepository.create(data);
    const eventSaved = await this.eventRepository.save(newEvent);

    return eventSaved;
  }

  // GET ALL EVENTS
  async getEventsService(): Promise<Event[]> {
    return await this.eventRepository.find({ relations: ["users"] });
  }

  // GET EVENT BY ID
  async getEventByIdService(id: number): Promise<Event | null> {
    const event = await this.eventRepository.findOne({
      where: { id },
      relations: ["users"]
    });

    return event;
  }

  // DELETE EVENT
  async deleteEventService(id: number): Promise<boolean> {
    const result = await this.eventRepository.delete(id);

    return result.affected ? true : false;
  }

  async registerUserToEventService(eventId: number, userId: number): Promise<Event | string | null> {
    const event = await this.eventRepository.findOne({
      where: { id: eventId },
      relations: ["users"]
    });

    if (!event) {
      return null;
    }

    const alreadyRegistered = event.users?.some(user => user.id === userId);

    if (alreadyRegistered) {
      return "already_registered";
    }

    if (event.capaciteMax && event.users && event.users.length >= event.capaciteMax) {
      return "event_full";
    }

    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ["events"]
    });

    if (!user) {
      return "user_not_found";
    }

    user.events = [...(user.events || []), event];
    await this.userRepository.save(user);

    return await this.getEventByIdService(eventId);
  }

  async getRegisteredEventsByUserService(userId: number): Promise<Event[]> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ["events", "events.users"]
    });

    return user?.events || [];
  }
}
