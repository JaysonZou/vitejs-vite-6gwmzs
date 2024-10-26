import {
  Bell,
  Settings,
  Plus,
  Crown,
  Heart,
  Grid,
  Rocket,
  Disc,
  Building2,
  Gamepad2,
  Trophy,
  DollarSign,
  Gift,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function SpinWinner() {
  const games = [
    {
      name: '4 Fantastic Fish in Egypt',
      value: '32.4325253',
      image: '/placeholder.svg?height=80&width=80',
    },
    {
      name: 'penguin panic',
      value: '536.638',
      image: '/placeholder.svg?height=80&width=80',
    },
    {
      name: 'Book of rest',
      value: '12.43575782',
      image: '/placeholder.svg?height=80&width=80',
    },
    {
      name: 'ANIMAL QUEST',
      value: '536.638',
      image: '/placeholder.svg?height=80&width=80',
    },
    {
      name: 'AZTEC MAGIC MEGAM WAYS',
      value: '12.43575782',
      image: '/placeholder.svg?height=80&width=80',
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-yellow-400">SPIN</span>
          <span className="text-green-400">WINNER</span>
        </h1>
        <div className="flex items-center space-x-2">
          <Bell className="w-6 h-6" />
          <Settings className="w-6 h-6" />
        </div>
      </header>

      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-black font-bold">$</span>
          </div>
          <span className="font-bold">1,041.46</span>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-orange-500 hover:bg-orange-600"
          >
            <Plus className="w-4 h-4 mr-1" /> Add
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-green-500 hover:bg-green-600"
          >
            <Crown className="w-4 h-4 mr-1" /> VIP
          </Button>
        </div>
      </div>

      <Card className="m-4 bg-gray-800 border-none">
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">Bonus SPINS!</h2>
          <p className="text-sm mb-2">
            FREE $5 Promo code for every 250 spins!
          </p>
          <Button
            variant="outline"
            size="sm"
            className="bg-yellow-500 hover:bg-yellow-600 text-black"
          >
            Get Bonus
          </Button>
        </CardContent>
      </Card>

      <div className="flex justify-around py-2 bg-gray-800">
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center"
        >
          <Heart className="w-5 h-5 mb-1" />
          <span className="text-xs">Collect</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center"
        >
          <Grid className="w-5 h-5 mb-1" />
          <span className="text-xs">Slots</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center"
        >
          <Rocket className="w-5 h-5 mb-1" />
          <span className="text-xs">Rocket</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center"
        >
          <Disc className="w-5 h-5 mb-1" />
          <span className="text-xs">Turntable</span>
        </Button>
      </div>

      <div className="flex-grow overflow-auto">
        {games.map((game, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border-b border-gray-700"
          >
            <div className="flex items-center space-x-4">
              <img
                src={game.image}
                alt={game.name}
                className="w-12 h-12 rounded"
              />
              <div>
                <h3 className="font-bold">{game.name}</h3>
                <p className="text-yellow-400">{game.value}</p>
              </div>
            </div>
            <Button
              size="sm"
              className="bg-green-500 round-[20px] hover:bg-green-600"
            >
              Play
            </Button>
          </div>
        ))}
      </div>

      <footer className="flex justify-around py-2 bg-gray-800">
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center"
        >
          <Building2 className="w-5 h-5 mb-1" />
          <span className="text-xs">Bank</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center"
        >
          <Gamepad2 className="w-5 h-5 mb-1" />
          <span className="text-xs">Game</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center"
        >
          <Trophy className="w-5 h-5 mb-1" />
          <span className="text-xs">Jackpot</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center"
        >
          <DollarSign className="w-5 h-5 mb-1" />
          <span className="text-xs">Make Money</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center"
        >
          <Gift className="w-5 h-5 mb-1" />
          <span className="text-xs">Bonus</span>
        </Button>
      </footer>
    </div>
  );
}
