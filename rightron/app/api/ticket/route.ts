import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { pricePaid, currentPrice } = body;

  const difference = parseFloat(pricePaid) - parseFloat(currentPrice);

  let advice = '';

  if (difference > 0) {
    advice = `It looks like you may have overpaid by $${difference}. You may be eligible for seat adjustment, goodwill credit, or credit card price protection.`;
  } else {
    advice = `This ticket does not appear to have dropped below your purchase price.`;
  }

  return NextResponse.json({ result: advice });
}