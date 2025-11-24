import { NextResponse } from 'next/server';

export async function POST(req) {
  const { pricePaid, currentPrice } = await req.json();
  const diff = parseFloat(pricePaid) - parseFloat(currentPrice);
  let advice = "";
  if (!isNaN(diff) && diff > 0) {
    advice = `You may have overpaid by $${diff}.`;
  } else {
    advice = "No price drop detected.";
  }
  return NextResponse.json({ result: advice });
}