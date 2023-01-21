import Announcement from "../models/Announcement"; 
import { IRepository } from "./IRepository";

export class AnnouncementRepository implements IRepository<Announcement> {
    get(id: string | number): Promise<Announcement | null> {
        throw new Error("Method not implemented.");
    }
    create(entity: Partial<Announcement>): Promise<Announcement | null> {
        throw new Error("Method not implemented.");
    }
    update(entity: Partial<Announcement>): Promise<Announcement | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string | number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getAll(): Promise<Announcement[] | null> {
        return[
          {
            id: 1, topic:'240-124 Midterm 1/2566',description: 'คะแนน quiz ครั้งที่ 1',remarkIfPositive:'1',
            remarkIfNegative:'0',pubDateTime: new Date('2022-12-21 10:00:00'), userCode:'suthon.s'
          }
        ]
    }
}
