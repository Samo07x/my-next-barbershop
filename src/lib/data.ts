import fs from 'fs/promises';
import path from 'path';

// Define the Booking type
export interface Booking {
  id: string;
  serviceId: string;
  barberId: string;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  notes?: string;
  createdAt: string;
}

const DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'bookings.json');

export async function getBookings(): Promise<Booking[]> {
  try {
    const data = await fs.readFile(DATA_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    // If file doesn't exist or is empty, return empty array
    return [];
  }
}

export async function saveBooking(booking: Booking): Promise<boolean> {
  try {
    const bookings = await getBookings();
    
    // Check for conflicts
    const hasConflict = bookings.some(
      (b) => 
        b.barberId === booking.barberId && 
        b.date === booking.date && 
        b.time === booking.time
    );

    if (hasConflict) {
      return false;
    }

    bookings.push(booking);
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(bookings, null, 2));
    return true;
  } catch (error) {
    console.error("Error saving booking:", error);
    throw new Error("Failed to save booking");
  }
}

export async function getBookedSlots(date: string, barberId: string): Promise<string[]> {
  const bookings = await getBookings();
  return bookings
    .filter((b) => b.date === date && b.barberId === barberId)
    .map((b) => b.time);
}
