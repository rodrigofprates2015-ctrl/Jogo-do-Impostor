import { type Player, type GameData } from "@shared/schema";

export type Room = {
  code: string;
  hostId: string;
  status: string;
  gameMode: string | null;
  currentCategory: string | null;
  currentWord: string | null;
  impostorId: string | null;
  gameData: GameData | null;
  players: Player[];
  createdAt: string;
};

export type InsertRoom = Omit<Room, 'createdAt'>;

export interface IStorage {
  createRoom(room: InsertRoom): Promise<Room>;
  getRoom(code: string): Promise<Room | undefined>;
  updateRoom(code: string, updates: Partial<InsertRoom>): Promise<Room | undefined>;
  addPlayerToRoom(code: string, player: Player): Promise<Room | undefined>;
  deleteRoom(code: string): Promise<void>;
}

export class MemoryStorage implements IStorage {
  private rooms: Map<string, Room> = new Map();

  async createRoom(insertRoom: InsertRoom): Promise<Room> {
    const room: Room = {
      ...insertRoom,
      createdAt: new Date().toISOString()
    };
    this.rooms.set(room.code, room);
    return room;
  }

  async getRoom(code: string): Promise<Room | undefined> {
    return this.rooms.get(code);
  }

  async updateRoom(code: string, updates: Partial<InsertRoom>): Promise<Room | undefined> {
    const room = this.rooms.get(code);
    if (!room) return undefined;

    const updatedRoom: Room = { ...room, ...updates };
    this.rooms.set(code, updatedRoom);
    return updatedRoom;
  }

  async addPlayerToRoom(code: string, player: Player): Promise<Room | undefined> {
    const room = this.rooms.get(code);
    if (!room) return undefined;

    const playerExists = room.players.some(p => p.uid === player.uid);
    if (playerExists) return room;

    const updatedRoom: Room = {
      ...room,
      players: [...room.players, player]
    };
    this.rooms.set(code, updatedRoom);
    return updatedRoom;
  }

  async deleteRoom(code: string): Promise<void> {
    this.rooms.delete(code);
  }

  cleanupOldRooms(): void {
    const oneHourAgo = Date.now() - 60 * 60 * 1000;
    const entries = Array.from(this.rooms.entries());
    entries.forEach(([code, room]) => {
      if (new Date(room.createdAt).getTime() < oneHourAgo) {
        this.rooms.delete(code);
      }
    });
  }
}

export const storage = new MemoryStorage();

setInterval(() => {
  (storage as MemoryStorage).cleanupOldRooms();
}, 30 * 60 * 1000);
