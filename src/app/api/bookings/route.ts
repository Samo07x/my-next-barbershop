import { NextResponse } from 'next/server';
import { saveBooking, getBookedSlots, Booking } from '@/lib/data';

// GET /api/bookings?date=YYYY-MM-DD&barberId=xyz
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');
  const barberId = searchParams.get('barberId');

  if (!date || !barberId) {
    return NextResponse.json(
      { error: 'Date and Barber ID are required' },
      { status: 400 }
    );
  }

  try {
    const bookedSlots = await getBookedSlots(date, barberId);
    return NextResponse.json({ bookedSlots });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}

// POST /api/bookings
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    const requiredFields = ['serviceId', 'barberId', 'date', 'time', 'customerName', 'customerEmail', 'customerPhone'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const newBooking: Booking = {
      id: crypto.randomUUID(),
      ...body,
      createdAt: new Date().toISOString(),
    };

    const success = await saveBooking(newBooking);

    if (!success) {
      return NextResponse.json(
        { error: 'This time slot is already booked. Please choose another time.' },
        { status: 409 }
      );
    }

    return NextResponse.json({ success: true, booking: newBooking });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}
