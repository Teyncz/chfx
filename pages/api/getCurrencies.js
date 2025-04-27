import { PrismaClient } from '@/src/app/generated/prisma';

const prisma = new PrismaClient();
 
export default async function handler(req, res) {
  if (req.method === 'POST') {

    const currencies = await prisma.currencies.findMany();
    const lastUpdate = await prisma.lastUpdate.findFirst({
      orderBy: {
        id: 'desc',
      },
    });
    const currenciesTicks = await prisma.currenciesTicks.findMany();
    const groupedByCurrency = currenciesTicks.reduce((acc, tick) => {
      if (!acc[tick.currency]) {
        acc[tick.currency] = [];
      }
    
      acc[tick.currency].push({
        id: tick.id,
        close: tick.close,
        date: tick.date,
      });
    
      return acc;
    }, {});
    
    for (const currency in groupedByCurrency) {
      groupedByCurrency[currency].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }

    res.status(200).json({ status_code : 200, last_update: lastUpdate, data: currencies, ticks: groupedByCurrency });

  } else {
    res.status(405 ).json({ message: 'Method Not Allowed !' })

  }
}