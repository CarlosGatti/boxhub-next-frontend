import Image from 'next/image';

interface Item {
  id: number;
  name: string;
  quantity: number;
  description: string;
  imageUrl: string;
}

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row">
      <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
        {item.imageUrl ? (
          <Image
            src={item.imageUrl}
            alt={item.name || 'No name available'}
            width={300}
            height={300}
            className="object-cover w-full h-full"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.png';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
            No Image
          </div>
        )}
      </div>
      <div className="p-4 flex-1">
        <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
        <p className="text-gray-600 text-sm mb-2">Qtt: {item.quantity}</p>
        <p className="text-gray-700 text-sm line-clamp-3">{item.description}</p>
      </div>
    </div>
  );
}
